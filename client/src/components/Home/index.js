import "./index.css"
// import Marquee from "react-fast-marquee";


const Home = () => {
    const features = [
        {
          id: 1,
          title: "Protect",
          description:
            "GreenEarth included in the National Collection are safeguarded from extinction and can help conservationists restore healthy, diverse populations to nature.",
          iconClass: "bi bi-shield-check",
          bgColor: "bg-green-400/20",
          iconColor: "text-green-400",
          textColor: "text-green-400",
        },
        {
          id: 2,
          title: "Educate",
          description:
            "GreenEarth Academy provides training and tools to prepare the next generation of rare plant conservationists.",
          iconClass: "bi bi-book",
          bgColor: "bg-blue-400/20",
          iconColor: "text-blue-400",
          textColor: "text-blue-400",
        },
        {
          id: 3,
          title: "Connect",
          description:
            "Contributing to the GreenEarth Academy Forum gives plant professionals the opportunity to share their knowledge and help others learn from their experience.",
          iconClass: "bi bi-people",
          bgColor: "bg-yellow-400/20",
          iconColor: "text-yellow-400",
          textColor: "text-yellow-400",
        },
      ];
      const FeatureList = () => (
        <section className="py-14 bg-[#243028]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="feature-card bg-[#1a2421] rounded-xl p-8"
                >
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-6`}
                  >
                    <i className={`${feature.iconClass} text-2xl ${feature.iconColor}`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <button
                    className={`${feature.textColor} flex items-center group`}
                  >
                    Learn More
                    <i className="bi bi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
      return(
    <div id="home" className="min-h-screen bg-[#243028]">
            <div className="hero-image h-screen flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl drop-shadow-xl font-bold mb-6 text-white">Preserving Nature's Legacy</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-white">Join us in our mission to protect and preserve plant species for future generations.</p>
                    <button className="button-hover bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
                        Contact Us
                    </button>
                </div>
            </div>
            {/* <Marquee gradient={false} speed={100} className="text-white text-2xl py-8 mt-4">
                This is a marquee scrolling text effect made easy with react-fast-marquee!<br/>
            </Marquee> */}
            {FeatureList()}
            <div className="bg-[#1a2421] container mx-auto"> 
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex flex-col justify-center items-center text-center px-3 py-10 text-gray-300 text-lg">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center font-bold text-green-500 leading-relaxed">Planting trees Together.<br/> And so much more.</h1>
                    <p className="pt-4">Over 1,008,446 trees and native shrubs have been planted in neighborhoods, parks, 
                      and natural areas across India since 1989.</p>
                      <p className="pt-6">Thanks to you.</p>
                      <p className="pt-6">Help us grow. Let’s plant trees. Together.</p>
                      <button className="mt-6 button-hover bg-green-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold">
                      HELP US GROW
                      </button>
                  </div>
                  <div>
                    <iframe className="w-full max-w-full h-[500px]"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="YouTube video"
                      frameBorder="0"
                      allowFullScreen></iframe>
                  </div>
              </div>
            </div>
    </div>
)}
export default Home