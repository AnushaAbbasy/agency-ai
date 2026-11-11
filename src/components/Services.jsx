const services = [
  "Advertising",
  "Content marketing",
  "Content writing",
  "Social media",
];

function Services() {
  return (
    <section className="py-20 px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">How can we help?</h2>

        <p className="text-gray-500 mt-4">
          From strategy to execution, we craft digital solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-3xl border hover:border-indigo-500 transition"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
              ✦
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {item}
            </h3>

            <p className="text-gray-500">
              We turn bold ideas into powerful digital solutions
              that connect and engage.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;