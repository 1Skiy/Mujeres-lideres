import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";

const SinglePost = () => {

 

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
   const navigate = useNavigate();
  const id = location.pathname.split('/')[2];


const [error, setError] = useState(null);

useEffect(() => {
  const fetchpostCont = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setpostCont(res.data);
    } catch (err) {
      console.error('Error al obtener el post:', err);
      setError('No se pudo cargar el post. Intenta nuevamente.');
    }
  };
  fetchpostCont();
}, [id]);



  const [postCont, setpostCont] = useState({});

  useEffect(() => {
    
    const fetchpostCont = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setpostCont(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchpostCont();
    console.log(postCont.id)
  }, [id]);

  const handleDelete = async() => {
    
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="single">
      <div className="content">
        <img src={postCont.img} alt="" />
        <div className="user">
          {postCont.userImg && (
            <img src={postCont.userImg} alt="userimage" className="userimg" />
          )}
          <div className="info">
            <div className="username">{postCont.uname}</div>
            {postCont.date && (
              <div>Posteado {moment(postCont.date).fromNow()}</div>
            )}
          </div>
          {currentUser && currentUser.uname === postCont.uname && (
            <div className="modify">
              <Link to={`/create/?edit=${id}`}>
                <img src={edit} alt="" />
              </Link>
              <Link>
                <img src={del} alt="" onClick={handleDelete} />
              </Link>
            </div>
          )}
        </div>

        <h1 className="title">{postCont.title}</h1>
        <p className="main-content">
            {postCont.cont && postCont.cont.replace(/<\/?[^>]+(>|$)/g, "")}
          <br />
        </p>
      </div>
      <Menu cat={ postCont.cat} />
    </div>
  );
};

export default SinglePost;
