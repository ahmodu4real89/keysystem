import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';

function BrandSection (){
  const Offering = [
    { name: 'Core Banking services', href: '#' },
    { name: 'Digital Banking & Financial Inclusion', href: '#' },
    { name: 'Online and Mobile lending solution', href: '#' },
    { name: 'Staff augmentation solution', href: '#' },
    { name: 'Internal audit solutions', href: '#' },
    { name: 'Data Warehouse', href: '#' },
    { name: 'Business intelligence', href: '#' },
    { name: 'KeySystem software testing', href: '#' },
    { name: 'Cybersecurity solution', href: '#' },
  ];

  return (
    <section className="bg-[#060423] text-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Offerings</h2>
        <p className="text-base font-extralight md:text-[24px] mb-8 leading-relaxed">
          Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored software and cybersecurity solutions drive efficiency, security,
          and growth. We empower businesses to thrive in the digital age.
        </p>
        <button className="bg-[linear-gradient(to_right,_#000080,_#4169E1,_#000080)] py-5 px-6 rounded-full border-2 border-blue-600 text-xl hover:scale-105 transition-transform duration-300">
          Learn more
        </button>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-4xl mx-auto">
          {
            Offering.map((offer) => (
              <div className="m-2" key={offer.name}>
                <div className="flex bg-[#0C0F1F] ">
                  <div className="columncorebanki_border w-full ">
                    <div className="bg-[#0C0F1F] rounded-full px-4 py-4 flex flex-col items-center justify-center text-center ">
                      <p className="text-white text-2xl font-light leading-snug">
                        {offer.name}
                      </p>
                      <FontAwesomeIcon icon={faArrowPointer} style={{ color: 'Dodgerblue', fontSize:'2em' }}/>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
     
    </section>
  );
};

export default BrandSection;