import Link from "next/link";

function Navbar() {
  return (
    <div>
      <ul className="flex space-x-4 justify-center bg-black text-blue-500">
        <li>
          <Link href={"/myuser"}> Users</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/users"}>Contact</Link>
        </li>
        <li>
          <Link href={"/"}>Welcome</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
