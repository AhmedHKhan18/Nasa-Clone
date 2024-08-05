import { Avatar, Navbar } from "flowbite-react";
import Dropdown from "./dropdown";

export default function Nav() {
  return (
    <Navbar fluid rounded className="bg-black h-20">
        <div className="flex w-[30vw]">
        <h1 className="text-white mx-5 text-xl font-bold">Explore</h1>
        <input placeholder="Search..." className="bg-black text-white border-2 border-gray-700 px-2"/>
        </div>
        <img src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" className="mr-3 h-6 sm:h-16" alt="Flowbite React Logo" />
      <Navbar.Brand href="#">
      </Navbar.Brand>
      <Navbar.Collapse>
        <Dropdown item='News & Events'/>
        <Dropdown item='Multimedia'/>
      <a href="#" className="text-white text-2xl">NASA+</a>
      </Navbar.Collapse>
    </Navbar>
  );
}
