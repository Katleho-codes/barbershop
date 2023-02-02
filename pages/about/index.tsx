import Navigation from "../components/Navigation";
import { about_cards } from "../../public/data/about_cards";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navigation />
      <main className="about">
        <div className="container">
          <div className="site_title">
            <h1>About Us</h1>
            <p>
              We strongly believe that customer service and satisfaction comes
              first, that is why we train our staff to best suit our clients
              needs
            </p>
          </div>
          <section className="about_cards">
            {about_cards.map((item) => (
              <article key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
