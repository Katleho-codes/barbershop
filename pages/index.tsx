import Head from "next/head";
import Navigation from "./components/Navigation";
import { images } from "../public/data/home_cards";
import Image from "next/image";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const handleSend = (e: any) => {
    e.preventDefault();
    alert("Subscribed!");
  };
  return (
    <>
      <Head>
        <title>John&lsquo;s Barbershop</title>
        <meta name="description" content="John's Barbershop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>
      <main className="home">
        <div className="home_container">
          <div className="site_title">
            <h1>
              Haircuts that will make <br />
              them go{" "}
              <span>
                <i>WOW!</i>
              </span>
            </h1>
          </div>
          <form>
            <h3> Subscribe to never miss out on a sale</h3>
            <input
              type="email"
              name="email"
              id="email"
              aria-label="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button type="submit" aria-label="subscribe" onClick={handleSend}>
              Subscribe
            </button>
          </form>
          <section className="cards">
            {images.map((item) => (
              <article key={item.id}>
                <Image placeholder="blur" src={item.src} alt={item.title} />
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
