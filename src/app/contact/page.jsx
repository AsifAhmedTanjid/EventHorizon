export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-10 flex flex-col items-center">
      <h1 className="text-4xl  font-bold text-white mb-4">
        Contact Us
      </h1>
      <p className="max-w-2xl text-center text-gray-400 mb-12">
        Have a question, encountered a cosmic glitch, or just want to say hello?
        Send us a message — we usually respond faster than a photon.
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl w-full mb-16">
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-xl font-semibold text-white mb-2">📧 Email</h2>
          <p className="text-gray-400">
            support@eventhorizon.app <br />
            dev@eventhorizon.app
          </p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-xl font-semibold text-white mb-2">🌐 Social</h2>
          <p className="text-gray-400 space-y-1">
            Twitter (X) <br />
            Instagram <br />
            LinkedIn <br />
            GitHub
          </p>
        </div>
      </div>
      <form className="max-w-3xl w-full bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Send Us a Message
        </h2>

        <div className="space-y-5">
          <div>
            <label className="text-gray-300">Your Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-300">Your Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="text-gray-300">Your Message</label>
            <textarea
              rows="4"
              className="w-full mt-2 p-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>

          <button
            className="w-full inline-flex items-center justify-center px-6 py-2 rounded-md border border-gray-700 text-gray-200 font-medium
                         transition-colors duration-200 hover:text-blue-400 hover:border-blue-500
                         hover:cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
