import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'
import Add from "../Presenter/add.js";
import Sidebar from "../Presenter/Sidebar";
// import SaveMolecules from "../Presenter/savePage"
import useModelProp from '../Presenter/useModelProp.js';

defaults.global.tooltips.enabled = true
defaults.global.legend.position = 'bottom'

const BarChart = ({model}) => { 
  const ingredientList = useModelProp(model, "ingredientList");

  // const totalFat = ingredientList.reduce((acc, curr) => acc + curr.fat, 0);
  // const totalCarbs = ingredientList.reduce((acc, curr) => acc + curr.carbs, 0);
  // const totalProtein = ingredientList.reduce((acc, curr) => acc + curr.protein, 0);
  // const totalFiber = ingredientList.reduce((acc, curr) => acc + curr.fiber, 0);
  // const name = ingredientList.map((ingredient) => ingredient.name).join(" + ");
  const mergedList = model.sumingredientList();
  // const mergedList ={
  //   name : name, 
  //   fat : totalFat,
  //   carbs : totalCarbs,
  //   fiber : totalFiber,
  //   protein : totalProtein
  // };

  const macroNames = Object.keys(mergedList);
  const macroValues = Object.values(mergedList);
  return (
    <div id = "graph">
      {Sidebar({model})}
      {Add({model})}
      {!ingredientList.length ? <p>No data</p> : 
      <Doughnut
        data={{
          labels: [macroNames[1],macroNames[2],macroNames[3],macroNames[4]],
          datasets: [
            {
              label: mergedList.name,
              data: [(macroValues[1]).toFixed(1), (macroValues[2]).toFixed(1), (macroValues[3]).toFixed(1), (macroValues[4]).toFixed(1)],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',

                ],
                borderWidth: 1,
              },
            ],
          }}
          height={20}
          width={40}
          options={{
            maintainAspectRatio: false,
            title: {
              display:true,
              text: mergedList.name, 
              fontSize: 20,
              fontFamily: 'Trebuchet MS',
              fontColor: "#000000", 
              padding: 100
          
          }
          }}
          />}
       
        
    </div>
  )
  }



export default BarChart;
