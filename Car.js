import React from "react"

export default props => (
    <div style={{
        border: '1px solid #e0c2f0',
        marginBottom:'10px',
        display: 'inline-block',
        padding: '10px',
    }}>
        <h3>Дорамы Имя :{props.name}</h3>
       <p> Дата выхода: <strong>{props.year}</strong></p> 
       <input type="text"  onChange={props.onChageName}  value={props.name}/>

       <button onClick={props.onDelete}>delete</button>
      
    </div>
)