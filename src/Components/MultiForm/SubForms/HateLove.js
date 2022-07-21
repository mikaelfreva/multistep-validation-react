import React, { useState } from "react";
import "./SubForm.css";

export default function HateLove(props) {
  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: "",
    },
  });

  const preventFunc = (e) => {
    e.preventDefault();
  };

  const handleTxtArea = (e, pref) => {
    if (pref === "love") {
      setFormData({
        prefs: {
          ...formData.prefs,
          love: e.target.value,
        },
      });
    } else if (pref === "hate") {
      setFormData({
        prefs: {
          ...formData.prefs,
          hate: e.target.value,
        },
      });
    }
  };

  return (
    <form onSubmit={preventFunc} className="preferences-form">
      <p>Parle nous des aliments que tu préféres et que tu détestes !</p>

      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule
      </label>
      <textarea
        onChange={(e) => handleTxtArea(e, "love")}
        placeholder="Un ou plusieurs, si tu en as"
        id="prefered"
      ></textarea>

      <label htmlFor="hated">
        Tes aliments détéstés, séparés par une virgule
      </label>
      <textarea
        onChange={(e) => handleTxtArea(e, "hate")}
        placeholder="Un ou plusieurs, si tu en as"
        id="hated"
      ></textarea>

      <div className="container-nav-btns">
        <button
          onClick={() => props.modifyIndex(4)}
          type="button"
          className="prev"
        >
          Précédent
        </button>
        <button onClick={() => props.modifyIndex(6, formData)}>VALIDER</button>
      </div>
    </form>
  );
}
