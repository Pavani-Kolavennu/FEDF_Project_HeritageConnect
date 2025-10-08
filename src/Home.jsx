import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
      setUser(formData.name);
    } else {
      navigate("/"); 
    }
  }, [navigate]);

  return (
    <div>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-image: url('https://cdn.pixabay.com/photo/2020/05/27/12/35/amber-fort-5227035_1280.jpg');
          background-size: cover;
        }
        .header {
          color: #001f3f;
          font-size: 20px;
          text-align: right;
          font-family: 'Times New Roman', Times, serif;
          padding: 5px;
         
         
        }
        h2 {
          text-align: left;
          color: rgb(118, 12, 122);
          margin-left: 20px;
        }
        .container1 {
          width: 600px;
          min-height: 100px;
          margin: 100px auto;
          background-color: rgba(255, 235, 205, 0.8);
          padding: 10px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        h1 {
          color: #0d7411;
          font-style: oblique;
          font-family: Georgia, 'Times New Roman', Times, serif;
          margin-bottom: 30px;
        }
        .explore {
          background-color: #0078d7;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: block;
          margin: 10px auto;
        }
        .explore:hover {
          background-color: #5995c6;
        }
        footer {
          color: aliceblue;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>

      <h2>
        <i>Heritage connect</i>
      </h2>

      <div className="header" >
        <b>User:</b> {user}
      </div>

      <div className="container1">
        <h1>Welcome to Heritage connect!</h1>
        <button onClick={() => navigate("/historic")} className="explore">
          Explore Historic Places →
        </button>
        <button onClick={() => navigate("/monuments")} className="explore">
          Explore Famous Monuments →
        </button>
        <button onClick={() => navigate("/culture")} className="explore">
          Explore Indian Culture →
        </button>
      </div>

      <footer>
        <p>&copy; Copy Rights belongs to Heritage Connect</p>
      </footer>
    </div>
  );
}

export default Home;
