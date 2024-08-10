import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div
            className="p-2 w-[13.5rem] m-2 h-[480px] bg-gray-100 hover:bg-gray-200"
            // style={{
            //     backgroundColor: '#f0f0f0',
               
            // }}
        >
            <img
                className="rounded-lg h-[13.6rem]"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className='my-4 font-bold'>{name}</h3>
            <h4 className='my-4'>{cuisines.join(', ')}</h4>
            <h4 className='my-4'>{avgRating} stars</h4>
            <h4 className='my-4'>{costForTwo}</h4>
            <h4 className='my-4'>{sla?.slaString} </h4>
        
        </div>
        
    );
};

// higher order component takes input component and give enhanced component as out put

// export const withPromotedLabel = (RestaurantCard) => {
//        return (props) => {
//               return (
//                    <div>
//                         <label className='text-black m-2 p-2 bg-red-400'>
//                             veg
//                         </label>
//                         <RestaurantCard {...props}/>
//                    </div>
//               );
//        };
// };











export default RestaurantCard;
