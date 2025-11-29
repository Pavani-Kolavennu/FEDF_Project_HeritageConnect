import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const [toastData, setToastData] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
      setUser(formData.name);
    } else {
      navigate("/"); 
    }
  }, [navigate]);

  // Show notification / toast whenever user becomes available
  useEffect(() => {
    if (!user) return;

    const title = `Hello ${user}`;
    const body = `Welcome back to Heritage Connect`;
    const showToast = (data) => {
      setToastData(data);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3500);
    };

    // Always show the in-page toast as a fallback/visual confirmation
    showToast({ title, body, icon: '/logo.jpg' });

    try {
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          // show native notification as well
          new Notification(title);
        } else if (Notification.permission !== "denied") {
          // request permission and show notification if granted
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") new Notification(title);
          });
        }
        // if permission denied, we already showed the toast
      }
    } catch (err) {
      console.warn('Notification error', err);
    }
  }, [user]);

  return (
    <div>
      <style>{`
        body {
          margin: 0;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
           font-weight: bold;
          background-image: url('bg.png');
          background-size: cover;
          justify-content: center;
          align:center;
        }
        .header {
          color: #f3f3f3ff;
          font-size: 20px;
          text-align: right;
          font-family: 'Times New Roman', Times, serif;
          padding: 5px;
          position: absolute;
          top: 8px;
          right: 12px;
          z-index: 50;
        }
         h2 {
          text-align: left;
          color: rgba(239, 239, 239, 1);
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
        .toast {
          position: fixed;
          top: 16px;
          right: 16px;
          background: #fff;
          color: #222;
          padding: 12px 14px;
          border-radius: 10px;
          z-index: 9999;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 220ms ease, transform 220ms ease;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 320px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }
        .toast.show {
          opacity: 1;
          transform: translateY(0);
        }
        .toast-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .toast-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .toast-title {
          font-weight: 700;
          color: #111;
          font-size: 15px;
        }
        .toast-body {
          font-size: 13px;
          color: #444;
          line-height: 1.3;
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
        .logo {
          width: 60px;
          height: 60px;
          border-radius: 100%;  
          margin-right: 15px;
        } 
           .topbar h2 {
      white-space: nowrap;
      margin: 0;
      font-size: 20px;
      color: rgba(239, 239, 239, 1);
    }
        
    }
        
      `}</style>


      <div className="topbar">
    <img src="logo.jpg" alt="logo" className="logo" />
    <h2>Heritage Connect</h2>
</div>

      <div className="header" >
        <b>User:</b> {user}
      </div>

      <div className={`toast ${toastVisible ? 'show' : ''}`} role="status" aria-live="polite">
        <img src={toastData?.icon || '/logo.jpg'} alt="app" className="toast-icon" />
        <div className="toast-content">
          <div className="toast-title">{toastData?.title}</div>
          <div className="toast-body">{toastData?.body}</div>
        </div>
      </div>

      <div className="container1">
        <h1>Welcome to Heritage connect!</h1>
        <button onClick={() => navigate("/historic")} className="explore">
          Explore Historic Places →
        </button>
        <button onClick={() => navigate("/monuments")} className="explore">
          Explore Monuments →
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
