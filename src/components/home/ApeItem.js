import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import ApeModal from "./ApeModal"
const ApeItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className=" sm:1/2 md:w-1/4 w-full md:px-3 lg:mb-10 mb-5">
        <StaticImage src="../../assets/images/joannes-robinson.png" alt="" />
        <div className="flex justify-between items-center mt-1" onClick={() => setShowModal(true)}>
          <h4 className="text-sm text-white">{data.name}</h4>
          <StaticImage src="../../assets/images/explorer.png" alt={data.name} />
        </div>
        
        {showModal ? (
          <>
            <div className="flex fade justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <ApeModal data={data} setShowModal={setShowModal}/>
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}
export default ApeItem
