import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/CartSlice";




const ItemsList = ({items}) => {
 
    // console.log(items);
    const dispatch = useDispatch();
    // console.log(dispatch);

    function handleAddBtn (item) {
             dispatch(addToCart(item));
             console.log();

    }

  

    return(     
      <div>          
            {
                items.map((item) => {
                 return   <div
                    key={item.card.info.id}
                    className="bg-gray-100 w-6/12 mx-auto my-2 py-2 px-4 shadow-xl flex justify-between"
                    >
                        {/* left side */}
                        <div className="w-8/12 text-left  ">
                                 <div className="font-semibold  py-4">
                                       <span> {item.card.info.name}</span>
                                     
                                        <span>  -: ₹  {(item.card.info.price) ? (item.card.info.price /100) : (item.card.info.defaultPrice /100)} </span>

                                 </div>
                                 <p className="text-justify text-sm mb-2">{item.card.info.description}</p>
                              
                            </div>
                             <div className="w-36 rpunded-sm relative">
                                  <img
                                   src={CDN_URL + item?.card?.info?.imageId } 
                                   
                                   />
                                  {/* item.card.info.cloudinaryImageId */}
                                  <div>
                                     <button 
                                     onClick={() =>   handleAddBtn(item) }                                    
                                     className="absolute bg-white bottom-0 left-0 font-mono py-2 px-3 rounded-md">ADD</button>
                                  </div>
                             </div>
                        
                        
                    </div>
                })
            }
        </div>
    );
}

export default ItemsList;