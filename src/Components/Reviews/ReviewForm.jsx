import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addReview } from "../../Actions";
import styles from "./ReviewForm.module.css";

export default function ReviewForm() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState("");
  const [score, setScore] = useState();
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
      dispatch(
        addReview({
          ...formData,
          usuario: user._id,
          nombre: user.nombre,
          id,
        })
      );
      navigate(`/zapatillas/${id}`)
  }
  function handleScore(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      score: e.target.value,
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      reviewData: e.target.value,
    });
  }
  return (
    <div className={styles.formDiv}>
      <h2 className={styles.titleform}>DEJANOS TU RESEÑA</h2>
      <p className={styles.textform}>
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.inputReview}
          type="text"
          onChange={handleChange}
          placeholder="Escribe tu reseña..."
        />
        <select
          className={styles.puntuation}
          value={setScore === "def" ? null : score}
          name="league"
          onChange={(e) => handleScore(e)}
        >
          <option value="def">puntuacion</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button className={styles.buttonReview}>Enviar</button>
      </form>
    </div>
  );
}
