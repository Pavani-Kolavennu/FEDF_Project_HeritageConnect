import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndianCulture = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const navigate = useNavigate();

  const places = [
    {
      name: "Classical Dance Forms",
      img: "https://www.shutterstock.com/image-illustration/indian-dance-forms-india-stapes-600nw-2451028887.jpg",
      info: "Indian classical dance is one of the oldest art traditions in the world, combining storytelling with graceful movements, music, and rhythm. Each dance form, such as Bharatanatyam, Kathak, Odissi, Kuchipudi, and Kathakali, expresses emotions through hand gestures, facial expressions, and body movements.."
    },
    {
      name: "Traditional Music",
      img: "https://www.upscsuccess.com/wp-content/uploads/2020/07/indian-culture-and-heritage-5-638.jpg",
      info: "Indian music is one of the world’s oldest musical traditions, built on the rich foundations of ragas (melodic patterns) and talas (rhythmic cycles). It mainly has two classical styles—Hindustani from North India and Carnatic from South India—each with its own unique techniques and expressions."
    },
    {
      name: "Festivals in India",
      img: "https://www.cheggindia.com/wp-content/uploads/2025/02/gk-227835-list-of-festivals-in-india-v3-1024x618.png",
      info: "India celebrates a wide variety of vibrant festivals throughout the year, each representing cultural diversity, religious traditions, and shared joy. Festivals like Diwali, Holi, Pongal, Navratri, Eid, and Christmas carry unique customs, foods, rituals, and stories passed down through generations."
    },
    {
      name: "Yoga",
      img: "https://image.myupchar.com/5247/webp/yoga-in-hindi.webp",
      info: "Yoga originated in ancient India as a holistic practice combining physical postures, breathing techniques, meditation, and mind–body awareness. It promotes physical strength, mental clarity, inner peace, and spiritual growth, making it one of India’s most influential contributions to global wellness."
    },
    {
      name: "Ayurveda",
      img: "https://www.thermofisher.com/blog/behindthebench/wp-content/uploads/sites/9/2016/01/Ayurveda-making-400x267.jpg",
      info: "Ayurveda is India’s ancient healing system that focuses on maintaining balance between body, mind, and energy. Using herbal medicines, diet, detox routines, and lifestyle practices, it promotes natural health and long-term wellness rooted in centuries of wisdom. It tailors care to individual dosha types."
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
      <h1 style={styles.h1}>Explore the Rich Culture of India</h1>
      <p style={styles.p}>
        Discover the rich history and heritage of India through its culture. 
        Click on each card to learn more about these cultural aspects.
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

export default IndianCulture;