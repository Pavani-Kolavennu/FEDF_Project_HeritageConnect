import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

function Login() {
  const [sname, setSname] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData && storedData.name === sname && storedData.passwd === pwd) {
      alert("Login successful!");
      navigate("/Home");

    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <style>{`
        body {
          margin: 0;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          font-weight: bold;
          background-image: url('https://cdn.pixabay.com/photo/2020/05/27/12/35/amber-fort-5227035_1280.jpg');
          background-size: cover;
          align:center;
        }
        h2 {
          text-align: left;
          color: rgb(118, 12, 122);
          margin-left: 20px;
        }
        form {
          background-color: rgba(255, 235, 205, 0.8);
          width: 400px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        label {
          display: block;
          margin-bottom: 8px;
          color: #130404;
        }
        input[type="text"], input[type="password"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #cccccc;
          border-radius: 5px;
        }
        input[type="submit"] {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        input[type="submit"]:hover {
          background-color: #45a049;
        }
        h3 {
          text-align: center;
          color: black;
        }
      `}</style>

      <h2><i>Heritage connect</i></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sname">Name:</label>
        <input type="text" id="sname" value={sname} onChange={(e) => setSname(e.target.value)} required />

        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} required />

        <input type="submit" value="Login" />
        <h3>
          Don’t have an account? <Link to="/">Sign up</Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
