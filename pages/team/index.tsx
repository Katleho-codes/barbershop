import Link from "next/link";
import { teamMembers } from "../../public/data/team";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Head from "next/head";

function Team() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <Navigation />
      <main className="team">
        <div className="container">
          <div className="site_title">
            <h1>
              Meet our team of <br />
              <i> problem solvers! </i>
            </h1>
          </div>
          <section className="careers_btn">
            <Link href="/careers" className="link_btn">
              We are hiring!
            </Link>
          </section>

          <section className="team_cards">
            {teamMembers.map((item) => (
              <article key={item.id}>
                <Image placeholder="blur" src={item.src} alt={item.member} />
                <h3>{item.member}</h3>
                <p>{item.position}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Team;
