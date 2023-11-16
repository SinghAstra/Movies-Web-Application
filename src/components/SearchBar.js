import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

const SearchBar = () => {
    const [value,setValue] = useState("");
    const [timeOut,setTimeOut] = useState();
    const navigate = useNavigate();
    const startTimeOut = () =>{
        if(timeOut){
            clearTimeout(timeOut);
        }
        const newTimeOut = setTimeOut(()=>{
            Navigate(value);
        },500)
        setTimeOut(newTimeOut);
    }
    const Navigate = (value) =>{
        value = value.trim();
        if(value == ""){
            navigate("/");
        }else{
            navigate(`/search/${slugify(value)}`)
        }
    }
  return (
    <div className='searchbar-container'>
        <input 
        type='text'
        value={value}
        onKeyUp={startTimeOut}
        onChange={(e) => {
            setValue(e.target.value);
          }}/>
    </div>
  )
}

export default SearchBar