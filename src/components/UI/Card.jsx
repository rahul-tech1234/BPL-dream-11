import { useState } from "react";
import { FaUserAlt} from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { toast } from "react-toastify";
const Card = ({player,setCoin,coin,selectedPlayers,setSelectedPlayers}) => {
    const [isSelected,setIsSelected]=useState(false);
    const handleChosePlayer=()=>{
        const newCoin=coin-Number(player.price);
        if (newCoin>=0) {
            setCoin(coin-Number(player.price));
           // alert();
           toast(`${player.name} is selected`);
        }else{
            toast.warning("Not Enough Coin");
            return
        }
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers,player]);
    }
    //console.log(coin,Number(player.price)) 
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={player.img}
      alt="Shoes"
      className="h-50 w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUserAlt /> {player.name}</h2>
    <div className="flex justify-between gap-2 items-center">
        <IoFlag />
        <p>{player.country}</p>
        <button className="btn">{player.battingStyle}</button>
    </div>

    <div className="divider"></div>
    <h2 className="text-[#131313] font-bold mb-3">Rating:  ({player.rating})</h2>
    <div className="flex justify-between">
    <div className="space-y-5">
        <p className="text-[#131313] font-semibold">{player.battingStyle}</p>
        <p className="text-[#131313] font-semibold">{player.bowlingStyle}</p>
    </div>
    <div className="space-y-2">
        <p className="text-[#131313] font-semibold ">Price :{player.price}</p>
        
        <button 
        onClick={handleChosePlayer}
        disabled={isSelected}
        className="btn rounded-xl">{ isSelected?"Selecte":"Choose Player"}</button>
    </div>
    </div>
  </div>
</div>
    );
};

export default Card;