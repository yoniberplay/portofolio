import { ArrowRightIcon,SunIcon,MoonIcon } from "@heroicons/react/solid";
import React from "react";
import cv from '../documents/cvyoniber.pdf';

export default function Navbar(props) {
  return (
    <header className={`md:sticky top-0 z-50`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          href="#about"
          className={`title-font font-medium ${props.colorTheme.title} mb-4 md:mb-0`}
        >
          <a href="#about" className={` ml-3 text-xl `}>
            Yoniber
          </a>
        </div>
        <nav
          className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center`}
        >
          <a
            href="#projects"
            className={`mr-5  ${
              props.colorTheme.cond ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Past Work
          </a>
          <a
            href="#skills"
            className={`mr-5 ${
              props.colorTheme.cond ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Skills
          </a>
          <a
            href="#Contact"
            className={`mr-5 ${
              props.colorTheme.cond ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Contact
          </a>
          
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={props.ChageTheme}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              { props.colorTheme.cond ? <SunIcon className="w-6 h-6 " /> : <MoonIcon className="w-6 h-6 text-gray-900" />}
            
            </span>
          </label>
        </nav>
        <a
          // href="mailto:yoniber.encarnacion@gmail.com"
          href={cv} target={'_blank'}
          rel="noreferrer"
          className={`inline-flex  items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${
            props.colorTheme.cond ? "hover:bg-gray-700" : "hover:bg-gray-300"
          }`}
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1 " />
        </a>
      </div>
    </header>
    
  );
}
