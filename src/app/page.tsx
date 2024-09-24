import Image from "next/image";

interface Expertise{
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
      <div className="px-8 md:px-32 flex items-center justify-center h-screen bg-black text-white">
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
              className="bg-[#1E1E20] rounded-lg text-center flex flex-col items-center justify-center gap-4 hover:cursor-pointer hover:scale-105 transition relative overflow-hidden" 
              style={{ width: '20rem', height: '20rem', border: '2px solid', borderImage: 'linear-gradient(to bottom, #FF2CDF, #0014FF) 1' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF2CDF] to-[#0014FF] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <Image src={expertise.iconPath} alt={expertise.title} width={96} height={96} className="relative z-10" />
              <h3 className="text-xl font-bold">{expertise.title}</h3>
              {/* <p className="mt-2">{expertise.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
