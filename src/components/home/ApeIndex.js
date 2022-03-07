import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import ApeItem from "./ApeItem"
const ApeIndex = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <section className="flex flex-wrap">
       {data &&
        data.edges.map(({ node }, index) => (
          <ApeItem key={index} data={node} />
        ))}
    
    </section>
  )
}
export default ApeIndex
