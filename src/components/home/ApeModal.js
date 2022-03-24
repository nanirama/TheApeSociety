import React, { useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Cloudinary } from "cloudinary-core"
import stats from "../../data/stats.json"
import { X } from "react-feather"
import useOnClickOutside from "use-onclickoutside"

const cl = new Cloudinary({ cloud_name: "dj2tauktl", secure: true })

const getImage = name => {
  const convertedText = name.replaceAll(" ", "_").replace("'", "")
  const imageURL = cl.url(`ape/${convertedText}.jpg`, {
    transformation: [
      {
        width: 600,
        crop: "fill",
      },
      { fetch_format: "auto" },
    ],
  })
  return imageURL
}

const getFullImage = name => {
  const convertedText = name.replaceAll(" ", "_").replace("'", "")
  const imageURL = cl.url(`ape/${convertedText}.jpg`)
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

const ApeModal = ({ data, setShowModal }) => {
  const {
    name,
    Accessory,
    Background,
    Body,
    Ears,
    Eyes,
    Facial_Hair,
    Hat,
    Head,
    Weapon,
    CClass,
  } = data
  const modal = useRef(null)
  useOnClickOutside(modal, () => setShowModal(false))
  return (
    <>
      <div
        ref={modal}
        className="modal z-10 absolute top-24 w-90 md:max-w-4xl mx-auto pt-12 pb-5 lg:px-14 px-3 flex-col md:flex-row flex bg-zinc-600 rounded-lg"
      >
        <div className="modal-close cursor-pointer z-50 absolute top-5 right-5">
          <X
            className="text-white current-color h-4 stroke-2 text-xl"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="lg:w-4/12 w-full justify-between px-3">
          <div className="w-full">
            <img
              src={getImage(data.name)}
              alt={data.name}
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="flex flex-col">
              <h2 className="text-xl mb-2 text-white">{name}</h2>
              <a
                href={getFullImage(data.name)}
                target="_blank"
                className="text-sm decoration-1 underline text-white"
              >
                download full size file
              </a>
            </div>
            {/* <StaticImage src="../../assets/images/amato.png" alt="" /> */}
          </div>
        </div>
        <div className="lg:w-8/12 w-full px-3 lg:px-6 h-full flex flex-col justify-between">
          <div className="modal-content flex md:flex-row flex-col">
            <div className="lg:w-1/2 w-full px-0 md:px-3 lg:pl-3 lg:pr-10 ">
              {/* <div className="mb-2">
              <p className="text-yellow-500 text-base font-bold mb-1">Family</p>
              <div className="flex justify-between text-sm text-white">
                {" "}
                <p>de la Cruz </p> <p>({(stats.Class[CClass] / 70).toFixed(2)}%)</p>
              </div>
            </div> */}
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">
                  Class
                </p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{CClass} </p>{" "}
                  <p>({(stats.Class[CClass] / 70).toFixed(2)}%)</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">Hat</p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Hat.name} </p>{" "}
                  <p>({(stats.Hat[Hat.name] / 70).toFixed(2)}%)</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">Head</p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Head.name} </p>{" "}
                  <p>({(stats.Head[Head.name] / 70).toFixed(2)}%)</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">
                  Facial Hair
                </p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Facial_Hair.name} </p>{" "}
                  <p>
                    ({(stats["Facial Hair"][Facial_Hair.name] / 70).toFixed(2)}
                    %)
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">Eyes</p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Eyes.name} </p>{" "}
                  <p>({(stats.Eyes[Eyes.name] / 70).toFixed(2)}%)</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-0 md:px-3 lg:pr-3 lg:pl-10">
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">Ears</p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Ears.name} </p>{" "}
                  <p>({(stats.Ears[Ears.name] / 70).toFixed(2)}%)</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">
                  Accessory
                </p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Accessory.name} </p>{" "}
                  <p>({(stats.Accessory[Accessory.name] / 70).toFixed(2)}%)</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">
                  Body/Clothes
                </p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Body.name} </p>{" "}
                  <p>({(stats.Body[Body.name] / 70).toFixed(2)}%)</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">
                  Weapon
                </p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Weapon.name} </p>{" "}
                  <p>({(stats.Weapon[Weapon.name] / 70).toFixed(2)}%)</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-yellow-500 text-base font-bold mb-1">
                  Background
                </p>
                <div className="flex justify-between text-sm text-white">
                  {" "}
                  <p>{Background.name} </p>{" "}
                  <p>
                    ({(stats.Background[Background.name] / 70).toFixed(2)}%)
                  </p>
                </div>
              </div>
              {/* <div className="mb-2">
              <p className="text-yellow-500 text-base font-bold mb-1">Family</p>
              <div className="flex justify-between text-sm text-white">
                {" "}
                <p>{Family.name} </p> <p>({(stats.Class[CClass] / 70).toFixed(2)}%)</p>
              </div>
            </div> */}
            </div>
          </div>
          {/* <button className="lg:mx-3 my-2 w-full py-3 rounded-lg bg-gold">
            <Link to="/">
              <h6 className="text-white text-lg">Purchase for 1,200 ADA</h6>
            </Link>
          </button> */}
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-20"></div>
    </>
  )
}
export default ApeModal
