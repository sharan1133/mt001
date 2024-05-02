// import { Link } from "react-router-dom";
// import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const Footer = () => {
  return (
    <div className="flex justify-center bg-black p-4 w-full ">
      <div className="text-white flex max-w-screen-xl w-full justify-around ">
        <div>
          <p className="font-bold">Information</p>
          <ul className="p-2">
            <li className="hover:text-[#d9475c] cursor-pointer">About us</li>
            <li className="hover:text-[#d9475c] cursor-pointer">Contact us</li>
            <li className="hover:text-[#d9475c] cursor-pointer">
              Success Stories
            </li>
            <li className="hover:text-[#d9475c] cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Other links</p>
          <ul className="p-2">
            <li className="hover:text-[#d9475c] cursor-pointer">
              Report Abuse
            </li>
            <li className="hover:text-[#d9475c] cursor-pointer">Disclaimer</li>
            <li className="hover:text-[#d9475c] cursor-pointer">
              Refund & Cancellation
            </li>
            <li className="hover:text-[#d9475c] cursor-pointer">
              Terms of Use
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-black text-black text-2xl bg-gradient-to-r from-[#d9475c] to-[#f9f9f9]">
            NELAKKII BOLCHAA
          </h1>
          <p className="text-white pt-4 hover:text-[#d9475c] cursor-pointer">
            {/* <Link>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>{" "} */}
            Email: nelakkii@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
