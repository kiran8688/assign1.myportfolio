import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white lg:ml-[100px]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold uppercase text-secondary relative inline-block pb-4 mb-4">
            About
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gray-300"></span>
            <span className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-10 h-[3px] bg-primary"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <img src="/img/kiran.jpg" alt="Kiran" className="w-full h-auto rounded-lg shadow-sm" />
          </div>

          <div className="w-full lg:w-2/3 pt-4 lg:pt-0">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">FULL STACK DEVELOPER</h3>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-primary mr-2 font-bold">{">"}</span>
                    <strong className="mr-2">Birthday:</strong>
                    <span>10 May 1997</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2 font-bold">{">"}</span>
                    <strong className="mr-2">Phone:</strong>
                    <span>+91 8099951768</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2 font-bold">{">"}</span>
                    <strong className="mr-2">City:</strong>
                    <span>Hyderabad, India</span>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-primary mr-2 font-bold">{">"}</span>
                    <strong className="mr-2">Age:</strong>
                    <span>24</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2 font-bold">{">"}</span>
                    <strong className="mr-2">Degree:</strong>
                    <span>graduate</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2 font-bold">{">"}</span>
                    <strong className="mr-2">Email:</strong>
                    <span>skirankumar2015@.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2 font-bold">{">"}</span>
                    <strong className="mr-2">Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
