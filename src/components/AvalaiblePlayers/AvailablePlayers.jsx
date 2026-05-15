import Card from "../UI/Card";
const AvailablePlayers = ({Players,setCoin,coin,selectedPlayers,setSelectedPlayers}) => {
    //console.log(Players)
    return (
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
         Players.map(player=> <Card key={player.id} player={player} setCoin={setCoin} coin={coin}
         selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>)   
        }
       </div>
       
    );
};

export default AvailablePlayers;