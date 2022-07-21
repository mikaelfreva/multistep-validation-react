import React, { useRef } from "react";
import "./SubForm.css";

export default function FoodStyle(props) {

  const preventFunc = (e) => {
    e.preventDefault()

    const styleData = {
        foodStyle:[]
    }
    //console.log(styleData);

    allCheckboxes.current.forEach(checkbox => {
        if(checkbox.checked){
            styleData.foodStyle.push(checkbox.value)
        }
    })

    props.modifyIndex(4, styleData)
  };

  const allCheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(2);
  };

  //console.log(allCheckboxes);

  return (
    <form onSubmit={preventFunc} className="checkbox-form">
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix multiples</span>

      <label htmlFor="italian">Italienne</label>
      <input ref={addCheck} type="checkbox" value="italian" id="italian" />

      <label htmlFor="japanese">Japonaise</label>
      <input ref={addCheck} type="checkbox" value="japanese" id="japanese" />

      <label htmlFor="indian">Indienne</label>
      <input ref={addCheck} type="checkbox" value="indian" id="indian" />

      <label htmlFor="thaï">Thaï</label>
      <input ref={addCheck} type="checkbox" value="thaï" id="thaï" />

      <label htmlFor="french">Française</label>
      <input ref={addCheck} type="checkbox" value="french" id="french" />

      <label htmlFor="chinese">Chinoise</label>
      <input ref={addCheck} type="checkbox" value="chinese" id="chinese" />

      <div className="container-nav-btns">
        <button onClick={handleReturn} type="button" className="prev">
          Précédent
        </button>
        <button>Valider</button>
      </div>
    </form>
  );
}
