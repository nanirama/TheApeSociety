import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
const SideBarItem = ({ data, onChangehandler, state, setState }) => {
  const { name, value } = data
  const newName = name.replace("_"," ")
  return (
     <div className="form-check items-center my-2 flex">
              <input
                className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
                type="checkbox"
                value={newName}
                id={newName}
                name={newName}
                onChange={e=>onChangehandler(e, state, setState)}
              />
              <StaticImage src="../../assets/images/crown.png" alt="" />
              <label className="form-check-label inline-block text-gray-300 text-sm">
                {newName} ({value})
              </label>
            </div>
  )
}
export default SideBarItem
