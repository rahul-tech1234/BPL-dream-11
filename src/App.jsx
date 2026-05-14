import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Players from "./components/Players/Players"
import { Suspense, useState } from 'react';
const fetchPlayers=async()=>{
  const res=await fetch("/PlayersData.json");
  return res.json();
}
//const PlayersPromise=fetch("/pricingData.json").then(res=>res.json());
function App() {
  const PlayersPromise=fetchPlayers();
  const [coin,setCoin]=useState(30);
  return (
    <>
        <header>
          <NavBar coin={coin}></NavBar>
        </header>
        <main>
          <Banner></Banner>
       <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players PlayersPromise={PlayersPromise} setCoin={setCoin} coin={coin}></Players>
        </Suspense>
        </main>
    </>
  )
}

export default App
