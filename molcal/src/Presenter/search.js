import React from 'react';
import {createElement as h} from "react";
import {usePromise, promiseNoData} from "./usePromise.js";
import EdamamSource from '../API/edamamAPI.js';
import {SearchResultsView, SearchFormReact} from "../View/searchView.js"

function Search({model}) {
    // console.log(model.getCurrentMolecule());
    // console.log(model.moleculeList);

    const [promise, setPromise] = React.useState(null); // Init with and empty promise because errors on line 10 otherwise
    React.useEffect(() => setPromise(EdamamSource.searchIngredient("")), []); // needs to be run to set the promise
    const [data, error] = usePromise(promise); 

    return h(React.Fragment, {}, 
        h(SearchFormReact, 
            {onSearch: (text) => setPromise(EdamamSource.searchIngredient(text))}), 
            promiseNoData(promise, data, error) || 
            h(SearchResultsView, {
                    searchResults: data, 
                    model: model,
                    setModel: (obj, amount) => {
                        
                        model.setCurrentingredient(model.setIngredientObject(obj, amount)); 
                        model.addToingredientList(model.getCurrentingredient());
                    
                     }
                })
        );
}




export default Search;