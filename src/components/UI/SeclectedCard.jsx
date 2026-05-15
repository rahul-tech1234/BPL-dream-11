import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const SeclectedCard = ({Player,handleDeletSelectPlayer}) => {


    
    return (
        <div  className="flex justify-between items-center gap-6 p-1 rounded-2xl border">
                <div className="flex items-center gap-2">
                  <img src={Player.img} alt="" className="h-25 w-auto rounded-2xl" /> 
                <div>
                    <h2 className="flex gap-2 items-center font-bold text-2xl"><FaUser/>{Player.name}</h2>
                    <p className="font-semibold">{Player.country}</p>
                </div>
                </div>
                
                
                <button className="btn text-red-500" onClick={()=>handleDeletSelectPlayer(Player)}><MdDelete /></button>
                
            </div>
    );
};

export default SeclectedCard;