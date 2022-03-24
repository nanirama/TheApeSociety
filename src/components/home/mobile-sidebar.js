import React, { useState } from "react"
import Collapsible from "react-collapsible"
import SideBarItem from "./SideBarItem"
const MobileSidebar = ({
   data, handleInputChange, handleFilterChange, 
  AccessoryState, setAccessoryState,
  BackgroundState, setBackgroundState,
  BodyState, setBodyState,
  CClassState, setCClassState,
  EarsState, setEarsState,
  EyesState, setEyesState,
  FacialHairState, setFacialHairState,
  HatState, setHatState,
  HeadState, setHeadState,
  WeaponState, setWeaponState,
  onChangehandler
}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const dataToObject = obj => {
      const ObjectData = Object.keys(obj).map((key, i) => {
        let ndata = { "name":key, "value":obj[key]}
        return ndata
       })
       return ObjectData
    }
    const {
      Accessory,
      Background,
      Body,
      CClass,
      Ears,
      Eyes,
      Facial_Hair,
      Family,
      Hat,
      Head,
      Weapon,
    } = data
  
    const AccessoryData = dataToObject(Accessory);
    const BackgroundData = dataToObject(Background);
    const BodyData = dataToObject(Body);
    const EarsData = dataToObject(Ears);
    const ClassData = dataToObject(CClass);
    const EyesData = dataToObject(Eyes);
    const FacialHairData = dataToObject(Facial_Hair);
    const FamilyData = dataToObject(Family);
    const HatData = dataToObject(Hat);
    const HeadData = dataToObject(Head);
    const WeaponData = dataToObject(Weapon);
    
    return (
    <>

<div className="sidemenu hide">
   {showSidebar ? (
   <button
      className="flex text-4xl text-white items-center cursor-pointer fixed left-3 top-0 z-50 close"
      onClick={() => setShowSidebar(!showSidebar)}
   >
  
 x
   </button>
   ) : (

 
<svg
 onClick={() =>
 setShowSidebar(!showSidebar)}
 xmlns="http://www.w3.org/2000/svg" className="open absolute z-30 flex items-center cursor-pointer left-0 top-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#e42575" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>

   )}
   <div
   className={`top-0 left-0 w-64 bg-black overflow-y-scroll p-10 text-white fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "-translate-x-full"
   } `}
   >

<Collapsible className=" mb-3" trigger="Accessory">
      {AccessoryData && AccessoryData.map((item,index)=> <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={AccessoryState} setState={setAccessoryState}/>)}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Background">
      {BackgroundData && BackgroundData.map((item,index)=> <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={BackgroundState} setState={setBackgroundState}/>)}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Body">
      {BodyData && BodyData.map((item,index)=> <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={BodyState} setState={setBodyState}/>)}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Ears">
      {EarsData && EarsData.map((item,index)=>
      <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={EarsState} setState={setEarsState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Eyes">
      {EyesData && EyesData.map((item,index)=>
      <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={EyesState} setState={setEyesState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Class">
      {ClassData && ClassData.map((item,index)=>
      <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={CClassState} setState={setCClassState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Facial Hair">
      {FacialHairData && FacialHairData.map((item,index)=>
      <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={FacialHairState} setState={setFacialHairState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />


      <Collapsible className=" mb-3" trigger="Hat">
      {HatData && HatData.map((item,index)=>
      <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={HatState} setState={setHatState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Head">
      {HeadData && HeadData.map((item,index)=>
      <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={HeadState} setState={setHeadState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className=" mb-3" trigger="Weapon">
      {WeaponData && WeaponData.map((item,index)=>
      <SideBarItem key={index} data={item} onChangehandler={onChangehandler} state={WeaponState} setState={setWeaponState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

   
      
   

  
  
</div>
</div>



</>
);
};
export default MobileSidebar