import { FaUserAlt} from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
const Card = ({player}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={player.img}
      alt="Shoes" />
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
        <p className="text-[#131313] font-semibold">Price :{player.price}</p>
        
        <button className="btn rounded-xl">Choose Player</button>
    </div>
    </div>
  </div>
</div>
    );
};

export default Card;