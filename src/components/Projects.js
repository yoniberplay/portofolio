import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { webProjects,Uxui,Desktop } from "../data";
import ProjectList from "./projectList";

export default function Projects(props) {
  return (
    <section id="projects" className="body-font">
      <div className={`container px-5 py-10 mx-auto text-center lg:px-40 `}>
        <div className="flex flex-col w-full mb-15">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${props.colorTheme.cond ? 'text-white' : 'text-black'}`}>
            Apps I've Built
          </h1>
          <p className={`lg:w-2/3 mx-auto leading-relaxed text-lg mb-22 ${props.colorTheme.cond ? '' : 'text-gray-900'}`}>
          I have worked on more than 10 projects, oriented to the Backend, Desktop, UX/UI of the user.
          </p>
        </div>
        <ProjectList colorTheme={props.colorTheme} texto='Web' Projects={webProjects} />
        <ProjectList colorTheme={props.colorTheme} texto='Desktop' Projects={Desktop} />
        <ProjectList colorTheme={props.colorTheme} texto='UX/UI' Projects={Uxui} />
      </div>
    </section>
  );
}
