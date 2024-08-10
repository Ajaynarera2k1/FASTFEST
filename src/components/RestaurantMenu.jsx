 import { useState,useEffect } from "react";
 import Loader from "./Loader"
 import { useParams } from "react-router-dom";
 import { MENU_API } from "../utils/constants";
 import RestaurantCategory from "./RestaurantCategory";



     

  const RestaurantMenu = () => {
      const[resInfo,setResInfo] = useState(null);
     
      const [showIndex,setShowIndexx] = useState(null);
  

      const { resId } = useParams();
      console.log(resId);
            
      useEffect(() => {
         fetchData();
      }, []);

      
      
      
        const fetchData = async() => {       
            //  const data = await fetch( MENU_API + resId);
            //  const json = await data.json();
            //   console.log(json);
            //   setResInfo(json.data);
            try {

              const res = await fetch("https://handler-cors.vercel.app/fetch", {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({
              url: ( MENU_API + resId), 
              //Replace this example url with right url which you want to access
              })
              });
              
              
              if (!res.ok) {
              throw new Error(`Error: ${res.status} ${res.statusText}`);
              }
              
              
              const raw = await res.json();
              console.log(raw); // see raw in console
              setResInfo(raw.data);
              
              } 
              catch (error) {
              console.error("Error fetching data:", error);
              }
              
          };

         if (resInfo === null) return <Loader /> ;
          
         const {
            name,
            cuisines,
            costForTwoMessage,
                } = resInfo?.cards[2]?.card?.card?.info;

                const { itemCards } =
                resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
            
              // console.log(itemCards);   
              
              const Categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (category) => {
                return     category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                    //  console.log(category);
                }
              );
              // console.log(Categories);   
            
         
          return(
           <div className="ResMenu m-5 text-center  py-5">      
            {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(' , ')} -: {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage} </p> */}
            
            <h1 className="font-bold text-2xl">{name}</h1>
            <p>{cuisines.join(' , ')} -: {costForTwoMessage}</p>

            {/* accordion categfories */}

            {
              Categories.map((category,index, setShowIndex) => {
                       return    <RestaurantCategory 
                        data={category?.card?.card} 
                        key = {category?.card?.card.id}
                        showItems={ index === showIndex ?true :false}
                        setShowIndex ={() =>setShowIndexx(index) }
                        />

              })
            }
             
            {/* <h3 className="font-bold text-xl" >Menu</h3>
            <ul>
              {itemCards.map((item) => 
              <li key={item.card.info.id}>
                 {item.card.info.name} - {"Rs."}
                 {item.card.info.price/100 || item.card.info.defaultPrice/100}
                 </li>)}
    
            </ul> */}
              </div>
              );     
            
   }

export default RestaurantMenu;