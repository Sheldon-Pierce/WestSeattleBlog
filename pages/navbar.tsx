import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button className={router.pathname === "/" ? "active" : ""}>Home</button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button className={router.pathname === "/about" ? "active" : ""}>Things To Do</button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <button className={router.pathname === "/contact" ? "active" : ""}>Resturants</button>
          </Link>
        </li>
      </ul>
      <style jsx>
        {
            `
            nav {
                background-color: white;
                padding: 10px;
              }
              
              ul {
                list-style: none;
                display: flex;
                justify-content: space-around;
              }
              
              li {
                margin-right: 10px;
              }
              
              button {
                text-decoration: none;
                color: blue;
                background-color: white;
                border: none;
              }
              
              button.active {
                font-weight: bold;
                color: black;
              }
            `
        }
      </style>
    </nav>
  );
};

export default Navbar;
