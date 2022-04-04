import Meta from "./Meta";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="space-y-8">
      <Meta></Meta>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
