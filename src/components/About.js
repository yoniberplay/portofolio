import React from "react";

export default function About(props) {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${props.colorTheme.cond ? 'text-white' : 'text-black'}`}>
            Hi, I'm Yoniber.
            <br className="hidden lg:inline-block" /> I love to build amazing
            REST APIs and apps.
          </h1>
          <p className={`mb-8 leading-relaxed  ${props.colorTheme.cond ? '' : 'text-gray-900'}`}>
           Software Developer, using ASP.NET for the backend and react js for the front-end trying to apply the best practices using clean code and solid Principles for development.
          </p>
          <div className="flex justify-center">
            <a
              href="#Contact"
              className={`inline-flex ${props.colorTheme.cond ? 'text-white' : 'text-black'} bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg`}>
              Work With Me
            </a>
            <a
              href="#projects"
              className={`ml-4 inline-flex ${props.colorTheme.cond ? 'text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white' : 'text-gray-900 bg-gray-400 hover:bg-gray-300 hover:text-black'}  border-0 py-2 px-6 focus:outline-none  rounded text-lg`}>
              See My Past Work
            </a>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={process.env.PUBLIC_URL  + "/coding.svg"}
          />
        </div> */}
        <div className="grid grid-cols-2 gap-2">
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src={process.env.PUBLIC_URL  + "/images/tecnologys/javascript.svg"}
          />
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={process.env.PUBLIC_URL  + "/images/tecnologys/react.svg"}
          />
       
          <img
            className="object-cover object-center rounded"
            alt="net"
            src={process.env.PUBLIC_URL  + "/images/tecnologys/net.svg"}
          />
          
          <img
            className="object-cover object-center rounded hover:text-green-700"
            alt="sqlserver"
            src={process.env.PUBLIC_URL  + "/images/tecnologys/" + (props.colorTheme.cond ? 'sqlserver.svg' : 'sqlserverblack.svg') }
          />
           
           <img
            className="object-cover object-center rounded"
            alt="hero"
            src={process.env.PUBLIC_URL  + "/images/tecnologys/java.svg"}
          />
          <img
            className="object-cover object-center rounded hover:text-green-700"
            alt="hero"
            src={process.env.PUBLIC_URL  + "/images/tecnologys/spring.svg"}
          />
          
</div>
      </div>
    </section>
  );
}
