
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import css from "./navigationBar.module.css"
import logo from "../../logo/logo II.png"

const url = "http://localhost:3000/";
const logoLink = "http://localhost:3000/";

const navigation = [
  { name: 'Our Services', href: `${url}home`, current: true },
  { name: 'Stacks', href: `${url}stacks`, current: false },
  { name: 'Technologies', href: `${url}home/#technologies`, current: false },
  { name: 'Design and Planning', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

interface Props{
menuPage: number;
}

export const NavigationBar = (props:Props)=>{

//Setting the current menu page coming from props
const navigations = navigation.map((nav,index) => {
  
  if(index === props.menuPage) nav.current = true;
  else nav.current = false;
})
console.log('navigations: ', navigations);

function classNames(...classes: any[]) {
  console.log("classNames: ",classes.filter(Boolean).join(' '));
  
  return classes.filter(Boolean).join(' ')
}
    return(
    
    <Disclosure as="nav" className={css.bgBeige}>
      {({ open }) => (
        <>
          {/* Navbar */}
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">

              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Menu items */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Prevent logo from shrinking, flex-auto to place menu item at right side */}
                <div className="flex-shrink-0 flex-auto items-center">
                  <a href={logoLink}>
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </a>
                  <a href={logoLink}>
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </a>
                </div>

                {/* <div className="hidden sm:block sm:ml-6"> */}
                <div className="hidden sm:block ">

                  <div className=" ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-mrd-light-blue text-white' : `${css.textBlue}  hover:text-mrd-light-blue`,
                          'px-2 py-1 rounded text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div> 

          {/* Menu button when zooming in */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-mrd-light-blue text-white' : `${css.textBlue} hover:text-mrd-light-blue`,
                    'block px-2 py-1 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}