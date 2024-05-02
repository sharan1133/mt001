import { Link } from "react-router-dom";
import { backgroundColor } from "../colors/Colors";
import { borderRadius } from "../colors/Colors";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-80v  ">
        <div
          className={`bg-[#d9475c]  pl-[2%] pr-[2%] pt-[1%] pb-[1%] lg:w-[50%] md:w-[75%] ${borderRadius} shadow-2xl`}
        >
          <p className="p-2 pl-0 font-bold border-dashed">Login to Continue</p>
          <form>
            <input
              type="text"
              placeholder="Email / Phone number"
              className="input input-bordered w-full  block p-2 mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full  block p-2"
            />
            <p className="p-2 pl-0">
              <Link>Forgot Password</Link>
            </p>
            <Link to="/home">
              <button className="btn hover:btn-outline w-full p-2 mb-2">
                Login
              </button>
            </Link>
          </form>
          <hr className=" block w-full"></hr>
          <p className="text-center p-2">New on nelakkibolchaa?</p>
          <Link to="/register">
          <button className="btn hover:btn-outline w-full p-2">Register</button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Login;
