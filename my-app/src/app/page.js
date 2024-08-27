import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./home.module.css";
import CardImageList from "../components/CardImageList";

const urlnatt = "/assets/hus.jpg";
const url = "/assets/testbild.jpg";
const urlhimmel = "/assets/himmel.jpeg";
const urltest = "/assets/testbild.jpg";

export default function Home() {
  return (
    <main>
      <Header title="Hotel Cristallo" />
      <Navbar />
      <div style={{display: "flex", flexDirection: "row"}}>
        <Sidebar />
        <div className={styles.mainContent}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: 20,
              flexWrap: "wrap",
            }}
          >
            <CardImageList />
            <Card too="/about" url={urlnatt}>
              <h1 style={{ fontSize: 25 }}>Hotel Venice Lido</h1>
              <h3 style={{ fontSize: 20 }}>
                Hotel Cristallo, Cosy Atmosphere, Beach Near Venice
              </h3>
              <p>
                Hotel Cristallo, 2 star hotel in the center of Venice Lido,
                welcomes you in a friendly, cosy and warm atmosphere. We are
                located just 200 mt away from the beach and just 5 minutes walk
                from the waterbus stop to the center of Venice. Our modern rooms
                are equipped with all comforts, our staff is attentive and
                thoughtful, our location is central so that you can fully enjoy
                your holiday in Venice, surrounded by all the comforts and
                services that only a residential and seaside resort can offer.
              </p>
              <h2 style={{ fontSize: 25 }}>Why Choosing Venice Lido</h2>
              <p>
                Venice Lido is a unique location for your stay: it is perfectly
                suitable to enjoy a seaside holiday as well as spend some days
                in Venice. The perfect balance of beauty, beaches and culture
                make of Venice Lido and Hotel Cristallo the ideal location for
                any kind of stay and vacation preference: a seaside holiday with
                your family, a romantic stay in the Lagoon, a cultural weekend
                to attend the Biennale. Our hotel is also a few minutes away
                from the Venice Film Festival’s main location, in the heart of
                Venetian movida, and near stores and boutiques for shopping
                along the Gran Viale. Lido is also very lively in autumn and
                winter, unlike other seaside resorts, and is among the top
                places offering outstanding value for money in this season.
              </p>
            </Card>
            <Card too="/about" url={urlnatt}>
              <h1 style={{ fontSize: 25 }}>Discover our rooms</h1>
              <p>
                Hotel Cristallo offers recently renovated, bright, modern rooms.
                We have larger rooms for families and also adjoining rooms upon
                requests. Some rooms have a wood flooring, some have a balcony,
                some have a view to our backyard garden.
              </p>
            </Card>

            <Card too="/about" url={url}>
              <h1 style={{ fontSize: 25 }}>Discover our reviews</h1>
              <p>
                The most important thing for us at Hotel Cristallo is the
                satisfaction of our guests. Here you can read the reviews our
                guests dedicated to us: we'd love to read yours too and help us
                improve!
              </p>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card too="/about" url={url}>
              <h1 style={{ fontSize: 25 }}>Special Offers</h1>
              <h3>Direct Booking Offer, Discounts Hotel Venice Lido</h3>
              <p>
                10% discount always valid on Hotel Cristallo official website.
              </p>
            </Card>
            <Card too="/about" url={url}>
              <h1 style={{ fontSize: 25 }}>Special Offers</h1>
              <h3>Direct Booking Offer, Discounts Hotel Venice Lido</h3>
              <p>
                10% discount always valid on Hotel Cristallo official website.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
