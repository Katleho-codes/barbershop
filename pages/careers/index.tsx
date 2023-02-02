import { jobs } from "../../public/data/jobs";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Head from "next/head";

function Careers() {
  return (
    <>
      <Head>
        <title>Careers</title>
      </Head>
      <Navigation />
      <main className="careers">
        <div className="container">
          <div className="site_title">
            <h1>Careers</h1>
            <p>We hope you can join our team!</p>
          </div>

          <section>
            {jobs.map((job) => (
              <article key={job.id}>
                <h2>
                  {job.job}{" "}
                  <span>
                    <Link href="" className="apply_btn">
                      Apply
                    </Link>
                  </span>
                </h2>
                <p>{job.desc}</p>
                <span className="typeOfJob">{job.typeOfJob}</span>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default Careers;
