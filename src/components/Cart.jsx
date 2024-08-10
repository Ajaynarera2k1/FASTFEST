import { useDispatch ,useSelector} from "react-redux";
import ItemsList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
            dispatch( clearCart() );
    };

    const cartItems = useSelector((store) =>store.cart.items );
    return(
       
        <div className="p-4 ">
                 <div className="text-2xl mx-auto w-6/12 font-semibold px-6 capitalize  flex justify-between my-8">
                         {/* <h1 >cartItems</h1>
                         <button>clear Cart</button> */}
                         <span className=" bg-gray-200 p-2  text-black-700 rounded-md shadow-2xl hover:bg-gray-300 " >cartItems</span>
                         <span
                         onClick={handleClearCart}
                         className=" bg-gray-200 p-2 rounded-md shadow-2xl cursor-pointer text-black-700 hover:bg-gray-300">clearCart</span>
                 </div>
            
              <ItemsList items={cartItems} />

        </div>
    );
}

export default Cart;