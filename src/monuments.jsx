import React from "react";

const FamousMonuments = () => {
  const places = [
    { 
        name: "Taj Mahal", state: "Uttar Pradesh", img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg", info: "A breathtaking white marble mausoleum in Agra, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal." },
    { name: "Red Fort", state: "Delhi", img: "https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg", info: "A historic fortress in Old Delhi built by Emperor Shah Jahan, serving as the main residence of Mughal emperors." },
    { name: "Qutub Minar", state: "Delhi", img: "https://i.pinimg.com/474x/5d/49/4d/5d494d3ab6ac479b630cbfa74f3882ab.jpg", info: "A 73-meter-tall red sandstone and marble minaret, representing Indo-Islamic architecture." },
    { name: "Statue of Unity", state: "Gujarat", img: "https://assets.cntraveller.in/photos/60ba151da1a415b43b10ba69/1:1/w_848,h_848,c_limit/sardar-patel-statue-2.jpg", info: "The world’s tallest statue, honoring Sardar Vallabhbhai Patel, known as the Iron Man of India." },
    { name: "India Gate", state: "Delhi", img: "https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-4-attr-hero?qlt=82&ts=1742167548398", info: "A war memorial in New Delhi built in honor of Indian soldiers, standing as a symbol of pride." }
  ];

  const showInfo = (info) => alert(info);

  return (
    <div style={styles.body}>
      <header>
        <h2 style={styles.header}><i>Heritage Connect</i></h2>
      </header>
      <h1 style={styles.h1}>Explore Famous Monuments of India</h1>
      <p style={styles.p}>
        Discover India's architectural marvels that stand as symbols of its glorious past.
      </p>

      <div style={styles.places}>
        {places.map((place, index) => (
          <div key={index} onClick={() => showInfo(place.info)} style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <img src={place.img} alt={place.name} style={styles.img} />
            <h3 style={styles.h3}>{place.name}</h3>
            <p style={styles.cardP}>{place.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#f4f6f9",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh"
  },
  header: {
    textAlign: "left",
    fontFamily: "Cambria, Georgia, serif",
    color: "rgb(118, 12, 122)"
  },
  h1: {
    color: "#0078d7",
    marginBottom: "10px"
  },
  p: {
    fontSize: "18px",
    color: "#444",
    maxWidth: "700px",
    margin: "0 auto 30px"
  },
  places: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  card: {
    width: "300px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 0.3s"
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  },
  h3: {
    margin: "10px 0 5px",
    color: "#0078d7"
  },
  cardP: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px"
  }
};

export default FamousMonuments;
