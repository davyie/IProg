import {createElement as h, useEffect, useState} from "react";
import StoredPageView from '../View/storedPageView.js';
import {ReadFromFirebase, SaveToFirebase} from "../firebaseFunc.js";
import useModelProp from './useModelProp';



function StoredMolecules({model})
{
    const dataFirebase = useModelProp(model, "recipeList");
    
    // SaveToFirebase(dataFirebase);
    // const dataFirebase = model.getStoreList();
    // console.log("Model prop: ", dataFirebase);

    return h(StoredPageView,{
                reList: dataFirebase,
                //reList: model.getStoreList(),
                removeRecipe: remove => model.removeFromRecipeList(remove),
                clearL: i => model.clearList(i)
            }) 
}

export default StoredMolecules;