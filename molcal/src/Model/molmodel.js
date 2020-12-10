import Add from '../Presenter/add.js';
import item from './molobject.js'
import AlreadyInList from "../Presenter/alreadyInList"
import capString from "../Presenter/capString"
import {SaveToFirebase} from '../firebaseFunc';

class MolModel{
    constructor(ingredientList = [], currentingredient = undefined, storeElem=[]){
        this.subscribers = [];
        this.recipeList = [];
        this.ingredientList = ingredientList;  
        this.currentingredient = currentingredient;
        this.storeList = [storeElem];
        this.currentRecipeList = [];
    }

    /********** MOL_OBJECT **********/
    setIngredientObject(ing, quantity){  // initialize ingredient object
        var IngredientObj ={
            name : "", 
            fat : null,
            carbs : null,
            fiber : null,
            protein : null,
            amount : null
        }        

        IngredientObj.name = ing.label; // efter den här ändras elementet i listan till objektet
        IngredientObj.fat = ing.nutrients.FAT;
        IngredientObj.carbs = ing.nutrients.CHOCDF;
        IngredientObj.fiber = ing.nutrients.FIBTG;
        IngredientObj.protein = ing.nutrients.PROCNT;

        IngredientObj.amount = parseInt(quantity !== "" ? quantity : "100");

        return IngredientObj;
    }
    

    /********** CURRENT_ingredient ********/
    setCurrentingredient(obj) {
        this.currentingredient = obj; 
        this.notifyObservers();
    }

    getCurrentingredient() {  // Current ingredient
        return this.currentingredient; 
    }

    /********** ingredient_LIST **********/
    nameYouringredientList(name) {
        const customizedMol = this.getCurrentingredient();
        customizedMol.id=name;
        this.addToingredientList(customizedMol);
    }

    getingredientList() { // more than one ingredient object
        return [...this.ingredientList];
    }

    sumingredientList() {   //Used to sum up the ingredients values for the graph presentation
        var sumObj ={
            name : "", 
            fat : null,
            carbs : null,
            fiber : null,
            protein : null
        }
        const molList = this.getingredientList() 
        molList.forEach(element =>  // sums all elements from molecule list
            (sumObj.name += " + " + capString(element.name), // to capitalize first letter in each ing
            sumObj.fat += element.fat*(element.amount/100),
            sumObj.carbs += element.carbs*(element.amount/100), 
            sumObj.fiber += element.fiber*(element.amount/100), 
            sumObj.protein += element.protein*(element.amount/100))
            )
            sumObj.name = sumObj.name.substring(3); // used to remove the first plus sign
                    return sumObj; 
    }

    addToingredientList(obj) {
        //console.log(this.getaList())
        if(!this.ingredientListHas(obj)){
            throw new Error( "Ingredient is already in graph");
        }
        
        this.ingredientList = [obj, ...this.ingredientList]; 
        // this.ingredientList.push(obj);
        // console.log(this.getingredientList())
        this.notifyObservers(); 
    }
    
    ingredientListHas(item) {
        //const filteredList = this.ingredientList.filter(elem => elem.name === item.name); // Filter 
        //return filteredList.length !== 0; // check if the list is empty
        let check = true;
		//let checkDish;
		var index=0;
		while(index<this.ingredientList.length)
		{
			if(item.name === this.ingredientList[index].name)
			{
				check=false; 
				break;
			}
			index++;
		}
		return check;
    }

    removeFromList(name){
        this.ingredientList = this.ingredientList.filter(function(remove){return remove.name!==name;});
        this.notifyObservers();
    }

    removeFromRecipeList(name) {
        this.recipeList = this.recipeList.filter( (elem) => elem.name !== name);

        // SaveToFirebase(this.recipeList);

        this.notifyObservers();
    }

    /********** RECIPE_LIST **********/
    nameYourRecipeList(name) 
    {
        // IngredientList.id=name;
        const recipe = {
            name: name,
            ingredientList: this.getingredientList()
        }

        this.addToRecipeList(recipe);
    }

    addToRecipeList(recipe) {
        // We have to construct a new array by appending the dish and the rest of the list to it. This 
        // is because the convention in Javascript spread syntax. 
        // See Notes about spread syntax and immutable in Javascript}
        console.log(this.recipeList);
        this.recipeList = recipe;
        
        SaveToFirebase(this.recipeList);
        
        this.notifyObservers();  
    }

    getRecipeList(){ // more than one molobject merged together
        //return this.recipeList;
        return [...this.recipeList];
    }

    setRecipeList(recipeList) {
        this.recipeList = recipeList;
        this.notifyObservers();
    }

    /********** CLEAR_ARRAY **********/
    clearList(i) {
        if(i!==null){
        this.currentingredient = undefined;
        //this.setMolObject(null);
        //this.recipeList.length = 0;
        //const molList = this.moleculeList;
        this.ingredientList.splice(0,this.ingredientList.length);
        this.recipeList.splice(0,this.recipeList.length);
        }
    }

    /********** STORE_LIST **********/
    setStoreList(list){
        this.storeList=list;
        this.notifyObservers();
    }

    getStoreList(){
        return this.storeList;
    }

    /********** OBSERVER **********/
    addObserver(obs) { 
        this.subscribers = this.subscribers.concat(obs);  
        return ()=>this.removeObserver(obs);                             
        }

    notifyObservers(){
        this.subscribers.forEach((callback)=> {
            try{callback()} catch(err){
                console.error("Error ", err, callback);}
        });                                                      
    }
    removeObserver(obs){
        this.subscribers = this.subscribers.filter(o=> o !== obs); 
    }
}

export default MolModel;