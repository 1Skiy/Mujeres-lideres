import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";


const Home = () => {

  const location = useLocation();
  const cat = location.search
  console.log(cat)

  const [posts, setposts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts${cat}`);
        console.log("Datos recibidos de la API:", res.data); // Verifica el formato de los datos
        setposts(res.data);
      } catch (err) {
        console.error("Error al obtener los posts:", err);
      }
    };
    fetchPosts();
  }, [cat]);
  
  
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            
            <div className="img">
            {post.img ? (
            <img src={post.img} alt={post.title} />
              ) : (
              <p>No hay imagen disponible</p> // Texto alternativo si no hay imagen
                  )}
                  </div>


            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.descripcion}</p>
                <button>Leer más</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home