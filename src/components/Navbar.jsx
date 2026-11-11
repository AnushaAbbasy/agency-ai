function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white">
      <div className="text-2xl font-bold text-indigo-600">
        agency.ai
      </div>

      <ul className="hidden md:flex gap-10 text-gray-600">
        <li>Services</li>
        <li>Our Work</li>
        <li>Testimonial</li>
      </ul>

      <button className="bg-indigo-600 text-white px-5 py-2 rounded-full">
        Connect →
      </button>
    </nav>
  );
}

export default Navbar;