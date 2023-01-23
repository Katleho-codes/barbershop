import Link from "next/link";
import { teamMembers } from "../../public/data/team";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";

function Team() {
  const router = useRouter();

  const { id } = router.query;
  return (
    <>
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
              <article
                key={item.id}
                onClick={() => {
                  router.push("/team/profile?id=" + item.id);
                }}
              >
                <Image placeholder="blur" src={item.src} alt={item.member} />
                <h3>{item.member}</h3>
                <p>{item.position}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default Team;
