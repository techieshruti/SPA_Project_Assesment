const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-xl font-bold">ProductExplorer</h1>

      {/* Links (UI only) */}
      <div className="flex gap-6">
        <span className="text-slate-300 hover:text-white cursor-pointer">
          Home
        </span>
        <span className="text-slate-300 hover:text-white cursor-pointer">
          Products
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
