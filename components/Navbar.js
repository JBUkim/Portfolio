import Link from "next/link";
import { withRouter } from "next/router";

function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Portfolio.
        </Link>

        <ul className="nav-links">
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <Link href="/project">Project</Link>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <Link href="https://github.com/JBUkim" target="_blank">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
