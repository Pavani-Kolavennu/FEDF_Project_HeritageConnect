import React from "react";

const IndianCulture = () => {
  const places = [
    { name: "Classical Dance Forms",  img: "https://www.shutterstock.com/image-illustration/indian-dance-forms-india-stapes-600nw-2451028887.jpg", info: "Indian dance includes classical and folk forms telling stories through gestures and expressions." },
    { name: "Traditional Music",  img: "https://www.upscsuccess.com/wp-content/uploads/2020/07/indian-culture-and-heritage-5-638.jpg", info: "Indian music is based on ragas and talas, with Hindustani and Carnatic styles dominating classical traditions." },
    { name: "Festivals in India", img: "https://www.cheggindia.com/wp-content/uploads/2025/02/gk-227835-list-of-festivals-in-india-v3-1024x618.png", info: "Indian festivals are colorful celebrations reflecting diverse religious and cultural traditions." },
    { name: "Yoga", img: "https://image.myupchar.com/5247/webp/yoga-in-hindi.webp",info: "Originating in ancient India, yoga combines physical postures, breathing, and meditation for spiritual and physical well-being." },
    { name: "Ayurveda", img: "https://www.thermofisher.com/blog/behindthebench/wp-content/uploads/sites/9/2016/01/Ayurveda-making-400x267.jpg",info: "Ayurveda is a traditional Indian system of medicine focused on balance, natural healing, and holistic wellness." },
  ];

  const showInfo = (info) => alert(info);

  return (
    <div style={styles.body}>
      <header>
        <h2 style={styles.header}><i>Heritage Connect</i></h2>
      </header>
      <h1 style={styles.h1}>Explore the Rich Culture of India</h1>
      <p style={styles.p}>
        Experience the beauty of India’s art, music, and traditions that unite its people across regions.
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

export default IndianCulture;
