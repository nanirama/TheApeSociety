import React, { useState, useEffect, useRef } from "react"
import ApeItem from "./ApeItem"
const ApeSearchIndex = ({ data }) => {
  const allData = data
  return (      
    <section className="w-100 ">
       <div className="flex flex-wrap">
       {allData.map(({ node }, index) => (
          <ApeItem key={index} data={node} />
        ))}
        </div>
    </section>
  )
}
export default ApeSearchIndex
