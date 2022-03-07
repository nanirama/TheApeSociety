import React from "react";
import { StaticImage } from "gatsby-plugin-image"
const ContentGrid = ({data}) => {
  console.log('data in grid', data)
    return (
    <>
    
    <section className="flex flex-wrap">
      {data && data.edges.map(({node},index)=>{
        return(
          <div className=" md:w-1/4 w-full md:px-3 lg:mb-10 mb-5">
          <StaticImage src="../../assets/images/joannes-robinson.png" alt="" />
          <div className="flex justify-between items-center mt-1">
            <h4 className="text-sm text-white">{node.name}</h4>
            <StaticImage src="../../assets/images/explorer.png" alt="" />
          </div>
          </div>
        )
      })}
      </section>
    
    </>
);
};
export default ContentGrid;