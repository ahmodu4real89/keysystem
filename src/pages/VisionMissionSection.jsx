import vision from "../assets/vision.svg";
import mission from "../assets/mission.svg";
function VisionMissionSection() {
  const cardsData = [
    {
      id: 1,
      image: vision,
      title: "Our Vision",
      description:
        "To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth.",
      logo: vision,
    },

    {
      id: 2,
      image: mission,
      title: "Our Mission",
      description:
        " We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage.",
      logo: mission,
    },
  ];

  return (
    <section className="bg-[#0C0F1F] text-white py-12 px-6 ">
      <div className="m-2 md:m-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What we Represent</h2>
          <p className="text-2xl font-extralight text-gray-300 mb-4">Our relentless pursuit of excellence is the driving force behind our success</p>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-extralight text-gray-400 mx-auto mb-4 p-4">
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the driving force behind our success. Excellence is our legacy, and
            we are proud to carry it forward. Watch the video to see how we are innovating to keep businesses on top of their games.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="bg-radial-[at_70%_25%] from-indigo-700 via-slate-900 to-slate-900 to-75%  border-2 border-solid rounded-2xl drop-shadow-cyan-500 border-[#1E2A56] p-6 w-full hover:shadow-lg "
              >
                <img src={card.image} alt={card.title} className="h-60 mx-auto object-cover mb-6" />
                <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-400 text-xl font-light">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default VisionMissionSection;
