import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
  ];

  return (
    <nav className="bg-slate-900 text-white px-6 md:px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-xl md:text-2xl font-bold cursor-pointer"
      >
        ShopEase SPA
      </h1>

      {/* Navigation */}
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `cursor-pointer text-sm md:text-base transition
              ${
                isActive
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
