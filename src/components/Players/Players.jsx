import { use } from "react";
import AvailablePlayers from "../AvalaiblePlayers/AvailablePlayers";
const Players = ({PlayersPromise}) => {
    const Players=use(PlayersPromise);
   
    return (
        <div className="container mx-auto">
            Players:{Players.length}
            <AvailablePlayers Players={Players}></AvailablePlayers>
        </div>

    );
};

export default Players;