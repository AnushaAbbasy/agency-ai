function Footer() {
  return (
    <footer className="bg-white px-10 py-16 mt-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">
            agency.ai
          </h2>

          <p className="text-gray-500 mt-4 max-w-md">
            From strategy to execution, we craft digital
            solutions that move businesses forward.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Subscribe to our newsletter
          </h3>

          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded-xl w-full"
            />

            <button className="bg-indigo-600 text-white px-6 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-gray-400 text-sm">
        Copyright 2025 © agency.ai
      </div>
    </footer>
  );
}

export default Footer;