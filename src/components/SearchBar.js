import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

const SearchBar = () => {
    const [value,setValue] = useState("");
    const [timeout,setTimeout] = useState(null);
    const navigate = useNavigate();
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
        onKeyUp={()=>Navigate(value)}
        className='searchbar'
        placeholder='Movie Title...'
        onChange={(e) => {
            setValue(e.target.value);
          }}/>
    </div>
  )
}

export default SearchBar