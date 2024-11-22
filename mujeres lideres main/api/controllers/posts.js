import { db } from "../db.js"
import jwt from "jsonwebtoken";


export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    // Formatea las URLs de las imágenes
    const formattedData = data.map(post => ({
      ...post,
      img: post.img ? post.img : null // Asegúrate de que `img` no sea null
    }));

    return res.status(200).json(formattedData);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `descripcion`, `cont`, p.img, `uid`, u.image AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    console.log("ID recibido:", req.params.id);
    console.log("Resultados de la query:", data);

    if (err) {
      console.error("Error en la consulta SQL:", err); // <-- Log detallado
      return res.status(500).json({ error: "Error al ejecutar la consulta", details: err });
    }

    // Formatear la imagen si existe
    const post = data[0];
    if (post) {
      post.img = post.img && !post.img.startsWith('http')
        ? `${process.env.BACKEND_URL}/upload/${post.img}`
        : post.img;
    }
    
    return res.status(200).json(post);
  });
};
 


export const addPost = (req, res) => {
  console.log("Datos recibidos en el request body:", req.body); // Log detallado
  console.log("Imagen recibida:", req.body.img); // Log específico para la imagen
  const imgURL = req.body.img && typeof req.body.img === 'object' ? req.body.img.url : req.body.img;
  const q = "INSERT INTO posts (`title`, `descripcion`, `img`, `cat`, `date`, `cont`, `uid`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    imgURL, // Asegúrate de que esto sea un string
    req.body.cat,
    req.body.date,
    req.body.cont,
    req.body.uid
  ];
  
  db.query(q, [values], (err, data) => {
    if (err) return res.status(403).json(err);

    return res.status(200).json("Post has been added successfully");
  });
};

 
export const deletePost = (req, res) => {
  //  CHECK IF THERE IS A TOKEN

  const token = req.cookies.access_token;

  if (!token) return res.status(401).json('Not authenticated! Please login');

  // IF TOKEN, VERIFY IT THROUGH JWT

  jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid")

    // IF TOKEN IS VALID, DELETE NOW

    const postId = req.params.id

    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can not delete this post!");

      return res.status(200).json("Post has been deleted successfully");
    })
  })
};
 
export const updatePost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated! Please login");

  jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid");

    const postId = req.params.id;

    const q =
      "UPDATE posts SET `title` = ?, `descripcion` = ?, `img`  = ?, `cat`  = ?, `date`  = ?, `cont`  = ?  WHERE `id` = ? AND `uid` = ?";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      req.body.cont,
    ];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can not update this post!" + err);

      return res.status(200).json("Post has been updated successfully");
    });
  });
};