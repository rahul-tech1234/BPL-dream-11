import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Players from "./components/Players/Players";
// const fetchPlayers=async()=>{
//   const res=await fetch("/PlayersData.json");
//   return res
// }
//const PlayersPromise=fetch("/pricingData.json").then(res=>res.json());
function App() {
  //const PlayersPromise=fetchPlayers();
  return (
    <>
        <header>
          <NavBar></NavBar>
        </header>
        <main className='bg-[#000]'>
          <Banner></Banner>
          {/* <Players PlayersPromise={PlayersPromise}></Players> */}
        </main>
    </>
  )
}

export default App
