import  DollerSVG  from "../../assets/Vector.svg";
const NavBar = () => {
    return (
        <div>

<div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-squar font-bold text-xl">
      0 Coin
      <img src={DollerSVG} alt="" />
    </button>
  </div>
</div>



        </div>
    );
};

export default NavBar;