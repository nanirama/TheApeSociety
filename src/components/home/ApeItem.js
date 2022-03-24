import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import ApeModal from "./ApeModal"
import { Cloudinary } from "cloudinary-core"

const cl = new Cloudinary({ cloud_name: "dj2tauktl", secure: true })

const getImage = name => {
  const convertedText = name.replaceAll(" ", "_").replace("'", "")
  const imageURL = cl.url(`ape/${convertedText}.jpg`, {
    transformation: [
      {
        width: 400,
        crop: "fill",
      },
      { fetch_format: "auto" },
    ],
  })
  return imageURL
}

const getIcon = classT => {
  const convertedText = classT.replaceAll(" ", "_").replace("'", "")
  const imageURL = cl.url(`class/${convertedText}.png`, {
    transformation: [
      {
        width: 30,
        crop: "fill",
      },
      { fetch_format: "auto" },
    ],
  })
  return imageURL
}

const ApeItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div
        className=" sm:1/2 md:w-1/4 w-full md:px-3 lg:mb-10 mb-5 cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        <div className="w-full group-hover:border-gold transition-colors duration-300 border-2 border-transparent">
          <img
            src={getImage(data.name)}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <h4 className="text-sm text-white group-hover:text-gold transition-colors duration-300">
            {data.name}
          </h4>
          <img src={getIcon(data.CClass)} className="h-6" />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex fade justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <ApeModal data={data} setShowModal={setShowModal} />
          </div>
        </>
      ) : null}
    </>
  )
}
export default ApeItem
