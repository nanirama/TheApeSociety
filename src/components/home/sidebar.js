import React, { useState } from "react"
import Collapsible from "react-collapsible"

import { StaticImage } from "gatsby-plugin-image"
import SideBarItem from "./SideBarItem"
import MobileSidebar from "./mobile-sidebar"

const Sidebar = ({
  data,
  handleInputChange,
  handleFilterChange,
  AccessoryState,
  setAccessoryState,
  BackgroundState,
  setBackgroundState,
  BodyState,
  setBodyState,
  CClassState,
  setCClassState,
  EarsState,
  setEarsState,
  EyesState,
  setEyesState,
  FacialHairState,
  setFacialHairState,
  HatState,
  setHatState,
  HeadState,
  setHeadState,
  WeaponState,
  setWeaponState,
}) => {
  const dataToObject = obj => {
    const ObjectData = Object.keys(obj).map((key, i) => {
      let ndata = { name: key, value: obj[key] }
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

  const AccessoryData = dataToObject(Accessory)
  const BackgroundData = dataToObject(Background)
  const BodyData = dataToObject(Body)
  const EarsData = dataToObject(Ears)
  const ClassData = dataToObject(CClass)
  const EyesData = dataToObject(Eyes)
  const FacialHairData = dataToObject(Facial_Hair)
  const FamilyData = dataToObject(Family)
  const HatData = dataToObject(Hat)
  const HeadData = dataToObject(Head)
  const WeaponData = dataToObject(Weapon)

  const onChangehandler = (e, state, setState) => {
    let TempState = state
    if (e.target.checked) {
      TempState.push(e.target.name)
    } else {
      let index = TempState.indexOf(e.target.value)
      if (index !== -1) {
        TempState.splice(index, 1)
      }
    }
    setState(TempState)
    handleFilterChange()
    console.log("Secondary state", state)
  }

  return (
    <>
      <h2 className="text-3xl text-white show">Ape Library</h2>

      <div className="my-3 w-full flex items-center relative">
        <MobileSidebar
          data={data}
          handleInputChange={handleInputChange}
          handleFilterChange={handleFilterChange}
          AccessoryState={AccessoryState}
          setAccessoryState={setAccessoryState}
          BackgroundState={BackgroundState}
          setBackgroundState={setBackgroundState}
          BodyState={BodyState}
          setBodyState={setBodyState}
          CClassState={CClassState}
          setCClassState={setCClassState}
          EarsState={EarsState}
          setEarsState={setEarsState}
          EyesState={EyesState}
          setEyesState={setEyesState}
          FacialHairState={FacialHairState}
          setFacialHairState={setFacialHairState}
          HatState={HatState}
          setHatState={setHatState}
          HeadState={HeadState}
          setHeadState={setHeadState}
          WeaponState={WeaponState}
          setWeaponState={setWeaponState}
          onChangehandler={onChangehandler}
        />

        <div className="input-group relative flex flex-nowrap items-stretch w-full mb-4 border rounded-lg">
          <button
            className="btn inline-block px-3 py-2"
            type="button"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
              />
            </svg>
          </button>
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full py-0 px-2 focus:ring-0 ring-inherit text-base font-normal text-gray-700 bg-transparent border-0 m-0 focus:text-gray-700 focus:bg-transparent focus:border-inherit focus:outline-none"
            placeholder="search by name"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="list-items">
        <Collapsible className=" mb-3" trigger="Accessory">
          {AccessoryData &&
            AccessoryData.map((item, index) => (
              <SideBarItem
                category="Accessory"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={AccessoryState}
                setState={setAccessoryState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Background">
          {BackgroundData &&
            BackgroundData.map((item, index) => (
              <SideBarItem
                category="Background"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={BackgroundState}
                setState={setBackgroundState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Body">
          {BodyData &&
            BodyData.map((item, index) => (
              <SideBarItem
                category="Body"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={BodyState}
                setState={setBodyState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Ears">
          {EarsData &&
            EarsData.map((item, index) => (
              <SideBarItem
                category="Ears"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={EarsState}
                setState={setEarsState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Eyes">
          {EyesData &&
            EyesData.map((item, index) => (
              <SideBarItem
                category="Eyes"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={EyesState}
                setState={setEyesState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Class">
          {ClassData &&
            ClassData.map((item, index) => (
              <SideBarItem
                category="Class"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={CClassState}
                setState={setCClassState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Facial Hair">
          {FacialHairData &&
            FacialHairData.map((item, index) => (
              <SideBarItem
                category="Facial Hair"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={FacialHairState}
                setState={setFacialHairState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        {/* <Collapsible className=" mb-3" trigger="Family">
      {FamilyData && FamilyData.map((item,index)=>
      <SideBarItem category=""  key={index} data={item} onChangehandler={onChangehandler} state={FamilyState} setState={setFamilyState}/>
      )}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" /> */}

        <Collapsible className=" mb-3" trigger="Hat">
          {HatData &&
            HatData.map((item, index) => (
              <SideBarItem
                category="Hat"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={HatState}
                setState={setHatState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Head">
          {HeadData &&
            HeadData.map((item, index) => (
              <SideBarItem
                category="Head"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={HeadState}
                setState={setHeadState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Weapon">
          {WeaponData &&
            WeaponData.map((item, index) => (
              <SideBarItem
                category="Weapon"
                key={index}
                data={item}
                onChangehandler={onChangehandler}
                state={WeaponState}
                setState={setWeaponState}
              />
            ))}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />
      </div>
    </>
  )
}
export default Sidebar
