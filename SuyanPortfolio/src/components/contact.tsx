const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-[#081b29] text-white">
      <h2 className="text-center text-3xl font-bold mb-10 text-[#00abf0]">Contact Me</h2>

      {/* <form action="#" className="max-w-3xl mx-auto space-y-6"> */}
      <form action="https://api.web3forms.com/submit "className="max-w-3xl mx-auto space-y-6" method="POST">


        <input type="hidden" name="access_key" value="4062290f-aa87-4080-aafa-7d5fa4fc3a87"></input>
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            required
            className="w-full md:w-1/2 p-3 rounded-lg bg-[#0c2a3e] border border-gray-600 placeholder-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full md:w-1/2 p-3 rounded-lg bg-[#0c2a3e] border border-gray-600 placeholder-gray-300"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="tel"
            placeholder="Number"
            name="number"
            className="w-full md:w-1/2 p-3 rounded-lg bg-[#0c2a3e] border border-gray-600 placeholder-gray-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            className="w-full md:w-1/2 p-3 rounded-lg bg-[#0c2a3e] border border-gray-600 placeholder-gray-300"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Enter your message here"
          name="message"
          className="w-full p-3 rounded-lg bg-[#0c2a3e] border border-gray-600 placeholder-gray-300 resize-none"
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="bg-[#00abf0] hover:bg-[#0099d0] text-black font-semibold py-3 px-6 rounded-full transition"
        />
      </form>
    </section>
  );
};

export default Contact;
