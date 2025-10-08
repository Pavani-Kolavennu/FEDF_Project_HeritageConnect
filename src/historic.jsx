import React from "react";

const HistoricPlaces = () => {
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

  const showInfo = (info) => alert(info);

  return (
    <div style={styles.body}>
      <header>
        <h2 style={styles.header}><i>Heritage Connect</i></h2>
      </header>
      <h1 style={styles.h1}>Explore Historic Places of India</h1>
      <p style={styles.p}>
        Discover the rich history and heritage of India through its most iconic landmarks. 
        Click on each card to learn more about these historic places.
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

export default HistoricPlaces;
