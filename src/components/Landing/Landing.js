import landingImage from "./assets/landing.jpg";
import LandingBody from "./LandingBody";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="">
        <div className="lg:h-60v md:h-40v sm:h-30v h-30v">
          <img
            src={landingImage}
            className="lg:h-60v md:h-40v sm:h-30v h-30v w-full object-cover absolute  object-left-top inline -z-10"
          />
          <div className="flex items-center">
            <div className="backdrop-blur-sm p-4">
              <p className="notoSerif text-6xl font-black text-center">
                <span>Now, chat for free!</span>
              </p>
              <p className="font-semibold mt-1.5 text-lg  text-black text-center">
                Finding your perfect match just became easier
              </p>
              <p className="text-center p-4">
                <Link className="btn bg-[#d9475c] outline-none" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <LandingBody />
    </>
  );
};

export default Landing;
