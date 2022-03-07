import React from "react"
import Collapsible from "react-collapsible"

import { StaticImage } from "gatsby-plugin-image"

const Sidebar = ({ data }) => {
  const {
    Accessory,
    Background,
    Body,
    Class,
    Ears,
    Eyes,
    Facial_Hair,
    Family,
    Hat,
    Head,
    Weapon,
  } = data
  return (
    <>
      <h2 className="text-3xl text-white">Ape Library</h2>

      <div className="my-3 w-full">
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
          />
        </div>
      </div>

      <Collapsible className=" mb-3" trigger="Accessory">
        {Object.keys(Accessory).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Accessory[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />

      <Collapsible className="mb-3" trigger="Background">
        {Object.keys(Background).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Background[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Body">
        {Object.keys(Body).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Body[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Class">
        {Object.keys(Class).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Class[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Ears">
        {Object.keys(Ears).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Ears[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Eyes">
        {Object.keys(Eyes).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Eyes[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Facial Hair">
        {Object.keys(Facial_Hair).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Facial_Hair[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Family">
        {Object.keys(Family).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Family[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Hat">
        {Object.keys(Hat).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Hat[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Head">
        {Object.keys(Head).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Head[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
      <Collapsible className="mb-3" trigger="Weapon">
        {Object.keys(Weapon).map((key, i) => {
          return (
            <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {key} ({Weapon[key]})
              </label>
            </div>
          )
        })}
      </Collapsible>
      <hr className="mb-3 ring-offset-gray-800" />
    </>
  )
}
export default Sidebar
