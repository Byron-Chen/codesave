import React, {useState, useEffect} from "react";

const CodeItem = props => {
    const{ id, title} = props.code


    return(
//style = {selected ? {color: 'red'} : {color: 'blue'}}
        <li>
            <button  onClick={()=> props.codeSelected(id)}>{title}</button>
            <button id="deletebutton" onClick={()=>props.deleteCode(id)}>delete</button>
        
        </li>
    )
}

export default CodeItem