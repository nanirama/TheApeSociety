import React, { useState } from "react"
import Collapsible from "react-collapsible"

import { StaticImage } from "gatsby-plugin-image"
import SideBarItem from "./SideBarItem"
import MobileSidebar from "./mobile-sidebar"
import dataContext from "../../Context/DataContext";

const Sidebar = ({
  data,
  posts,
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

  const { filterData, updateData } = dataContext();

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

  const onChangehandler = (e, allData) => {
    let TempData = filterData
    
    if (e.target.checked) {      
      updateData([...TempData, ...allData])
      console.log('filterData', filterData)
    } else {
      let difference = TempData
                 .filter(x => !allData.includes(x))
                 .concat(allData.filter(x => !TempData.includes(x)));

      console.log('difference',difference)
      updateData(difference)
    }
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
            className="form-control relative flex-auto min-w-0 block w-full py-0 px-2 focus:ring-0 ring-inherit text-base font-normal text-white bg-transparent border-0 m-0 sfocus:bg-transparent focus:border-inherit focus:outline-none"
            placeholder="search by name"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="list-items">
        <Collapsible className=" mb-3" trigger="Accessory">
          {AccessoryData &&
            AccessoryData.map((item, index) => {
              const AccessoryfilteredData = posts.filter(post => {
                const { Accessory } = post.node  
                if(item.name === Accessory.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              
              return(
              <SideBarItem
                category="Accessory"
                key={index}
                data={item}
                allData={AccessoryfilteredData}
                onChangehandler={onChangehandler}
                state={AccessoryState}
                setState={setAccessoryState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Background">
          {BackgroundData &&
            BackgroundData.map((item, index) => {
              const BackgroundfilteredData = posts.filter(post => {
                const { Background } = post.node  
                  if(item.name === Background.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Background"
                key={index}
                data={item}
                allData={BackgroundfilteredData}
                onChangehandler={onChangehandler}
                state={BackgroundState}
                setState={setBackgroundState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Body">
          {BodyData &&
            BodyData.map((item, index) => {
              const BodyfilteredData = posts.filter(post => {
                const { Body } = post.node  
                  if(item.name === Body.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Body"
                key={index}
                data={item}
                allData={BodyfilteredData}
                onChangehandler={onChangehandler}
                state={BodyState}
                setState={setBodyState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Ears">
          {EarsData &&
            EarsData.map((item, index) => {
              const EarsfilteredData = posts.filter(post => {
                const { Ears } = post.node  
                  if(item.name === Ears.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Ears"
                key={index}
                data={item}
                allData={EarsfilteredData}
                onChangehandler={onChangehandler}
                state={EarsState}
                setState={setEarsState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Eyes">
          {EyesData &&
            EyesData.map((item, index) => {
              const EyesfilteredData = posts.filter(post => {
                const { Eyes } = post.node  
                  if(item.name === Eyes.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Eyes"
                key={index}
                data={item}
                allData={EyesfilteredData}
                onChangehandler={onChangehandler}
                state={EyesState}
                setState={setEyesState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Class">
          {ClassData &&
            ClassData.map((item, index) => {
              const CClassfilteredData = posts.filter(post => {
                const { CClass } = post.node  
                  if(item.name === CClass.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Class"
                key={index}
                data={item}
                allData={CClassfilteredData}
                onChangehandler={onChangehandler}
                state={CClassState}
                setState={setCClassState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Facial Hair">
          {FacialHairData &&
            FacialHairData.map((item, index) => {
              const FacialHairfilteredData = posts.filter(post => {
                const { Facial_Hair } = post.node 
                  //console.log('item.name',item.name) 
                  //console.log('Facial_Hair.name',Facial_Hair.name.replace(" ","_").replace(" ","_"))               
                  if(item.name === Facial_Hair.name.replace(" ","_").replace(" ","_"))
                  {
                    return item
                  }
              })
              console.log('FacialHairfilteredData',FacialHairfilteredData)
              return(
              <SideBarItem
                category="Facial Hair"
                key={index}
                data={item}
                allData={FacialHairfilteredData}
                onChangehandler={onChangehandler}
                state={FacialHairState}
                setState={setFacialHairState}
              />
            )})}
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
            HatData.map((item, index) => {
              const HatfilteredData = posts.filter(post => {
                const { Hat } = post.node  
                  if(item.name === Hat.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Hat"
                key={index}
                data={item}
                allData={HatfilteredData}
                onChangehandler={onChangehandler}
                state={HatState}
                setState={setHatState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Head">
          {HeadData &&
            HeadData.map((item, index) => {
              const HeadfilteredData = posts.filter(post => {
                const { Head } = post.node  
                  if(item.name === Head.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Head"
                key={index}
                data={item}
                allData={HeadfilteredData}
                onChangehandler={onChangehandler}
                state={HeadState}
                setState={setHeadState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />

        <Collapsible className=" mb-3" trigger="Weapon">
          {WeaponData &&
            WeaponData.map((item, index) => {
              const WeaponfilteredData = posts.filter(post => {
                const { Weapon } = post.node  
                if(item.name === Weapon.name.replace(" ","_"))
                  {
                    return item
                  }
              })
              return(
              <SideBarItem
                category="Weapon"
                key={index}
                data={item}
                allData={WeaponfilteredData}
                onChangehandler={onChangehandler}
                state={WeaponState}
                setState={setWeaponState}
              />
            )})}
        </Collapsible>
        <hr className="mb-3 ring-offset-gray-800" />
      </div>
    </>
  )
}
export default Sidebar
