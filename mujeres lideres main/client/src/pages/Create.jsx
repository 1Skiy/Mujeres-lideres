import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";


const Create = () => {
  const navigate = useNavigate();
   const { currentUser } = useContext(AuthContext);

  // NICE! BUT BETTER STILL, COULD HAVE PASSED A POST PROP FROM <SinglePost> instead of editID.
  // Going to leave it regardless!!!

  const editId = useLocation().search.split("=")[1];
  useEffect(() => {
    const fetchpostCont = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/posts/${editId}`
        );
        setpostCont(res.data);
        setValue(res.data.cont);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (editId) fetchpostCont();
  }, [editId]);

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [File, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const [postCont, setpostCont] = useState({});

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", File);
  
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        withCredentials: true,
      });
  
      console.log("URL de la imagen subida:", res.data.url); // Verifica en la consola
      return res.data.url; // Asegúrate de retornar solo la URL
    } catch (err) {
      console.error("Error al subir la imagen:", err);
      return ""; // Retorna un string vacío si hay un error
    }
  };
  
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    let imgURL = "";
    if (File) {
      imgURL = await upload(); // Esperar a que se resuelva la promesa
    }
  
    try {
      const res = await axios.put(
        `http://localhost:5000/api/posts/${editId}`,
        {
          title,
          desc,
          img: imgURL ? imgURL : imageURL, // Asegúrate de que imgURL tenga un valor válido
          cat: cat,
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          cont: value,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      navigate(`/post/${editId}`);
    } catch (err) {
      console.log(err);
    }
  };
  

  const handleCreate = async (e) => {
  e.preventDefault();

  let imgURL = "";
  if (File) {
    imgURL = await upload(); // Sube la imagen y obtén la URL
  }

  try {
    const res = await axios.post(
      `http://localhost:5000/api/posts`,
      {
        title,
        desc,
        img: imgURL || "", // Asegúrate de que img sea una cadena
        cat: cat,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        cont: value,
        uid: currentUser.id,
      },
      { withCredentials: true }
    );

    console.log("Respuesta del servidor al crear post:", res.data);
    navigate('/');
  } catch (err) {
    console.error("Error al crear el post:", err);
  }
};
  

  return (
    <div className="create">
      <div className="content">
        <input
          type="text"
          name="title"
          id=""
          value={editId ? title : null}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <input
          type="text"
          name="desc"
          id=""
          value={editId ? desc : null}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Brief description of post.."
        />

        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Status:</b> Borrador
          </span>
          <span>
            <b> Visibilidad: </b> Publico
          </span>
          <div className="imgUpload">
            <input
              type="text"
              id="imgURL"
              placeholder="URL"
              onChange={(e) => setImageURL(e.target.value)}
            />
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="file" htmlFor="file">
              / O sube la imagen
            </label>
          </div>
          <div className="buttons">
            <button>Guardar como borrador </button>
            {editId ? (
              <button onClick={handleUpdate}>Editar</button>
            ) : (
              <button onClick={handleCreate}>Publicar</button>
            )}
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input
              type="radio"
              
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Arte</label>
          </div>
          <div className="cat">
            <input
              type="radio"
             
              name="cat"
              value="science"
              id="Sscience"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Ciencia</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Tecnología</label>
          </div>
          <div className="cat">
            <input
              type="radio"
             
              name="cat"
              value="movies"
              id="movies"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="movies">Peliculas</label>
          </div>
          <div className="cat">
            <input
              type="radio"
             
              name="cat"
              value="lifestyle"
              id="lifestyle"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="lifestyle">Innovación</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              
              name="cat"
              value="politics"
              id="politics"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="politics">Politica</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
