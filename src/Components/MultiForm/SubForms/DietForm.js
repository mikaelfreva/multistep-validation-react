import React, { useState } from "react";

export default function DietForm(props) {

    const [formData, setFormData] = useState({
        dietForm: "nodiet"
    });

  const preventFunc = (e) => e.preventDefault();

  const handleRadio = e => {
    setFormData({
        dietForm: e.target.value
    })
  };


  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>Quel est ton régime alimentaire</p>

      <label htmlFor="nodiet">Pas de régime en particulier</label>
      <input
        onChange={handleRadio}
        name="diet"
        id="nodiet"
        value="nodiet"
        type="radio"
      />

      <label htmlFor="homnivorous">Omnivore</label>
      <input
        onChange={handleRadio}
        name="diet"
        id="homnivorous"
        value="homnivorous"
        type="radio"
      />

      <label htmlFor="vegetarian">Végétarien</label>
      <input
        onChange={handleRadio}
        name="diet"
        id="vegetarian"
        value="vegetarian"
        type="radio"
      />

      <label htmlFor="vegan">Vegan</label>
      <input
        onChange={handleRadio}
        name="diet"
        id="vegan"
        value="vegan"
        type="radio"
      />

      <button onClick={() => props.modifyIndex(3, formData)}>VALIDER</button>
    </form>
  );
}
