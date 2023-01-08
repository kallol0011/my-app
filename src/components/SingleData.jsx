import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';


const getData=()=>{
    return fetch(`https://api.github.com/repositories/28457823`)
    .then((res)=>res.json())
 }


const SingleData = ({id}) => {
const [data,setData]=useState({})
const [text,setText]=useState(0)
 const params=useParams()


//  console.log(params.id)


 
 useEffect(()=>{
    getData.then((res)=>setData(res))
 },[])

 console.log("dummydata")
 console.log("data",data)



    return (
        <div>
              
                {/* <img src={data.owner.avatar_url} alt="" />
                <h2>{data.name}</h2>
                 <h3>{data.language}</h3>
                 <h3>  {data.stargazers_count}   </h3>
                <h3>{data.forks}</h3>  */}
            
        </div>
    );
};

export default SingleData;