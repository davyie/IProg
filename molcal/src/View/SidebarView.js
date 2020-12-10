import React, { Fragment } from 'react';
import capString from "../Presenter/capString";


// JSX
function SidebarView({ingredientList, sumList, onRemove}){
   // const ingredList = model.getingredList();
   // const totalFat = ingredList.length !== 0 ? ingredList.reduce((acc, currentValue) => acc + currentValue.fat) : 0;
   // const totalCarbs = ingredList.length !== 0 ? ingredList.reduce((acc, currentValue) => acc + currentValue.carbs) : 0;
   // const totalProtein = ingredList.length !== 0 ? ingredList.reduce((acc, currentValue) => acc + currentValue.protein) : 0;
   // console.log(ingredList);
   // console.log(totalCarbs);
   // .sort(/** compare function*/)
   // console.log(sumList);


   return (<div>
            <h2>Ingredients</h2>
            {!ingredientList.length ? <p>No ingredients available</p> 
            : <Fragment>
               <table>
                  <br></br>
                  {ingredientList.map(ingred => 
                     <tr> 
                        <td>{capString(ingred.name)}</td>
                        <td>
                           <button onClick={()=> onRemove(ingred.name)}>x</button> 
                        </td>
                        <td>
                           Fat: {((ingred.fat*(ingred.amount/100)).toFixed(1))}g
                        </td>
                        <td>
                           Carbs: {((ingred.carbs*(ingred.amount/100)).toFixed(1))}g
                        </td>
                        <td>
                           Protein: {((ingred.protein*(ingred.amount/100)).toFixed(1))}g
                        </td>
                        <td>
                           Amount: {ingred.amount}g
                        </td>
                        {/** This is where we want to print out the nutritional values of an ingrediant */}
                     </tr>)}

                  </table>
                  <h3>
                  Total protein: 
                  {sumList.protein.toFixed(1)}

                  </h3>
                  <h3>
                  Total carbohydrates: 
                  {sumList.carbs.toFixed(1)}

                  </h3>
                  <h3>
                  Total fat: 
                  {sumList.fat.toFixed(1)}

                  </h3>
               </Fragment>}
      </div>)
}

export default SidebarView;
