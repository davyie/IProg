import MolModel from "./Model/molmodel.js";
import {ReadFromFirebaseD} from '../src/firebaseFunc';

function readModel() {
    const modelString = localStorage.getItem("MolModel"); // gets the props from storage in JSON
    // If modelString is defined parse
    let modelObject = modelString ? JSON.parse(modelString) : {}; // convert JSON to object
    
    const model = new MolModel(modelObject.ingredientList, modelObject.currentingredient);
    ReadFromFirebaseD({model});
    
    const storageobs = () => {localStorage.setItem("MolModel",  //sets model w prop to local storage
       JSON.stringify({ 
            ingredientList: model.getingredientList(),
            currentingredient: model.getCurrentingredient()
           //newMol : model.getMolObject()}
     }) )};

    model.addObserver(storageobs);  
    return model;
}

export default readModel;