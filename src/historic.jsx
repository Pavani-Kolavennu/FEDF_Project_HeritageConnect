import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HistoricPlaces = () => {
  const navigate = useNavigate();
  const [flippedIndex, setFlippedIndex] = useState(null);

  const places = [
    {
      name: "Hampi",
      state: "Karnataka",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFjdTNzZ5N6vlpehb4NPviNnEWEU-Tz-jNg&s",
      info: "Hampi is famous for the ruins of the Vijayanagara Empire. The site is a vast open-air museum of temples, palaces, and other ancient structures scattered amidst a stunning boulder-strewn landscape."
    },
    {
      name: "Fatehpur Sikri",
      state: "Uttar Pradesh",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/fatehpur-sikri-agra-uttar-pradesh-1-attr-hero?qlt=82&ts=1726650332548",
      info: "Situated near Agra, Fatehpur Sikri is a historic city built by Emperor Akbar. This ghost city is known for its magnificent Mughal architecture, including the Buland Darwaza and the Tomb of Salim Chishti."
    },
    {
      name: "Konark Sun Temple",
      state: "Odisha",
      img: "https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg",
      info: "This 13th-century temple in Odisha is a masterpiece of Indian architecture. Built in the shape of a colossal chariot for the sun god, Surya, the temple is renowned for its intricate carvings and stone wheels."
    },
    {
      name: "Ajanta and Ellora Caves",
      state: "Maharashtra",
      img: "https://www.indiantempletour.com/wp-content/uploads/2023/03/Ajanta-and-Ellora-caves.jpg",
      info: "The Ajanta and Ellora Caves in Maharashtra are a stunning collection of ancient rock-cut temples, renowned for their incredible Buddhist frescoes and a unique blend of Hindu, Buddhist, and Jain sculptures."
    }
  ];

  const flipCard = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  

  return (
    <div style={styles.body}>
      <div style={styles.topbar}>
        <img src="/logo.jpg" alt="logo" style={styles.logo} />
       
      </div>
      <h1 style={styles.h1}>Explore Historic Places of India</h1>
      <p style={styles.p}>
        Discover the rich history and heritage of India through its most iconic landmarks. 
        Click on each card to learn more about these historic places.
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

export default HistoricPlaces;
