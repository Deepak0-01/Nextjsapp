import Link from "next/link";
import navStyles from '../styles/Nav.module.css';

function Navbar() {
  return (
    <div className={navStyles.navbar}>
      <ul className={navStyles.navlinks}>
        <li className={navStyles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={navStyles.navlink}>
          <Link href="/about">About</Link>
        </li>
        <li className={navStyles.navlink}>
        <Link href="/blogs">Blogs</Link>
      </li>
      </ul>
    </div>
  );
}

export default Navbar;
