import {useHistory} from "react-router-dom";

const StoredPageView = ({reList, removeRecipe, clearL}) =>
{
    const history = useHistory();
    console.log(reList);

    return <div>
            <div>
                <button onClick={()=>{clearL("clear"); history.push("/");}}>Search for a new recipe</button>
            </div>

            <div>{reList.map(recipe=>
                <ul key={recipe.name}>
                    <p>{recipe.name}</p>
                    <li><button onClick={()=>removeRecipe(recipe.name)}>Remove</button></li>
                </ul>
            )}</div>
    </div>
}

{/* <ul key={recipe.name}>
                            <li>{recipe.id}</li>
                        </ul> */}
export default StoredPageView;