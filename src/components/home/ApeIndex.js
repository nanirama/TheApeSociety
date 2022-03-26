import React, { useState, useEffect, useRef } from "react"

import ApeItem from "./ApeItem"
const ApeIndex = ({ data }) => {
    
    const [showModal, setShowModal] = useState(false);
    const allData = data
    
    const [list, setList] = useState([...allData.slice(0, 12)])
    const [loadMore, setLoadMore] = useState(false)
    const [hasMore, setHasMore] = useState(allData.length > 10)

    console.log('data in Ape Index', list)

    const loadRef = useRef()

    const handleObserver = (entities) => {
        const target = entities[0]
        if (target.isIntersecting) {
          setLoadMore(true)
        }
      }

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        }
        const observer = new IntersectionObserver(handleObserver, options)
        if (loadRef.current) {
            observer.observe(loadRef.current)
        }
    }, [])

    useEffect(() => {
        if (loadMore && hasMore) {
          const currentLength = list.length
          const isMore = currentLength < allData.length
          const nextResults = isMore
            ? allData.slice(currentLength, currentLength + 10)
            : []
          setList([...list, ...nextResults])
          setLoadMore(false)
        }
    }, [loadMore, hasMore]) 

    useEffect(() => {
        const isMore = list.length < allData.length
        setHasMore(isMore)
      }, [list])

  return (      
    <section className="w-100 ">
       <div className="flex flex-wrap">
       {list.map(({ node }, index) => (
          <ApeItem key={index} data={node} />
        ))}
        </div>
        <div ref={loadRef} className="flex justify-center content-center">
            {hasMore ? <button className="text-white text-center border-2 border-white rounded-sm px-6 py-1 my-2">Loading...</button> : <p>No more results</p>}
        </div>
    
    </section>
  )
}
export default ApeIndex
