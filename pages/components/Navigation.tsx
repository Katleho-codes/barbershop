import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "../../public/data/navlinks";

function Navigation() {
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <nav className="navbar">
        <button className="burger_menu" onClick={ToggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
          </svg>
        </button>
        <Link className="logo" href="/">
          John&apos;s Barbershop
        </Link>
        <ul className="navbar_links">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link href={link.pageRoute} className={"nav_link"}>
                {link.pageName}
              </Link>
            </li>
          ))}
        </ul>
        <button className="donate_btn">Join</button>
      </nav>
      <aside className={`sidebar ${isOpen === true ? "active" : ""}`}>
        <div className="sd-header">
          <Link className="logo" href="/">
            John&apos;s Barbershop
          </Link>
          <button className="btn close_button" onClick={ToggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
        <div className="sd-body">
          <ul>
            {navlinks.map((link) => (
              <li key={link.id}>
                <Link href={link.pageRoute} className={"sd-link"}>
                  {link.pageName}
                </Link>
              </li>
            ))}
            <button className="donate_btn">Donate</button>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Navigation;
