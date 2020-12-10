import React from "react";
//import { useHistory } from "react-router-dom";

const AddForm=({onSearch}) => {
    const [text, setText]= React.useState("");
        return <div className = "add">
            Add another ingredient: 
            <input type="text" placeholder="apple" onChange={(event) => setText(event.target.value)}  onKeyPress={(event)=> event.key=== "Enter"? onSearch(text):null}>  
            </input>
            <button onClick={e=> onSearch(text)}>search</button> 
        </div>
}

const AddResultsView = ({h, searchResults, model, addMol}) => {
    const [text, setText]= React.useState("");
    return <div className = "add">
        How many grams of {searchResults.label} do you want to add? 
        <input type="text" placeholder="100" onChange={(event) => setText(event.target.value)} onKeyPress={(event)=> event.key=== "Enter"? text:null}>
        </input>
        <button type="button" onClick= {()=> {addMol(searchResults, text); } }>
        add
        </button>
    </div>
}
export {AddForm, AddResultsView};