export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">
        About EventHorizon
      </h1>

      <p className="max-w-7xl text-lg md:text-xl text-gray-400 leading-relaxed mb-12 text-center">
        EventHorizon is a futuristic event ticketing and event management platform 
        where technology, creativity, and cosmic energy align. Whether you are hosting 
        a concert, a conference, or a small gathering that might accidentally collapse 
        into a micro-black hole  we have got the tools to make your event unforgettable.
      </p>

      <section className="max-w-7xl space-y-6 text-gray-400">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🚀 Our Mission</h2>
          <p>
            Our mission is to make event creation and ticketing effortless, powerful, 
            and slightly space-obsessed. We focus on simplicity, speed, and reliability 
            — all wrapped in a cosmic theme that keeps things fun.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🌌 Why “EventHorizon”?</h2>
          <p>
            In astrophysics, the event horizon is the boundary of a black hole — 
            the point where what is inside and outside gets interesting. We loved the metaphor: 
            your ideas exist outside, and your fully executed events exist inside.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🧬 What You Can Do</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Create & manage events</li>
            <li>Sell tickets securely</li>
            <li>Track registrations</li>
            <li>Customize event details</li>
            <li>Monitor analytics in real-time</li>
            <li>Avoid quantum errors (mostly)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">👨‍🚀 Who We Are</h2>
          <p>
            A team of developers, designers, and mildly space-obsessed humans committed 
            to building the smoothest event platform in the galaxy.
          </p>
        </div>

        <div className="italic text-gray-400 text-center mt-10">
          “Fun Fact: We considered naming this platform Ticket Nebula, 
          but it exploded during testing.”
        </div>
      </section>
    </div>
  );
}
