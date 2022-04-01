import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <div className="space-y-8">
        <Navbar></Navbar>
        {children}
    </div>
  )
}
