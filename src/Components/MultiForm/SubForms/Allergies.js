import React, { useRef } from "react";
import "./SubForm.css";

export default function Allergies(props) {

  const preventFunc = (e) => {
    e.preventDefault()

    const styleData = {
        allergies:[]
    }
    //console.log(styleData);

    allCheckboxes.current.forEach(checkbox => {
        if(checkbox.checked){
            styleData.allergies.push(checkbox.value)
        }
    })

    props.modifyIndex(5, styleData)
  };

  const allCheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(3);
  };

  //console.log(allCheckboxes);

  return (
    <form onSubmit={preventFunc} className="checkbox-form">
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix multiples</span>

      <label htmlFor="milk">Lait</label>
      <input ref={addCheck} type="checkbox" value="milk" id="milk" />

      <label htmlFor="pollen">Pollen</label>
      <input ref={addCheck} type="checkbox" value="pollen" id="pollen" />

      <label htmlFor="nuts">Noix</label>
      <input ref={addCheck} type="checkbox" value="nuts" id="nuts" />

      <label htmlFor="eggs">Oeufs</label>
      <input ref={addCheck} type="checkbox" value="eggs" id="eggs" />

      <label htmlFor="shellfish">Fruits de mer</label>
      <input ref={addCheck} type="checkbox" value="shellfish" id="shellfish" />


      <div className="container-nav-btns">
        <button onClick={handleReturn} type="button" className="prev">
          Précédent
        </button>
        <button>Valider</button>
      </div>
    </form>
  );
}
