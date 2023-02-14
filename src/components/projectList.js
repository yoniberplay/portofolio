import React from "react";

const ProjectList = ( props ) => {

   
    return (
        <React.Fragment>
        <h1 className={`sm:text-3xl text-3xl font-bold title-font m-4  text-green-400 `}>
            {props.texto}
          </h1>
        <div className="flex flex-wrap  -m-4 ">
          {props.Projects.map((project) => (
            <a
            target="_blank" 
            rel="noopener noreferrer"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={process.env.PUBLIC_URL + project.image}
                  
                />
                <div className={`px-8 py-10 relative z-10 w-full border-4  ${props.colorTheme.cond ? 'bg-gray-900 border-gray-800' :'bg-gray-400 border-gray-300' } opacity-0 hover:opacity-100`}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className={`title-font text-lg font-medium ${props.colorTheme.cond ? 'text-white' : 'text-black'} mb-3`}>
                    {project.title}
                  </h1>
                  <p className={`leading-relaxed ${props.colorTheme.cond ? '' : 'text-gray-900'}`}>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        </React.Fragment>
    );
}


export default ProjectList;