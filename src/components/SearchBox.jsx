import React from 'react';
import './SearchBox.css';
import { useState } from 'react';
function SearchBox({ searchFunc }) {
    const [text, setText] = useState("");
    
    function onSearch(){
        searchFunc(text);
        setText("");
    }
    function onChange(event) {
        const newText = event.target.value;
        setText(newText);
        
    }
    return (
        <div className="search-box">
            <input onChange={onChange} type="text" value={text}></input>
            <button onClick={onSearch}>Search</button>
        </div>
            
      
    )
}
export default  SearchBox;