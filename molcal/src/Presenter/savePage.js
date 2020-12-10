import {createElement as h} from "react";
import SavePageView from '../View/savePageView.js';
import {SaveToFirebase, ReadFromFirebase} from "../firebaseFunc.js";
import useModelProp from './useModelProp';

function SaveMolecules({model})
{
    // const molList = model.getingredientList();
    // console.log(molList);
    // const recipeList = useModelProp(model, "recipeList");
    const ingredientList = useModelProp(model, "ingredientList");
    // console.log("Save page (Ingredients): ", ingredientList);
    // console.log("Save page (Recipes): ", recipeList);
    
    //const recipeList = useModelProp(model, "recipeList");
    return  h(SavePageView, {
                nameMol: name=> {
                    console.log(name);
                    //model.setCurrentMolecule(model.getMolObject());
                    model.nameYourRecipeList(name);
                    // model.addToRecipeList(ingredientList);
                    
                    //model.clearList("clear");
                    //SaveToFirebase({model});
                    //ReadFromFirebase({model});
                }
            })
}

export default SaveMolecules;