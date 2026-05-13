import { use } from "react";

const Players = ({PlayersPromise}) => {
    const Data=use(PlayersPromise);
    console.log(Data);
    return (
        <div>
            players
        </div>
    );
};

export default Players;