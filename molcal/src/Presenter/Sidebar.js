import React from 'react';
import SidebarView from '../View/SidebarView';
import SaveMolecules from './savePage';
import useModelProp from './useModelProp';
function Sidebar({model}) {
    
    const ingredientList = useModelProp(model, "ingredientList");
    
    return <div id = "sidebar">
        <SidebarView 
            ingredientList={ingredientList} 
            sumList = {model.sumingredientList()}
            onRemove={(remove) => model.removeFromList(remove)}
            />
        {!ingredientList.length ? <p></p> : <SaveMolecules model={model}/>}
    </div>
    
}

export default Sidebar;
 


