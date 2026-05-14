import { use, useState } from "react";
import AvailablePlayers from "../AvalaiblePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
const Players = ({PlayersPromise,setCoin,coin}) => {
    const Players=use(PlayersPromise);
   const [selectedType,setSelectedType]=useState("available");
   const [selectedPlayers,setSelectedPlayers]=useState([]);
   return (
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between mt-12.5 mb-6">
                {selectedType==="available"? <h2 className="text-2xl font-bold">Available Players</h2>:<h2 className="text-2xl font-bold">Selected (2/6)</h2>}
                
                <div className="flex">
                    <button
                     onClick={()=>{setSelectedType("available")}}
                     className={`btn ${selectedType==="available"?"btn-warning":"btn-soft"}  text-black rounded-r-none rounded-l-xl`}>Available</button>
                    <button 
                    onClick={()=>{setSelectedType("selected")}}
                    className={`btn btn-warning text-black rounded-l-none rounded-r-xl ${selectedType==="selected"?"btn-warning":"btn-soft"}`}>Selected (0)</button>
                </div>

            </div>
            
            {selectedType==="available"?
            <AvailablePlayers Players={Players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>
            :<SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>}
        </div>

    );
};

export default Players;