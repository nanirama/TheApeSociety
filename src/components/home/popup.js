import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Popup = () => {
  return (



    <div className="modal relative w-full max-w-5xl mx-auto pt-12 pb-5 lg:px-14 px-3 flex-col md:flex-row flex bg-zinc-600 rounded-lg">

      <div className="modal-close cursor-pointer z-50 absolute top-5 right-5">
        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
      <div className="lg:w-4/12 w-full px-3">
        <StaticImage src="../../assets/images/Joannes.png" alt="" />
        <div className="flex justify-between items-center my-4">
          <div className="flex flex-col">
            <h2 className="text-xl mb-2 text-white">Agustin de la Cruz</h2>
            <a href="#" className="text-sm decoration-1 underline text-white">download full size file</a>
          </div>
          <StaticImage src="../../assets/images/amato.png" alt="" />
        </div>
      </div>
      <div className="lg:w-8/12 w-full px-3 lg:px-6">
        <div className="modal-content flex md:flex-row flex-col">
          <div className="lg:w-1/2 w-full px-0 md:px-3 lg:pl-3 lg:pr-10 ">
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Family</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Class</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Hat</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Head</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Facial Hair</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Eyes</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-0 md:px-3 lg:pr-3 lg:pl-10">
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Ears</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Accessory</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Body/Clothes</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Weapon</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Background</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>
            <div className="mb-2">
              <p className="text-yellow-500 text-base">Family</p>
              <div className="flex justify-between text-sm text-white"> <p>de la Cruz </p>  <p>(1.00%)</p></div>
            </div>

          </div>

        </div>
        <button className="md:mx-3 my-2 w-full py-2 rounded-lg bg-yellow-500">
          <Link to="/"><h6>Purchase for 1,200 ADA</h6></Link>
        </button>
      </div>

    </div>




  );
};
export default Popup;