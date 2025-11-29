import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const [sname, setSname] = useState("");
  const [pwd, setPwd] = useState("");
  const [captcha, setCaptcha] = useState(null);
  const navigate = useNavigate(); 
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!captcha) {
    alert("Please complete the captcha!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sname,
        passwd: pwd,
        captcha: captcha
      }),
    });

    if (!response.ok) {
      throw new Error(`Server responded ${response.status}`);
    }

    const data = await response.json();
    if (data && data.success) {
      // Persist user info locally so Home can find it and avoid redirecting back to signup
      const userObj = data.user
        ? { name: data.user.name, passwd: data.user.passwd || pwd, email: data.user.email || "", mobileno: data.user.mobileno || "" }
        : { name: sname, passwd: pwd, email: "", mobileno: "" };
      localStorage.setItem("formData", JSON.stringify(userObj));
      alert("Login successful!");
      navigate("/home");
      return;
    }
    alert("Invalid credentials!");
  } catch (err) {
    // Backend unavailable — fall back to client-side check
    console.warn("Login backend unavailable, falling back to localStorage:", err.message);
    const stored = JSON.parse(localStorage.getItem("formData"));
    if (stored && stored.name === sname && stored.passwd === pwd) {
      // stored already exists in localStorage, ensure it's set in expected key
      localStorage.setItem("formData", JSON.stringify(stored));
      alert("Login successful (offline)!");
      navigate("/home");
    } else {
      alert("Invalid credentials or backend unreachable.");
    }
  }
};


  return (
    <div>
      <style>{`
        body {
          margin: 0;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          font-weight: bold;
          background-image: url('bg.png');
          background-size: cover;
          align:center;
          justify-content: center;
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
          .header {
            display: flex;
            align-items: center;
            padding: 15px 20px;
          }

        .logo {
          width: 60px;
          height: 60px;
          border-radius: 100%;  
          margin-right: 15px;
        }

    .topbar {
      width: auto;
      height: 100px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;  
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }

    .topbar h2 {
      white-space: nowrap;
      margin: 0;
      font-size: 20px;
      color: rgba(239, 239, 239, 1);
    }
      `}</style>

      <div className="topbar">
        <img src="/logo.jpg" alt="logo" className="logo" />
        <h2>Heritage Connect</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sname">Name:</label>
        <input type="text" id="sname" value={sname} onChange={(e) => setSname(e.target.value)} required />

        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} required />
          <ReCAPTCHA
  sitekey="6LcBRxwsAAAAAMO2rNAFPB1JY6qi4sM-hmmfjzGI"
  onChange={(value) => setCaptcha(value)}
/>

        <input type="submit" value="Login" />
        <h3>
          Don’t have an account? <Link to="/">Sign up</Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
