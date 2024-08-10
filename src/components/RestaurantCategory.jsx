import { useState } from "react";
import ItemsList from "./ItemList";
const RestaurantCategory = ({data,showItems, setShowIndex}) => {
    // const [showItems,setShowItems] = useState(false)

    function toggleBtn(){
         console.log("clicked");
        //  setShowItems(!showItems);
        setShowIndex();
    }
    // console.log(data); 
    return(
        
   
    
    <div className="">
        {/* header */}
        <div className="bg-gray-100 w-6/12 mx-auto my-4 p-3 shadow-xl flex justify-between cursor-pointer" onClick={toggleBtn}>
            <span className="font-bold text-lg">{data.title}   ({data.itemCards.length})</span>
            {/* <span className="font=bold text-lg">{}</span> */}
               {showItems == false ?   <span>  ➕ </span> :  <span>  ➖ </span>} 
          
        </div>
        {/* accordion body */}
          {showItems &&  <ItemsList items={data.itemCards} />} 
        {/* footer */}
    </div>
    );
};
export default RestaurantCategory;