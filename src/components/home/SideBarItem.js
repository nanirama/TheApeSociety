import React, { useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Cloudinary } from "cloudinary-core"

const cl = new Cloudinary({ cloud_name: "dj2tauktl", secure: true })

const getTrait = (category, trait) => {
  const convertedText = trait.replaceAll(" ", "_").replace("'", "")
  const imageURL = cl.url(`traits/${category}/${convertedText}.png`, {
    transformation: [
      {
        width: 50,
        crop: "fill",
      },
      { fetch_format: "auto" },
    ],
  })
  return imageURL
}

const SideBarItem = ({ data, allData, onChangehandler, state, setState, category }) => {
  const { name, value } = data
  const newName = name.replace("_", " ")
  const box = useRef(null)
  return (
    <div className="form-check items-center my-2 flex cursor-pointer" ref={box}>
      <input
        className="form-check-input appearance-none h-3 w-3 border border-gray-300 outline-0 rounded-sm bg-white checked:bg-yellow-600 checked:border-white  mt-1 bg-no-repeat bg-center bg-contain focus:border-inherit focus:outline-none focus:ring-offset-0 ring-transparent focus:ring-transparent float-left mr-2 cursor-pointer"
        type="checkbox"
        value={newName}
        id={newName}
        name={category}
        onChange={e => onChangehandler(e, allData)}
      />
      <div className="w-6 h-6 mr-3 ml-1">
        {name !== "None" && category ? (
          <img
            src={getTrait(category, name)}
            className="w-full h-full object-contain"
          />
        ) : (
          ""
        )}
      </div>
      <label
        className="form-check-label inline-block text-gray-300 text-sm cursor-pointer"
        onClick={() => box.current.click()}
      >
        {newName} ({value})
      </label>
    </div>
  )
}
export default SideBarItem
