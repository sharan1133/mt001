import { buttonColor } from "../colors/Colors";

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleViewProfile = (profileData) => {
    navigate('/profile', {state: { profileData } });
  };


//const Home = () => {
  return (
    <div className="flex justify-center flex-wrap bg-[#f9f9f9]">
      <div className="card card-side bg-base-100 shadow-xl m-4 lg:w-1/2 md:w-3/4 sm:w-full w-full ">
        <figure className="w-1/4">
          <img
            src="https://zerogravity.photography/assets/images/2021/04/MAHI0913.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : <span className="font-normal">John Doe</span>{" "}
          </h2>
          <p>
            <span className="font-bold">Age :</span> 28
          </p>
          <p>
            <span className="font-bold">Qualification :</span> B.E/B.Tech
          </p>
          <p>
            <span className="font-bold">Religion :</span> Hindu
          </p>
          <div className="card-actions ">
	   <button
              className="btn bg-[#d9475c]"
              onClick={() => handleViewProfile({ name: 'John Doe', age: 27, qualification: 'B.E/B.Tech', religion: 'Hindu' })}

            >
              View Profile
            </button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl m-4 lg:w-1/2 md:w-3/4 sm:w-full w-full">
        <figure className="w-1/4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOjjh9kej_GYxPhLNQbYR7UPaAYtKBtQsw9DskwxR8GZUbqPxJnCIF1-SanM5G5m4it4&usqp=CAU"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : <span className="font-normal">Surya Roy</span>{" "}
          </h2>
          <p>
            <span className="font-bold">Age :</span> 27
          </p>
          <p>
            <span className="font-bold">Qualification :</span> B.E/B.Tech
          </p>
          <p>
            <span className="font-bold">Religion :</span> Hindu
          </p>
          <div className="card-actions ">
            <button className={"btn bg-[#d9475c]"}>View Profile</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl m-4 lg:w-1/2 md:w-3/4 sm:w-full w-full">
        <figure className="w-1/4">
          <img
            src="https://www.shaadibaraati.com/ckfinder/userfiles/images/__thumbs/ts29.jpg/ts29__400x600.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : <span className="font-normal">Surya Roy</span>{" "}
          </h2>
          <p>
            <span className="font-bold">Age :</span> 27
          </p>
          <p>
            <span className="font-bold">Qualification :</span> B.E/B.Tech
          </p>
          <p>
            <span className="font-bold">Religion :</span> Hindu
          </p>
          <div className="card-actions ">
            <button className={"btn bg-[#d9475c]"}>View Profile</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl m-4 lg:w-1/2 md:w-3/4 sm:w-full w-full">
        <figure className="w-1/4">
          <img
            src="https://www.shaadibaraati.com/ckfinder/userfiles/images/__thumbs/ts29.jpg/ts29__400x600.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : <span className="font-normal">Surya Roy</span>{" "}
          </h2>
          <p>
            <span className="font-bold">Age :</span> 27
          </p>
          <p>
            <span className="font-bold">Qualification :</span> B.E/B.Tech
          </p>
          <p>
            <span className="font-bold">Religion :</span> Hindu
          </p>
          <div className="card-actions ">
            <button className={"btn bg-[#d9475c]"}>View Profile</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl m-4 lg:w-1/2 md:w-3/4 sm:w-full w-full">
        <figure className="w-1/4">
          <img
            src="https://www.shaadibaraati.com/ckfinder/userfiles/images/__thumbs/ts29.jpg/ts29__400x600.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : <span className="font-normal">Surya Roy</span>{" "}
          </h2>
          <p>
            <span className="font-bold">Age :</span> 27
          </p>
          <p>
            <span className="font-bold">Qualification :</span> B.E/B.Tech
          </p>
          <p>
            <span className="font-bold">Religion :</span> Hindu
          </p>
          <div className="card-actions ">
            <button className={"btn bg-[#d9475c]"}>View Profile</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl m-4 lg:w-1/2 md:w-3/4 sm:w-full w-full">
        <figure className="w-1/4">
          <img
            src="https://www.shaadibaraati.com/ckfinder/userfiles/images/__thumbs/ts29.jpg/ts29__400x600.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : <span className="font-normal">Surya Roy</span>{" "}
          </h2>
          <p>
            <span className="font-bold">Age :</span> 27
          </p>
          <p>
            <span className="font-bold">Qualification :</span> B.E/B.Tech
          </p>
          <p>
            <span className="font-bold">Religion :</span> Hindu
          </p>
          <div className="card-actions ">
            <button className={"btn bg-[#d9475c]"}>View Profile</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl m-4 lg:w-1/2 md:w-3/4 sm:w-full w-full">
        <figure className="w-1/4">
          <img
            src="https://www.shaadibaraati.com/ckfinder/userfiles/images/__thumbs/ts29.jpg/ts29__400x600.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : <span className="font-normal">Surya Roy</span>{" "}
          </h2>
          <p>
            <span className="font-bold">Age :</span> 27
          </p>
          <p>
            <span className="font-bold">Qualification :</span> B.E/B.Tech
          </p>
          <p>
            <span className="font-bold">Religion :</span> Hindu
          </p>
          <div className="card-actions ">
            <button className={"btn bg-[#d9475c]"}>View Profile</button>
          </div>
        </div>
      </div>
            

    </div>
  );
};

export default Home;
