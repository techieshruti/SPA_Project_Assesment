import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "About", "Products", "Contact"];
  return (
    <nav className="bg-slate-900 text-white px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold">
        ShopEase SPA
      </h1>

      {/* Navigation */}
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`cursor-pointer text-sm md:text-base transition
              ${
                active === item
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-slate-300 hover:text-white"
              }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
