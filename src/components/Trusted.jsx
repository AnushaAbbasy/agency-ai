function Trusted() {
  const logos = ["Google", "Microsoft", "Zoom", "Slack", "Spotify"];

  return (
    <section className="py-20 text-center">
      <p className="text-gray-400 uppercase tracking-widest text-sm mb-10">
        Trusted by leading companies
      </p>

      <div className="flex justify-center gap-12 flex-wrap">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="text-gray-500 font-semibold text-lg"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trusted;