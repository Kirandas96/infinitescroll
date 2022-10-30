import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Home = () => {
  const [data,setData]=useState([])
  const[page,setPage]=useState(1)
  const fetchData=()=>{
    axios.get(`https://randomuser.me/api/?page=${page}&results=6`)
    .then((res)=>{
        // console.log(res.data.results)
      setData([...data,...res.data.results])
    })
  }
  useEffect(() => {
    setTimeout(fetchData,1000)
  }, [page])
  
  return (
    <>
    <InfiniteScroll 
    dataLength={data.length}
    next={()=>setPage(page+1)}
    hasMore={true}
    loader={<h2>Loading...</h2>}
    className="scroll"
    >
{<div className='main'>
{data.map((el,index)=>{
  return(
    <div  key={index} className="flex">
    <h3>{el.name.first}</h3>
    <img src={el.picture.medium} alt="" />
    </div>
  )
})}
  </div>}
    </InfiniteScroll>
    </>
  )
}
