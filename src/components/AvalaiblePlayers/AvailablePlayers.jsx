import Card from "../UI/Card";
const AvailablePlayers = ({Players}) => {
    console.log(Players)
    return (
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
         Players.map(player=> <Card player={player}></Card>)   
        }
       </div>
       
       
//        <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title"><FaUserAlt /> Card Title</h2>
//     <div className="flex justify-between gap-2 items-center">
//         <IoFlag />
//         <p>India</p>
//         <button className="btn">All-Rounder</button>
//     </div>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

//     <div className="divider"></div>
//     <h2 className="text-[#131313] font-bold mb-3">Rating</h2>
//     <div className="flex justify-between">
//     <div className="space-y-5">
//         <p className="text-[#131313] font-semibold">Left-Hand-Bat</p>
//         <p className="text-[#131313] font-semibold">Price: $1500000</p>
//     </div>
//     <div className="space-y-2">
//         <p className="text-[#131313] font-normal">Left-Hand-Bat</p>
        
//         <button className="btn rounded-xl">Choose Player</button>
//     </div>
//     </div>
//   </div>
// </div>
    );
};

export default AvailablePlayers;