import { FC } from 'react';

interface NavbarProps {
  title: string;
}

const Navbar: FC<NavbarProps> = ({ title }) => {
  return (
    <nav id="nav" className="bg-gradient-to-b from-neutral-900 to-transparent border-gray-200 lg:px-4 dark:bg-gray-800 lg:min-h-[22vh] flex items-center fixed z-[2] w-full">
      <div className="xl:container w-full xl:w-[80%] pt-4 md:pt-4 lg:pt-0  lg:px-8 xl:px-14 lg:mx-auto flex flex-wrap justify-between items-center">
        <a href="https://flowbite.com" className="flex items-center py-2">
          <h1 className="self-center text-3xl lg:text-4xl whitespace-nowrap text-white md:pl-2">{title}</h1>
        </a>
        <div className="flex items-center lg:order-2 px-2">
          <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center text-sm text-gray-500 lg:hidden hover:bg-transparent focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="mobile-menu-2" aria-expanded="false">
            <svg className="w-9 h-9" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg className="hidden w-9 h-9" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden justify-between items-center w-full h-full lg:flex lg:w-auto lg:order-2 py-20 lg:p-0" id="mobile-menu-2">
          <div className="relative lg:hidden my-5 lg:my-0">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-transparent border-transparent border-b-white sm:text-md focus:border-b-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-b-blue-500" placeholder="Search..." />
          </div>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm">
            <li>
              <a href="#" className="block text-xl py-2 my-5 lg:my-0 text-white bg-transparent text-center dark:text-white" aria-current="page">Past Trials</a>
            </li>
            <li>
              <a href="#" className="block text-xl py-2 my-5 lg:my-0 text-white bg-transparent text-center dark:text-white" aria-current="page">How it works?</a>
            </li>
            <li>
              <a href="#" className="block text-xl py-2 my-5 lg:my-0 text-white bg-transparent text-center dark:text-white" aria-current="page">Login / Sign Up</a>
            </li>
            <li>
              <button type="button" className="hidden lg:block">
                <span className="sr-only">Open search</span>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;