import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-white lg:ml-[100px]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold uppercase text-secondary relative inline-block pb-4 mb-4">
            Resume
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gray-300"></span>
            <span className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-10 h-[3px] bg-primary"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            I am interested to be a part of successful firm, which provides a challenging career and gives me an opportunity to explore my abilities, gain practical experience and make most of my professional expertise.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-secondary mb-6">Summary</h3>

            <div className="relative pl-6 border-l-2 border-primary pb-8 mb-4">
              <span className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -left-[9px] top-0"></span>
              <h4 className="text-lg font-bold text-primary uppercase mb-2">KIRAN KUMAR SINGARAM</h4>
              <p className="italic mb-4 text-gray-600">A Full stack developer</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Hyderabad, Telangana, 500055</li>
                <li>(+91) 8099951768</li>
                <li>skirankumar2015@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-secondary mb-6">Education</h3>

            <div className="relative pl-6 border-l-2 border-primary pb-8 mb-4">
              <span className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -left-[9px] top-0"></span>
              <h4 className="text-lg font-bold text-primary uppercase mb-2">Bachelor in computer science &amp; </h4>
              <h5 className="inline-block bg-background px-4 py-1 font-semibold text-gray-700 mb-2 text-sm">2015 - 2019</h5>
              <p className="italic text-gray-600">MALLA REDDY ENGINEERING COLLEGE, HYD</p>
            </div>

            <div className="relative pl-6 border-l-2 border-primary pb-8">
              <span className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -left-[9px] top-0"></span>
              <h4 className="text-lg font-bold text-primary uppercase mb-2">FULL STACK DEVELOPMENT</h4>
              <h5 className="inline-block bg-background px-4 py-1 font-semibold text-gray-700 mb-2 text-sm">2022 - Present</h5>
              <p className="italic mb-4 text-gray-600">INNOMATIC RESERCH LABS, HYDERABAD, Telangana</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Advancing myself as a full-stack Developer which includes Frontend, Backend, databases, debugging & testing.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
