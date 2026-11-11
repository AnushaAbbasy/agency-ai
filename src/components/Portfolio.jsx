const projects = [
  {
    title: "Mobile app marketing",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },
  {
    title: "Dashboard management",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Fitness app promotion",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
];

function Portfolio() {
  return (
    <section className="py-20 px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Our latest work</h2>

        <p className="text-gray-500 mt-4">
          Browse our portfolio of innovative digital projects.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md"
          >
            <img
              src={project.img}
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-500 mt-3">
                Powerful digital solutions for modern brands.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;