import "./Banner.css";
import BannerImg from "../../assets/banner-main.png";
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-2xl ">
  <div className="hero-content text-center ">
    <div className=" flex flex-col items-center justify-center">
        <img src={BannerImg} alt=""  />
      <h1 className="text-5xl font-bold text-[white]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="py-6 text-gray-300">
       Beyond Boundaries Beyond Limits
      </p>
      <button className="btn bg-[#E7FE29]  outline-1 outline-[#E7FE29] text-black">Claim Free Credit</button>


    </div>
  </div>
</div>

    );
};

export default Banner;