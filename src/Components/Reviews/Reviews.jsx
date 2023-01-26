import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from "../../Actions";
import "./Reviews.css";

export default function Reviews({id}) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  useEffect(() => {
    dispatch(getAllReviews());
  }, []);
  const reviewsZapas = reviews.filter(e=> e.producto === id)

  return (
    <div className="reviewContainer">
      {reviewsZapas?.map((r) => {
        return r.estado ? (
          <div className="divReview" key={r.id}>
            <h2 className="userName">{r.nombre}</h2>
            <div className="cnt-puntuation">
              <span className="puntuation">Puntuacion: {r.calificacion}</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png"
                alt="star-logo"
                className="star-logo"
              />
            </div>
            <span className="reviewData">{r.comentarios}</span>
          </div>
        ) : null;
      })}
    </div>
  );
}
