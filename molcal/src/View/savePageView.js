import React from 'react';
import {useHistory} from "react-router-dom";

const SavePageView = ({mol, nameMol}) =>
{
    const [name, setName]= React.useState("");
    const history = useHistory();

    return <div id="save">
            {/* <div>
                <button onClick={()=>history.push("/")}>Home</button>
                <button onClick={()=>history.push("/stored")}>My Recipes</button>
            </div>
            <div>
                <button onClick={()=>history.push("/graph")}>Back</button>
            </div> */}
            <div>
                <label htmlFor="molName">Save Recipe as </label>
                <input type="text" placeholder="Lasagna" id="molName" onChange={(event) => setName(event.target.value)}/>
                <button onClick={()=> {nameMol(name); history.push("/stored")}}>Save</button>
            </div>
    </div>
}

export default SavePageView;