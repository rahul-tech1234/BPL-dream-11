
import SeclectedCard from "../UI/SeclectedCard";
const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,setCoin,coin}) => {
    const handleDeletSelectPlayer=(Player)=>{
            console.log(selectedPlayers,"selectedPlayers");
            const filterplayer=selectedPlayers.filter(selectedplayer=>selectedplayer.name!==Player.name);
            //console.log(filterplayer,"filterplayer");
            
            //console.log(filterplayer.price)
            setSelectedPlayers(filterplayer);
            setCoin(coin+Number(Player.price,))

        }
    //console.log(selectedPlayers.length,"selectedPlayers");
    return (
        <div className=" space-y-2">
           {selectedPlayers.length===0 ?
            <div className="h-100 flex  items-center justify-center flex-col gap-4">
                <h2 className="font-semibold text-xl">No Players Selected yet</h2>
                <p>Go to avalable tab to select players</p>
            </div>
           :selectedPlayers.map((Player,i)=><SeclectedCard key={i} Player={Player} handleDeletSelectPlayer={handleDeletSelectPlayer}></SeclectedCard>)
                } 
        </div>
    );
};

export default SelectedPlayers;