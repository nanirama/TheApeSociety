import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import MenuDropDown from "./home/MenuDropDown";
const Nav = ({ data, handleInputChange, handleFilterChange, 
   AccessoryState, setAccessoryState,
   BackgroundState, setBackgroundState,
   BodyState, setBodyState,
   CClassState, setCClassState,
   EarsState, setEarsState,
   EyesState, setEyesState,
   FacialHairState, setFacialHairState,
   FamilyState, setFamilyState,
   HatState, setHatState,
   HeadState, setHeadState,
   WeaponState, setWeaponState
}) => {
const [showSidebar, setShowSidebar] = useState(false);
const [showModal, setShowModal] = useState(false);
const [showModal1, setShowModal1] = useState(false);
return (
<>

<div className="desktop-nav">
   <nav>
      <ul>
         <li className="inline-block relative"><a className="text-white px-4" href="#">Home</a></li>
         <li className="inline-block relative"><a className="text-white px-4" href="#" onClick={() => setShowModal(true)}>Rarity Table</a></li>
         <li className="inline-block relative"><a className="text-white px-4" href="#" onClick={() => setShowModal1(true)}>Family Tree</a></li>
      </ul>
   </nav>
   {showModal ? (
   <>
   <div className="modal absolute top-24 md:max-w-3xl mx-auto flex-col md:flex-row flex z-50 left-0 right-0">
      <div className="modal-close cursor-pointer z-50 absolute top-5 right-5">
         <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={() =>
            setShowModal(false)}
            >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
         </svg>
      </div>
      <div className="">
         <StaticImage src="../assets/images/rarity-guide.png" alt="" />
      </div>
   </div>
   </>
   ) : null}
   {showModal1 ? (
   <>
   <div className="modal absolute top-24 md:max-w-3xl mx-auto flex-col md:flex-row flex z-50 left-0 right-0">
      <div className="modal-close cursor-pointer z-50 absolute top-5 right-5">
         <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={() =>
            setShowModal1(false)}
            >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
         </svg>
      </div>
      <div className="">
         <StaticImage src="../assets/images/family-tree.png" alt="" />
      </div>
   </div>
   </>
   ) : null}
</div>



<div className="mobile-nav">
   {showSidebar ? (
   <button
      className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 close"
      onClick={() => setShowSidebar(!showSidebar)}
   >
   x
   </button>
   ) : (
   <svg
      onClick={() =>
      setShowSidebar(!showSidebar)}
      className="fixed z-30 flex items-center cursor-pointer right-10 top-8 open"
      fill="#fff"
      viewBox="0 0 100 80"
      width="30"
      height="30"
      >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
   </svg>
   )}
   <div
   className={`top-0 right-0 w-[45vw] bg-black overflow-y-scroll p-10 text-white fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
   } sidenav`}
   >
   <nav>
      <ul>
         <li className="inline-block relative w-full mb-8"><a className="text-white" href="#">Home</a></li>
         <li className="inline-block relative w-full mb-8"><a className="text-white" href="#" onClick={() => setShowModal(true)}>Rarity Table</a></li>
         <li className="inline-block relative w-full mb-8"><a className="text-white" href="#" onClick={() => setShowModal1(true)}>Family Tree</a></li>
      </ul>
      <MenuDropDown data={data}
         handleInputChange={handleInputChange}
         handleFilterChange={handleFilterChange}
         AccessoryState={AccessoryState} setAccessoryState={setAccessoryState}
         BackgroundState={BackgroundState} setBackgroundState={setBackgroundState}
         BodyState={BodyState} setBodyState={setBodyState}
         CClassState={CClassState} setCClassState={setCClassState}
         EarsState={EarsState} setEarsState={setEarsState}
         EyesState={EyesState} setEyesState={setEyesState}
         FacialHairState={FacialHairState} setFacialHairState={setFacialHairState}
         FamilyState={FamilyState} setFamilyState={setFamilyState}
         HatState={HatState} setHatState={setHatState}
         HeadState={HeadState} setHeadState={setHeadState}
         WeaponState={WeaponState} setWeaponState={setWeaponState}
      />
   </nav>
  
</div>
{showModal ? (
   <>
   <div className="modal absolute top-24 md:max-w-3xl mx-auto flex-col md:flex-row flex z-50 left-0 right-0">
      <div className="modal-close cursor-pointer z-50 absolute top-5 right-5">
         <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={() =>
            setShowModal(false)}
            >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
         </svg>
      </div>
      <div className="">
         <StaticImage src="../assets/images/rarity-guide.png" alt="" />
      </div>
   </div>
   </>
   ) : null}
   {showModal1 ? (
   <>
   <div className="modal absolute top-24 md:max-w-3xl mx-auto flex-col md:flex-row flex z-50 left-0 right-0">
      <div className="modal-close cursor-pointer z-50 absolute top-5 right-5">
         <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={() =>
            setShowModal1(false)}
            >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
         </svg>
      </div>
      <div className="">
         <StaticImage src="../assets/images/family-tree.png" alt="" />
      </div>
   </div>
   </>
   ) : null}
</div>
</>
);
};
export default Nav
