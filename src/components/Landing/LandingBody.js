// import { IoIosPeople } from "react-icons/io";
import Subscription from "../subscriptions/Subscription";
import About from "../about/About";
import Tick from "../icons/Tick";
import Wrong from "../icons/Wrong";

const LandingBody = () => {
  return (
    <div className="flex justify-center relative bottom-11">
      <div className="card bg-base-100 shadow-xl xl:w-4/5 w-[90%] p-[2%]">
        <div>
          <p className="mb-1 text-xs font-bold tracking-[.094em] text-[#8a9db0] lg:text-sm">
            More than 25 YEARS OF
          </p>
          <h2 class=" text-lg  lg:text-2xl font-medium lg:font-semibold ">
            Bringing People<span class="pl-1 text-[#d9475c]">Together</span>
          </h2>
        </div>
        {/* <IoIosPeople /> */}
        <div class="bg-[#f9f9f9] px-5 py-8 mt-4">
          <div class=" lg:justify-around lg:flex">
            <div class=" my-5 flex items-center lg:flex-col lg:items-start">
              <div class="   scale-100 lg:mb-2 lg:scale-110">
                <svg
                  viewBox="0 0 50 40"
                  width="70"
                  height="40"
                  alt="Screened Profiles"
                >
                  <defs>
                    <path
                      id="Screened_Profiles_svg__a"
                      d="M0 0h46.987v40H0z"
                    ></path>
                    <path
                      d="M7.513 15.029c-3.976 0-7.2-3.365-7.2-7.515C.314 3.364 3.538 0 7.514 0c3.975 0 7.198 3.364 7.198 7.514s-3.223 7.515-7.198 7.515Zm-.608 1.366H8.36a6.905 6.905 0 0 1 6.905 6.905v9.92a6.905 6.905 0 0 1-6.905 6.906H6.905A6.905 6.905 0 0 1 0 33.221V23.3a6.905 6.905 0 0 1 6.905-6.905Z"
                      id="Screened_Profiles_svg__c"
                    ></path>
                    <path
                      d="M7.513 15.029c-3.976 0-7.2-3.365-7.2-7.515C.314 3.364 3.538 0 7.514 0c3.975 0 7.198 3.364 7.198 7.514s-3.223 7.515-7.198 7.515Zm-.608 1.366H8.36a6.905 6.905 0 0 1 6.905 6.905v8.494a6.905 6.905 0 0 1-6.905 6.905H6.905A6.905 6.905 0 0 1 0 31.794V23.3a6.905 6.905 0 0 1 6.905-6.905Z"
                      id="Screened_Profiles_svg__d"
                    ></path>
                    <path
                      d="M9.648 18.366c-5.106 0-9.245-4.112-9.245-9.183C.403 4.11 4.543 0 9.648 0c5.106 0 9.246 4.111 9.246 9.183 0 5.071-4.14 9.183-9.246 9.183Zm-2.743 1.669H12.7a6.905 6.905 0 0 1 6.906 6.905v10.504a6.905 6.905 0 0 1-6.906 6.905H6.905A6.905 6.905 0 0 1 0 37.444V26.94a6.905 6.905 0 0 1 6.905-6.905Z"
                      id="Screened_Profiles_svg__e"
                    ></path>
                    <path
                      d="M7.018 0a7.022 7.022 0 0 0 0 14.044A7.022 7.022 0 0 0 7.018 0Z"
                      id="Screened_Profiles_svg__f"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="Screened_Profiles_svg__b" fill="#fff"></mask>
                    <g mask="url(#Screened_Profiles_svg__b)">
                      <g opacity="0.614" transform="translate(2.104 7.577)">
                        <path
                          stroke="#14202B"
                          stroke-width="1.053"
                          d="M7.513 14.502c3.68 0 6.672-3.123 6.672-6.988 0-3.864-2.993-6.988-6.672-6.988C3.833.526.84 3.65.84 7.514c0 3.865 2.993 6.988 6.673 6.988Zm-.608 2.419A6.379 6.379 0 0 0 .526 23.3v9.92a6.379 6.379 0 0 0 6.38 6.38H8.36a6.379 6.379 0 0 0 6.379-6.38V23.3a6.379 6.379 0 0 0-6.38-6.379H6.906Z"
                        ></path>
                        <ellipse
                          fill="#F5CAD0"
                          cx="8.242"
                          cy="6.979"
                          rx="6.672"
                          ry="6.979"
                        ></ellipse>
                      </g>
                      <g opacity="0.614" transform="translate(30.381 7.453)">
                        <path
                          stroke="#14202B"
                          stroke-width="1.053"
                          d="M7.513 14.502c3.68 0 6.672-3.123 6.672-6.988 0-3.864-2.993-6.988-6.672-6.988C3.833.526.84 3.65.84 7.514c0 3.865 2.993 6.988 6.673 6.988Zm-.608 2.419A6.379 6.379 0 0 0 .526 23.3v8.494a6.379 6.379 0 0 0 6.38 6.379H8.36a6.379 6.379 0 0 0 6.379-6.38V23.3a6.379 6.379 0 0 0-6.38-6.379H6.906Z"
                        ></path>
                        <ellipse
                          fill="#F5CAD0"
                          cx="8.242"
                          cy="6.979"
                          rx="6.672"
                          ry="6.979"
                        ></ellipse>
                      </g>
                      <g transform="translate(12.623 1.963)">
                        <path
                          stroke="#14202B"
                          stroke-width="1.053"
                          d="M10.223 18.433c4.816 0 8.72-3.877 8.72-8.657s-3.904-8.656-8.72-8.656c-4.816 0-8.719 3.876-8.719 8.656 0 4.78 3.903 8.657 8.72 8.657ZM7.48 21.154a6.379 6.379 0 0 0-6.379 6.38v10.503a6.379 6.379 0 0 0 6.38 6.379h5.793a6.379 6.379 0 0 0 6.38-6.379V27.533a6.379 6.379 0 0 0-6.38-6.379H7.48Z"
                          stroke-linejoin="square"
                          fill="#FFF"
                        ></path>
                        <path
                          stroke="#FFF"
                          stroke-width="0.702"
                          d="M10.223 19.31c-5.3 0-9.596-4.268-9.596-9.534C.627 4.51 4.924.242 10.223.242c5.3 0 9.596 4.268 9.596 9.534 0 5.266-4.297 9.534-9.596 9.534Zm-2.743.967h5.794a7.256 7.256 0 0 1 7.256 7.256v10.504a7.256 7.256 0 0 1-7.256 7.256H7.48a7.256 7.256 0 0 1-7.256-7.256V27.533a7.256 7.256 0 0 1 7.256-7.256Z"
                        ></path>
                        <ellipse
                          fill="#F5CAD0"
                          cx="11.371"
                          cy="9.651"
                          rx="8.401"
                          ry="8.344"
                        ></ellipse>
                      </g>
                    </g>
                    <g transform="translate(39.079 25.263)">
                      <mask id="Screened_Profiles_svg__g" fill="#fff"></mask>
                      <path
                        fill="#D9475C"
                        fill-rule="nonzero"
                        stroke="#FFF"
                        stroke-width="0.702"
                        d="M7.018-.35a7.373 7.373 0 0 1 0 14.745 7.373 7.373 0 0 1 0-14.746Z"
                      ></path>
                      <path
                        d="M5.902 9.848 3.535 7.594a.61.61 0 0 1-.193-.443.61.61 0 0 1 .193-.443.68.68 0 0 1 .93 0L6.37 8.517l4.537-4.32a.68.68 0 0 1 .93 0 .604.604 0 0 1 0 .885L6.832 9.848a.68.68 0 0 1-.93 0Z"
                        fill="#FFF"
                        mask="url(#Screened_Profiles_svg__g)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="   border-l border-gray-300 pl-2 lg:border-none">
                <h4 class="   block text-sm font-semibold text-[#14202b] lg:hidden">
                  100% Screened Profiles
                </h4>
                <h4 class="   f16 hidden font-semibold text-[#14202b] lg:block">
                  100% Screened Profiles
                </h4>
                <div class="   mt-2 mb-1 hidden h-[2px] w-10 bg-primary-500 lg:block"></div>
                <p class="   mt-1 block text-xs text-[#33495f] lg:hidden lg:w-72">
                  {" "}
                  Search by location, community, profession &amp; more from
                  lakhs of active profiles
                </p>
                <p class="   f13 mt-1 hidden text-[#33495f] lg:block lg:w-72">
                  {" "}
                  Search by location, community, profession &amp; more from
                  lakhs of active profiles
                </p>
              </div>
            </div>
            <div class="   my-5 flex items-center lg:flex-col lg:items-start">
              <div class="   scale-100 lg:mb-2 lg:scale-110">
                <svg
                  viewBox="0 0 40 40"
                  width="70"
                  height="40"
                  alt="Verification"
                >
                  <defs>
                    <path
                      id="Verfications_svg__a"
                      d="M0 0h18.54v30.608l-8.944 2.949L0 30.608z"
                    ></path>
                    <path
                      d="M8.228 15.405c-4.354 0-7.884-3.449-7.884-7.703C.344 3.448 3.874 0 8.228 0c4.354 0 7.884 3.448 7.884 7.702s-3.53 7.703-7.884 7.703Zm-.659 1.4h1.58a7.57 7.57 0 0 1 7.57 7.57v.266a7.57 7.57 0 0 1-7.57 7.569H7.57A7.57 7.57 0 0 1 0 24.64v-.266a7.57 7.57 0 0 1 7.57-7.57Z"
                      id="Verfications_svg__c"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M20.357 36.575c12.55-2.778 15.805-14.39 16.855-26.949-5.776-.405-12.602-1.852-16.855-6.482-4.2 4.63-11.027 6.077-16.75 6.482 1.05 12.56 4.305 24.17 16.75 26.949Z"
                      fill="#E4EFF7"
                    ></path>
                    <g transform="translate(10.951 4.709)">
                      <mask id="Verfications_svg__b" fill="#fff"></mask>
                      <g mask="url(#Verfications_svg__b)">
                        <g transform="translate(.598 3.532)">
                          <path
                            stroke="#14202B"
                            stroke-width="0.923"
                            d="M8.718 15.44c4.102 0 7.423-3.243 7.423-7.24 0-3.997-3.321-7.24-7.423-7.24S1.295 4.202 1.295 8.2c0 3.997 3.321 7.24 7.423 7.24Zm-.659 2.324a7.108 7.108 0 0 0-7.107 7.108v.266a7.108 7.108 0 0 0 7.107 7.108h1.58a7.108 7.108 0 0 0 7.108-7.108v-.266a7.108 7.108 0 0 0-7.108-7.108H8.06Z"
                            stroke-linejoin="square"
                            fill="#FFF"
                          ></path>
                          <path
                            stroke="#FFF"
                            stroke-width="0.769"
                            d="M8.718 16.287C4.153 16.287.449 12.668.449 8.2S4.153.113 8.718.113c4.565 0 8.269 3.619 8.269 8.087s-3.704 8.087-8.269 8.087Zm-.659.63h1.58a7.954 7.954 0 0 1 7.954 7.955v.266a7.954 7.954 0 0 1-7.954 7.954H8.06a7.954 7.954 0 0 1-7.953-7.954v-.266a7.954 7.954 0 0 1 7.953-7.954Z"
                          ></path>
                          <ellipse
                            fill="#F5CAD0"
                            cx="9.697"
                            cy="8.095"
                            rx="7.164"
                            ry="6.999"
                          ></ellipse>
                        </g>
                      </g>
                    </g>
                    <path
                      d="M20.581 39.01C35.238 35.876 38.33 22.006 39.395 7.96 32.2 7.556 25.43 6.627 20.42.417 15.358 6.626 8.536 7.555 1.394 7.961c1.013 14.045 4.158 27.915 18.814 31.05h.373Zm-.157-.961C6.92 35.059 3.417 22.355 2.287 8.84c6.215-.436 13.56-1.993 18.137-6.975 4.52 4.982 11.866 6.54 18.025 6.975-1.13 13.515-4.633 26.22-18.025 29.209Z"
                      fill="#14202B"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="   border-l border-gray-300 pl-2 lg:border-none">
                <h4 class="   block text-sm font-semibold text-[#14202b] lg:hidden">
                  Verifications by Personal Visit
                </h4>
                <h4 class="   f16 hidden font-semibold text-[#14202b] lg:block">
                  Verifications by Personal Visit
                </h4>
                <div class="   mt-2 mb-1 hidden h-[2px] w-10 bg-primary-500 lg:block"></div>
                <p class="   mt-1 block text-xs text-[#33495f] lg:hidden lg:w-72">
                  Special listing for profiles verified by our agents through
                  personal visits
                </p>
                <p class="   f13 mt-1 hidden text-[#33495f] lg:block lg:w-72">
                  Special listing for profiles verified by our agents through
                  personal visits
                </p>
              </div>
            </div>
            <div class="   my-5 flex items-center lg:flex-col lg:items-start">
              <div class="   scale-100 lg:mb-2 lg:scale-110">
                <svg
                  viewBox="0 0 45 50"
                  fill="none"
                  width="70"
                  height="40"
                  alt="Privacy Control"
                >
                  <ellipse
                    rx="21.454"
                    ry="21.383"
                    transform="matrix(.99989 -.0174 .01751 .9998 21.826 26.753)"
                    fill="#EEF3F9"
                  ></ellipse>
                  <mask
                    id="Privacy_illustration_svg__a"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="5"
                    width="44"
                    height="44"
                  >
                    <ellipse
                      rx="21.454"
                      ry="21.383"
                      transform="matrix(.99989 -.0174 .01751 .9998 21.826 26.753)"
                      fill="#fff"
                    ></ellipse>
                  </mask>
                  <g mask="url(#Privacy_illustration_svg__a)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M31.435 24.99c.09 5.15-4.059 9.399-9.267 9.49-5.208.09-9.503-4.012-9.594-9.162-.09-5.15 4.06-9.398 9.267-9.489 5.208-.09 9.504 4.011 9.594 9.161ZM12.52 45.67a9.325 9.325 0 0 1 9.162-9.488l1.346-.023a9.328 9.328 0 0 1 9.489 9.163 9.325 9.325 0 0 1-9.163 9.487l-1.345.023a9.328 9.328 0 0 1-9.49-9.163Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M22.177 34.98c5.479-.096 9.853-4.567 9.758-9.998l-1 .017c.085 4.869-3.838 8.894-8.776 8.98l.018 1Zm-10.103-9.653c.095 5.431 4.624 9.747 10.103 9.652l-.018-1c-4.937.086-9-3.8-9.085-8.67l-1 .018Zm9.758-9.998c-5.479.096-9.853 4.567-9.758 9.998l1-.017c-.085-4.87 3.839-8.895 8.776-8.98l-.018-1Zm10.103 9.652c-.095-5.43-4.623-9.747-10.102-9.652l.017 1c4.937-.086 9 3.801 9.085 8.67l1-.017ZM21.673 35.683c-5.426.095-9.748 4.57-9.653 9.996l1-.017a8.825 8.825 0 0 1 8.67-8.979l-.017-1Zm.018 1 1.345-.023-.017-1-1.346.023.018 1Zm11.326 8.63c-.096-5.425-4.572-9.747-9.998-9.653l.017 1a8.828 8.828 0 0 1 8.98 8.671l1-.017Zm-9.654 9.997c5.427-.095 9.749-4.57 9.654-9.996l-1 .017a8.825 8.825 0 0 1-8.672 8.979l.018 1Zm-.018-1L22 54.332l.017 1 1.346-.023-.018-1Zm-11.325-8.63c.095 5.425 4.57 9.747 9.997 9.653l-.017-1a8.828 8.828 0 0 1-8.98-8.671l-1 .017Z"
                      fill="#14202B"
                    ></path>
                    <mask
                      id="Privacy_illustration_svg__b"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="12"
                      y="15"
                      width="22"
                      height="41"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M31.435 24.99c.09 5.15-4.059 9.399-9.267 9.49-5.208.09-9.503-4.012-9.594-9.162-.09-5.15 4.06-9.398 9.267-9.489 5.208-.09 9.504 4.011 9.594 9.161ZM12.52 45.67a9.325 9.325 0 0 1 9.162-9.488l1.346-.023a9.328 9.328 0 0 1 9.489 9.163 9.325 9.325 0 0 1-9.163 9.487l-1.345.023a9.328 9.328 0 0 1-9.49-9.163Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M22.177 34.98c5.479-.096 9.853-4.567 9.758-9.998l-1 .017c.085 4.869-3.838 8.894-8.776 8.98l.018 1Zm-10.103-9.653c.095 5.431 4.624 9.747 10.103 9.652l-.018-1c-4.937.086-9-3.8-9.085-8.67l-1 .018Zm9.758-9.998c-5.479.096-9.853 4.567-9.758 9.998l1-.017c-.085-4.87 3.839-8.895 8.776-8.98l-.018-1Zm10.103 9.652c-.095-5.43-4.623-9.747-10.102-9.652l.017 1c4.937-.086 9 3.801 9.085 8.67l1-.017ZM21.673 35.683c-5.426.095-9.748 4.57-9.653 9.996l1-.017a8.825 8.825 0 0 1 8.67-8.979l-.017-1Zm.018 1 1.345-.023-.017-1-1.346.023.018 1Zm11.326 8.63c-.096-5.425-4.572-9.747-9.998-9.653l.017 1a8.828 8.828 0 0 1 8.98 8.671l1-.017Zm-9.654 9.997c5.427-.095 9.749-4.57 9.654-9.996l-1 .017a8.825 8.825 0 0 1-8.672 8.979l.018 1Zm-.018-1L22 54.332l.017 1 1.346-.023-.018-1Zm-11.325-8.63c.095 5.425 4.57 9.747 9.997 9.653l-.017-1a8.828 8.828 0 0 1-8.98-8.671l-1 .017Z"
                        fill="#fff"
                      ></path>
                    </mask>
                    <circle
                      transform="matrix(.99989 -.0174 .01751 .9998 22.139 25.138)"
                      fill="#F5CAD0"
                      r="8"
                    ></circle>
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.483 5.348h-.748l-.003-1.528C40.727 1.71 39.047 0 36.983 0s-3.735 1.711-3.73 3.82l.004 1.528h-.748c-.823 0-1.494.687-1.492 1.528l.018 7.64c.002.84.677 1.528 1.5 1.528h8.974c.823 0 1.494-.688 1.492-1.528l-.018-7.64c-.002-.84-.677-1.528-1.5-1.528Zm-4.471 6.876c-.823 0-1.498-.688-1.5-1.528-.002-.84.67-1.528 1.492-1.528.823 0 1.498.688 1.5 1.528.002.84-.67 1.528-1.492 1.528ZM34.75 3.82l.004 1.528h4.487l-.003-1.528c-.004-1.268-1.008-2.292-2.25-2.292-1.241 0-2.24 1.024-2.238 2.292Z"
                    fill="#D8465C"
                  ></path>
                </svg>
              </div>
              <div class="   border-l border-gray-300 pl-2 lg:border-none">
                <h4 class="   block text-sm font-semibold text-[#14202b] lg:hidden">
                  Control over Privacy
                </h4>
                <h4 class="   f16 hidden font-semibold text-[#14202b] lg:block">
                  Control over Privacy
                </h4>
                <div class="   mt-2 mb-1 hidden h-[2px] w-10 bg-primary-500 lg:block"></div>
                <p class="   mt-1 block text-xs text-[#33495f] lg:hidden lg:w-72">
                  Restrict unwanted access to contact details &amp;
                  photos/videos
                </p>
                <p class="   f13 mt-1 hidden text-[#33495f] lg:block lg:w-72">
                  Restrict unwanted access to contact details &amp;
                  photos/videos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-4  ">
          <div className="max-w-screen-xl w-full bg-[#d9475c] shadow-md shadow-slate-400 rounded">
            <h1 className="pl-4 pt-4 font-black text-3xl text-center">About Us</h1>
            {/* <hr className="pr-2 pl-2"></hr> */}
            <div className="flex p-4">
              <img
                src="https://pbs.twimg.com/media/C1yRZKTUkAE1vxR.jpg"
                className="block w-1/5 p-4 object-cover border-dotted border-2 border-black"
              />
              <div className="p-4 border-dotted border-2 border-black ">
                <p className="p-2 text-black">
                  NELAKKII BOLCHAA, online matrimonial portal for Kodavas - 1st
                  of its kind patronizing the Kodava Community and people with
                  Kodava ancestry, be it for Single / Divorced / Widowed. The
                  Kodava community today has rapidly embraced urbanization and
                  is scattered across cities around the world, making it harder
                  for young people to meet and choose their “Life Partners”
                  among our Kodava fraternity. So to provide comfortable and
                  confidential matchmaking services to people in our community,
                  ‘Nelakkii Bolachaa is the solace’.
                </p>
                <p className="p-2 text-black">
                  NELAKKII BOLCHAA is the sacred hanging lamp in the ‘nelakkii
                  nadu badey’ or “central sanctorum” of the house’ or wedding
                  mantapa, it stands witness to the wedding vows prescribed by
                  the elders and absorbed by the bride and groom & starting of a
                  new life to all the newly bride & bridegrooms of our
                  community, where the people gathered on important occasions to
                  formally conduct a ceremony, ritual or even to seek the
                  blessings of our ‘Guru Karana and ancestors’ before the
                  beginning of a new venture or event.
                </p>
                <p className="p-2 text-black">
                  NELAKKII BOLCHAA accepts members after a stringent screening
                  process and offers exclusive privacy options with dedicated
                  “customer service” team for a convenient matchmaking
                  experience to all its members by ensuring 100% screening,
                  exclusive privacy options, photo protection features and
                  verification of phone numbers, address and more information.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#f9f9f9]">
          
        <div className="w-full max-w-screen-xl mt-4 mb-4 p-4">
        <h1 className=" font-black text-3xl text-center mb-4">Subscription</h1>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Free
              </div>
              <div className="collapse-content">
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Browse Profile</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Shortlist and send request</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Message and chat with unlimited users</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Get up to 3x matches daily</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Unlock access to advance search</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> View contact detaile</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Get 3 free spotlights</p>
                
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Pro Lite
              </div>
              <div className="collapse-content">
              <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Browse Profile</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Shortlist and send request</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Message and chat with unlimited users</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Get up to 3x matches daily</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Unlock access to advance search</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> View contact details</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Get 3 free spotlights</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Unlock 20 contact views</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Pro 
              </div>
              <div className="collapse-content">
              <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Browse Profile</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Shortlist and send request</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Message and chat with unlimited users</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Get up to 3x matches daily</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Unlock access to advance search</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> View contact details</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Get 3 free spotlights</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Unlock 20 contact views</p>              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingBody;
