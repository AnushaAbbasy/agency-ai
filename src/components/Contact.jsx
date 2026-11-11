function Contact() {
    const onSubmit = async (event) => {
         event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "15da759f-d754-4703-bf8c-3a25a1987d2");


    try {
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thank You foe Your Submission.')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
        
    } catch (error) {
        toast.error(error.message)
    }
    
    }
  return (
    <section className="py-20 px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Reach out to us
        </h2>

        <p className="text-gray-500 mt-4">
          Ready to grow your brand? Let's connect.
        </p>
      </div>

      <form onSubmit={onSubmit} className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your name"
            className="border p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Your email"
            className="border p-4 rounded-xl outline-none"
          />

        </div>

        <textarea
          placeholder="Your message"
          rows="6"
          className="border p-4 rounded-xl outline-none w-full mt-6"
        ></textarea>

        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full mt-6">
          Submit →
        </button>
      </form>
    </section>
  );
}

export default Contact;