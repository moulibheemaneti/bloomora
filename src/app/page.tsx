import Image from "next/image";

interface Expertise {
  title: string;
  description: string;
  iconPath: string;
}

export default function Home() {
  const ourExpertise: Expertise[] = [
    {
      title: "Web Design",
      description: "Creating visually appealing and user-friendly designs for websites.",
      iconPath: "/icons/expertise/web-design.svg",
    },
    {
      title: "Web Development",
      description: "Building responsive and high-performance websites.",
      iconPath: "/icons/expertise/web-development.svg",
    },
    {
      title: "Digital Marketing",
      description: "Promoting your brand through digital channels.",
      iconPath: "/icons/expertise/digital-marketing.svg",
    },
    {
      title: "SEO",
      description: "Optimizing your website to rank higher on search engines.",
      iconPath: "/icons/expertise/seo.svg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="px-8 md:px-32 flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Innovative Digital Solutions, Tailored For You
          </h1>
          <p className="text-xl mt-4">
            We Create Websites And Apps That Transform Your Business And Engage Your Audience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out">
              See Our Work
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-800 transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="px-8 md:px-32 py-16">
        <h2 className="text-3xl font-bold text-center">Our Expertise</h2>
        <p className="text-center mt-4">
          We offer a range of services to help you achieve the results you’re after.
        </p>
        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          {ourExpertise.map((expertise, index) => (
            <div
              key={index}
              className="group bg-[#1E1E20] rounded-lg text-center flex flex-col items-center justify-center gap-4 hover:cursor-pointer transition relative overflow-hidden hover:scale-105"
              style={{
                width: '15rem',
                height: '15rem',
                border: '2px solid',
                borderImage: 'linear-gradient(to bottom, #FF2CDF, #0014FF) 1',
              }}
            >
              {/* Default State: Icon and Title */}
              <div className="relative z-10 flex flex-col items-center transition-all duration-300 group-hover:opacity-0">
                <Image
                  src={expertise.iconPath}
                  alt={expertise.title}
                  width={96}
                  height={96}
                />
                <h3 className="text-xl font-bold mt-2">{expertise.title}</h3>
              </div>

              {/* Hover State: Title and Description with Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF2CDF] to-[#0014FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <Image
                  src={expertise.iconPath}
                  alt={expertise.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold">{expertise.title}</h3>
                <p className="mt-2 text-sm">{expertise.description}</p>
                <p className="mt-2 text-sm font-bold">Know More</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Time & Book your call */}
      <div className="px-8 md:px-32 py-16 flex gap-16 md:gap-48 justify-between">
        <div>
          <p className="mb-8">Save Time</p>
          <p className="text-lg font-semibold mb-4">Get Rapid Expert Solutions to Accelerate Your Business Growth.</p>
          <p>Focus on what matters while we handle the complexities. Book a quick consultation, and our experts will guide you through the next steps—no hassle, just results.</p>
        </div>
        <div style={{ minWidth: "30rem" }}>
          <p className="mb-8">Book Your Expert Call Now</p>
          <div className="flex gap-4 justify-between p-8 rounded-lg bg-[#1E1E20]" style={{
            border: '2px solid',
            borderImage: 'linear-gradient(to bottom, #FF2CDF, #0014FF) 1',
          }}>
            <Image
              src="/icons/expertise/seo.svg"
              alt="Consultation"
              width={96}
              height={96}
              className="rounded-full"
            />
            <div>
              <p className="mb-4">Book a 15-Minute Free Call</p>
              <p className="mb-4">Consultation Call with Shashank</p>
              <button className="px-4 py-2  text-white rounded-sm bg-purple-700 hover:bg-purple-800 transition">Book Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
