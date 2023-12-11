import boat from "../assets/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import boult from "../assets/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import noise from "../assets/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import zebronics from "../assets/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg";
import Cushion from "../assets/HF_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg";
import homeDecoration from "../assets/Home_Decor_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg";
import homeStorage from "../assets/Home_Decor_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg";
import light from "../assets/Indoor_Lighting_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg";
import spinmop from "../assets/QC-adapts_186x116_4._SY116_CB600489960_.jpg";
import towel from "../assets/QC-adapts_186x116_3._SY116_CB600489960_.jpg";
import hammer from "../assets/QC-adapts_186x116_7._SY116_CB600489960_.jpg";
import extension from "../assets/QC-adapts_186x116_5._SY116_CB600489960_.jpg";
import aircondition from "../assets/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg";
import refregirator from "../assets/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg";
import microwave from "../assets/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg";
import washingMachine from "../assets/186x116---wm._SY116_CB667322346_.jpg";
function HeroSection() {
  return (
    <>
      <div className="hero-section flex gap-6 ">
        <div className="hero-cards  w-80 h-72 mt-72 ml-5 bg-white font-bold justify-center p-2 text-xl">
          Up to 75% off | Headphones
          <div className="flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={boat} alt="" />
              <div className="card-info">Up to 75% off | boAt</div>
            </div>
            <div className="div2  w-36 ">
              <img src={boult} alt="" />
              <div className="card-info">Up to 75% off | boult</div>
            </div>
          </div>
          <div className="second-card flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={noise} alt="" />
              <div className="card-info">Up to 75% off | Noise</div>
            </div>
            <div className="div2  w-36 ">
              <img src={zebronics} alt="" />
              <div className="card-info">Up to 75% off |zebronics</div>
            </div>
          </div>
        </div>

        <div className="hero-cards  w-80 h-72 mt-72 ml-5 bg-white font-bold justify-center p-2 text-xl">
          Revamp your home in style
          <div className="flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={Cushion} alt="" />
              <div className="card-info">Cushion covers, bedsheets & more</div>
            </div>
            <div className="div2  w-36 ">
              <img src={homeDecoration} alt="" />
              <div className="card-info">Home decoration</div>
            </div>
          </div>
          <div className="second-card flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={homeStorage} alt="" />
              <div className="card-info">Home storage</div>
            </div>
            <div className="div2  w-36 ">
              <img src={light} alt="" />
              <div className="card-info">Lighting solutions</div>
            </div>
          </div>
        </div>
        <div className="hero-cards  w-80 h-76 mt-72 ml-5 bg-white font-bold justify-center p-2 text-xl ">
          Starting ₹99 | All your home improvement needs
          <div className="flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={spinmop} alt="" />
              <div className="card-info">Spin mops, wipes & more</div>
            </div>
            <div className="div2  w-36 ">
              <img src={towel} alt="" />
              <div className="card-info">Bathroom hardware & accessories</div>
            </div>
          </div>
          <div className="second-card flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={hammer} alt="" />
              <div className="card-info">Hammers, screwdrivers & more</div>
            </div>
            <div className="div2  w-36 ">
              <img src={extension} alt="" />
              <div className="card-info">Extension boards, plugs & more</div>
            </div>
          </div>
        </div>
        <div className="hero-cards  w-80 h-72 mt-72 ml-5 bg-white font-bold justify-center p-2 text-xl">
          Appliances for your home | Up to 55% off
          <div className="flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={aircondition} alt="" />
              <div className="card-info">Air conditioners</div>
            </div>
            <div className="div2  w-36 ">
              <img src={refregirator} alt="" />
              <div className="card-info">Refrigerators</div>
            </div>
          </div>
          <div className="second-card flex gap-2 mt-2 cursor-pointer">
            <div className="div1  w-36 ">
              <img src={microwave} alt="" />
              <div className="card-info">Microwaves</div>
            </div>
            <div className="div2  w-36 ">
              <img src={washingMachine} alt="" />
              <div className="card-info">Washing machines</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
