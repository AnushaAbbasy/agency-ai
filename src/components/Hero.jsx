function Hero() {
  return (
    <section className="text-center py-20 px-5">
      <p className="text-gray-500 mb-4">
        Trusted by 10K+ people
      </p>

      <h1 className="text-6xl font-bold leading-tight max-w-4xl mx-auto">
        Turning imagination into
        <span className="text-indigo-600"> digital impact.</span>
      </h1>

      <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
        Creating meaningful connections and turning big ideas
        into interactive digital experiences.
      </p>

      <div className="mt-14 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt=""
          className="rounded-3xl shadow-2xl w-[850px] h-[450px] object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;