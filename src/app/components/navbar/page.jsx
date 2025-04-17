"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

const resultsSubmenu = [
  { name: "State Result", href: "/results/state" },
  { name: "National Result", href: "/results/national" },
  { name: "International Result", href: "/results/international" },
];

const historySubmenu = [
  { name: "Fencing History", href: "/fencing-history" },
  { name: "RSFA History", href: "/rsfa-history" },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <Disclosure as="nav" className="bg-black shadow-md sticky top-0 z-[100]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <span className="flex items-center">
                    <span className="text-xl font-bold text-white hover:text-gray-300 transition duration-150">RSFA</span>
                  </span>
                </Link>
                <div className="hidden md:flex ml-10 space-x-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span className={`text-white hover:text-gray-300 cursor-pointer transition duration-150 py-2 px-1 border-b-2 ${
                        pathname === item.href ? "border-white" : "border-transparent"
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  ))}

                  {/* Results Dropdown */}
                  <Menu as="div" className="relative">
                    {({ open: menuOpen }) => (
                      <>
                        <Menu.Button className={`text-white hover:text-gray-300 cursor-pointer transition duration-150 flex items-center py-2 px-1 border-b-2 ${
                          pathname.startsWith('/results') ? "border-white" : "border-transparent"
                        }`}>
                          Results
                          <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute mt-2 w-48 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-[200] focus:outline-none py-1">
                            {resultsSubmenu.map((item) => (                        
                              <Menu.Item key={item.name} as={Fragment}>
                                {({ active }) => (
                                  <Link
                                    href={item.href}
                                    className={`block px-4 py-2 text-sm ${
                                      active ? "bg-gray-100 text-black" : "text-gray-700"
                                    } ${pathname === item.href ? "font-medium" : ""}`}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>

                  {/* History Dropdown */}
                  <Menu as="div" className="relative">
                    {({ open: menuOpen }) => (
                      <>
                        <Menu.Button className={`text-white hover:text-gray-300 cursor-pointer transition duration-150 flex items-center py-2 px-1 border-b-2 ${
                          pathname.includes('history') ? "border-white" : "border-transparent"
                        }`}>
                          History
                          <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute mt-2 w-48 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-[200] focus:outline-none py-1">
                            {historySubmenu.map((item) => (
                              <Menu.Item key={item.name} as={Fragment}>
                                {({ active }) => (
                                  <Link
                                    href={item.href}
                                    className={`block px-4 py-2 text-sm ${
                                      active ? "bg-gray-100 text-black" : "text-gray-700"
                                    } ${pathname === item.href ? "font-medium" : ""}`}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none transition duration-150">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden px-4 pb-3 pt-2 space-y-1 bg-gray-900 z-[150]">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className={`block py-2 px-3 text-base rounded-md ${
                    pathname === item.href 
                      ? "bg-gray-800 text-white" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}>
                    {item.name}
                  </span>
                </Link>
              ))}
              
              {/* Mobile Results Menu */}
              <Disclosure>
                {({ open: subOpen }) => (
                  <>
                    <Disclosure.Button className={`flex w-full justify-between rounded-md px-3 py-2 text-left text-base ${
                      pathname.startsWith('/results')
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}>
                      <span>Results</span>
                      <ChevronDownIcon
                        className={`${
                          subOpen ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-1 space-y-1">
                      {resultsSubmenu.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <span className={`block rounded-md py-2 pl-3 pr-4 text-sm ${
                            pathname === item.href
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-700 hover:text-white"
                          }`}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              
              {/* Mobile History Menu */}
              <Disclosure>
                {({ open: subOpen }) => (
                  <>
                    <Disclosure.Button className={`flex w-full justify-between rounded-md px-3 py-2 text-left text-base ${
                      pathname.includes('history')
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}>
                      <span>History</span>
                      <ChevronDownIcon
                        className={`${
                          subOpen ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-1 space-y-1">
                      {historySubmenu.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <span className={`block rounded-md py-2 pl-3 pr-4 text-sm ${
                            pathname === item.href
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-700 hover:text-white"
                          }`}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}