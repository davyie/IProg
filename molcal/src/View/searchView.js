import React from 'react';
import { useHistory } from "react-router-dom";

const SearchResultsView = ({h, searchResults, model, setModel}) => {
    const [text, setText]= React.useState("");
    const history = useHistory();
    return <div className="search">
        <br></br>
        <br></br>
        How many grams of {searchResults.label} do you want to add? 
        <input type="text" placeholder="100" onChange={(event) => setText(event.target.value)}  onKeyPress={(event)=> event.key=== "Enter"? text:null}>
        </input>
        <br></br>
        <button type="button" onClick= {()=> {setModel(searchResults, text); history.push("/graph");} }>
        Investigate further
        </button>

    </div>
}

const SearchFormReact=({onSearch}) => {
    const [text, setText]= React.useState("");
        return <div className="search">
            <br></br>
            <h1>Welcome to NutritionBuddy!</h1>
            <h2>Search for an ingredient to investigate</h2>
            <br></br>
            <input type="text" placeholder="Search for apple" onChange={(event) => setText(event.target.value)}  onKeyPress={(event)=> event.key=== "Enter"? onSearch(text):null}>  
            </input>
            <button onClick={e=> onSearch(text)}>Search</button> 
        </div>
}

export{
    SearchResultsView, 
    SearchFormReact
}
