import React, { useState } from "react";
import axios from "axios";

export default function UploadImg() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");


  // converBase64 => es una función que convierte una imagen en una serie de digitos y letras 
  // para que lo pueda leer
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //UploadInput => es el input que recibe la imagen 
  function UploadInput() {
    return (
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click para subir</span> o arrastrar y soltar
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={uploadImage}
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple
          />
        </label>
      </div>
    );
  }

  //uploadSingleImage => función que se ejecuta si cargas una sola imagen(encaragada de hacer
  // el .post)
  function uploadSingleImage(base64) {
    setLoading(true);
    axios
      .post("http://localhost:3001/uploadImage", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        alert("Imagen subida con exito :)");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }
  //uploadMultipleImages => función que se ejecuta si subis mas de una imagen =) (encaragada de hacer
  // el .post)
  function uploadMultipleImages(images) {
    setLoading(true);
    axios
      .post("http://localhost:3001/uploadMultipleImages", { images })
      .then((res) => {
        setUrl(res.data);
        alert("Imagenes subidas con exito :)");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

 //uploadImage => funcion que termina por convertir toda la información y subirla =)
  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (var i = 0; i < files.length; i++) {
      var base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  return (
    <div>
      <div>
        {url && (
          <div>
            Accede a el link de tu img = {" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </div>
        )}
      </div>
      <div>
        {loading ? (
          <div className="flex items-center justify-center">
            <h1>Cargando...</h1>
          </div>
        ) : (
          <UploadInput />
        )}
      </div>
    </div>
  );
}
