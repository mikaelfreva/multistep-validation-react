import React from "react";
import "./Card.css";
export default function CardEnd({items}) {

console.log(items);


// const List = items => {
 
//       items.map((item, index) =>
//         console.log(item)
//       )
// };

// console.log(List);


  return (
    <div className="card">
        <h1>Bravissimo</h1>
      <p>On peut te proposer des plats en fonction de tes gouts</p>
      <br />
      <h3>Régime alimentaire</h3>
     <li> {items.dietForm} </li>
    <br />
    <h3>Allergies</h3>
     {items.allergies.map((item,index) =>{
      return  <li> {item} </li>
    })}
    <br />
 <h3>Cuisine préférés</h3>
{items.foodStyle.map((item) =>{
      return  <li> {item} </li>
    })}
<br />
<h3>Aliments detestés</h3>
<p> {items.prefs.hate} </p>
<br />
<h3>Aliments adorés</h3>
<p> {items.prefs.love} </p>


    
    </div>
  );
}
