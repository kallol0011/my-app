import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import "./All.css"
import Navbar from './Navbar';
import Pagination from './Pagination';
import Single from './SingleData';
import SingleData from './SingleData';
const getData=(language,page)=>{
    return fetch(`https://api.github.com/search/repositories?page=${page}&q=stars:%3E1+language:${language}&per_page=10`)
    .then((res)=>res.json())
}

const AllData = () => {

    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [language,setLanguage]=useState("All")
     
    useEffect(()=>{
      getData(language,page).then((res)=>setData(res.items)
                            
    )
    },[language,page])
    console.group(data)
    
    


const filtering=(value)=>{
   
    setLanguage(value)

}


const onChange=(value)=>{
    setPage(value)
}


const Click=(id)=>{
    console.log(id)
    // SingleData(id)

}

    return (
        <div className='mainBox' >
            
            <Navbar filtering={filtering} />
            <div className='grid' >
                
             {
                data.map((el)=>(
                   <div key={el.id} onClick={Click} >
                      <img onClick={()=>Click(el.id)} src={el.owner.avatar_url} alt="" />
                      <h2>{el.name}</h2>
                      <h5>{el.id}</h5>
                      <h3>{el.language}</h3>
                      <h3>  {el.stargazers_count}   </h3>
                      <h3>{el.forks}</h3>

                   </div>

                ))
            }
            </div>

            <div className='pagination' >
                 <Pagination
                   page={page}
                   onChange={onChange}
                 />
            </div>
            
        </div>
    );
};

export default AllData;