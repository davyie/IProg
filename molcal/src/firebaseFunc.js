import {db} from "./firebase"; 

function SaveToFirebase(list) {  
  try {
    db.ref("Recipes").push(
      list
    );
  } catch (error) {
    console.log(error);
  }
};

function ReadFromFirebase({model}){
  try {
    db.ref("Recipes").on("value", (snapshot) =>{
      //console.log(snapshot.val());
      if(snapshot.val()){
        const values = Object.values(snapshot.val());
        console.log(values);
        model.setStoreList(values);
      }
      // if(snapshot.val()){
      //   const values = Object.values(snapshot.val());
      //   console.log(values);
      //   return values;
      // }
    });
  } catch (error) {
    console.log(error);
  }
}

function ReadFromFirebaseD({model}){
  try {
    db.ref("Recipes").on("value", (snapshot) =>{
      //console.log(snapshot.val());
      if(snapshot.val()){
        const values = Object.values(snapshot.val());
        // console.log(values);
        model.setRecipeList(values);
      }
      // if(snapshot.val()){
      //   const values = Object.values(snapshot.val());
      //   console.log(values);
      //   return values;
      // }
    });
  } catch (error) {
    console.log(error);
  }
}

export {SaveToFirebase, ReadFromFirebase, ReadFromFirebaseD};