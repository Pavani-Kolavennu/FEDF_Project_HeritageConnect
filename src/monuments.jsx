import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FamousMonuments = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const navigate = useNavigate();
  const places = [
    { 
      name: "Taj Mahal", 
      state: "Uttar Pradesh", 
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg", 
      info: "A breathtaking white marble mausoleum in Agra, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal." 
    },
    { 
      name: "Red Fort", 
      state: "Delhi", 
      img: "https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg", 
      info: "A historic fortress in Old Delhi built by Emperor Shah Jahan, serving as the main residence of Mughal emperors." 
    },
    { 
      name: "Qutub Minar", 
      state: "Delhi", 
      img: "https://i.pinimg.com/474x/5d/49/4d/5d494d3ab6ac479b630cbfa74f3882ab.jpg", 
      info: "A 73-meter-tall red sandstone and marble minaret, representing Indo-Islamic architecture." 
    },
    { 
      name: "Statue of Unity", 
      state: "Gujarat", 
      img: "https://assets.cntraveller.in/photos/60ba151da1a415b43b10ba69/1:1/w_848,h_848,c_limit/sardar-patel-statue-2.jpg", 
      info: "The world’s tallest statue, honoring Sardar Vallabhbhai Patel, known as the Iron Man of India." 
    },
    { 
      name: "India Gate", 
      state: "Delhi", 
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-4-attr-hero?qlt=82&ts=1742167548398", 
      info: "A war memorial in New Delhi built in honor of Indian soldiers, standing as a symbol of pride." 
    }
  ];

   const flipCard = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const goToDetails = (name) => {
    navigate(`/details/${encodeURIComponent(name)}`);
  };
  

  return (
    <div style={styles.body}>
      <div style={styles.topbar}>
        <img src="/logo.jpg" alt="logo" style={styles.logo} />
      </div>
      <h1 style={styles.h1}>Explore Famous Monuments of India</h1>
      <p style={styles.p}>
        Discover India's architectural marvels that stand as symbols of its glorious past.
      </p>

      <div style={styles.places}>
        {places.map((place, index) => (
          <div
            key={index}
            style={styles.flipContainer}
            onClick={() => flipCard(index)}
          >
            <div
              style={{
                ...styles.flipper,
                transform:
                  flippedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)"
              }}
            >
             
              <div style={styles.front}>
                <img src={place.img} alt={place.name} style={styles.img} />
                <h3 style={styles.h3}>{place.name}</h3>
              </div>

              
              <div style={styles.back}>
                <div>
                  <p style={styles.backText}>{place.info}</p>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    background: "#fdfcfbff",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh",
    backgroundImage: 'url("/culbg.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
     paddingTop: "120px",
  },
  h1: {
    color: "#f5f5f5ff",
    marginBottom: "30px"
  },
  places: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px"
  },
  flipContainer: {
    perspective: "1000px",
    width: "300px",
    height: "330px",
    cursor: "pointer"
  },
  flipper: {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s"
  },
  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
  },
  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "white",
    color: "black",
    transform: "rotateY(180deg)",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backfaceVisibility: "hidden",
    padding: "10px"
  },
  backText: {
    fontSize: "16px",
    padding: "10px",
    overflowWrap: "break-word"
  },
  img: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
  },
  h3: {
    marginTop: "10px",
    fontSize: "20px",
    color: "#0078d7"
  },
  
   topbar: {
    width: 'auto',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 20px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: 100
  },
  logo: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '15px'
  },
  p: {
  fontSize: '18px',
  color: 'white',
  maxWidth: '800px',
  margin: '0 auto 30px',
  lineHeight: '1.6',
  textAlign: 'center',
  padding: '12px 16px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
}
};

export default FamousMonuments;