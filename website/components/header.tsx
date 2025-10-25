import React from "react";
const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
function Header() {
  return (
    <div className="flex w-fit absolute top-5 justify-center items-center rounded-full bg-[#0a0a0b8e] backdrop-blur-2xl">
      <div className="flex justify-center items-center">
        {links.map((link, i) => {
          return (
            <div className="px-4 py-2" key={i}>
              <a className="hover:text-gray-700 " href={link.link}>
                {" "}
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
