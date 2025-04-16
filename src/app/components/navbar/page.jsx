"use client";

import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

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
  { name: "Fencing History", href: "/history/fencing" },
  { name: "RSFA History", href: "/history/rsfa" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black shadow-md z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-white">RSFA</h1>
                <div className="hidden md:flex ml-10 space-x-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span className="text-white hover:text-gray-300 cursor-pointer">
                        {item.name}
                      </span>
                    </Link>
                  ))}

                  {/* Results Dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="text-white hover:text-gray-300 cursor-pointer">
                      Results
                    </Menu.Button>
                    <Menu.Items className="absolute mt-2 w-48 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none">
                      {resultsSubmenu.map((item) => (                        
                        <Menu.Item key={item.name} as={Fragment}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`block px-4 py-2 text-sm ${
                                active ? "bg-gray-100 text-black" : "text-gray-700"
                              }`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>

                  {/* History Dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="text-white hover:text-gray-300 cursor-pointer">
                      History
                    </Menu.Button>
                    <Menu.Items className="absolute mt-2 w-48 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none">
                      {historySubmenu.map((item) => (
                        <Menu.Item key={item.name} as={Fragment}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`block px-4 py-2 text-sm ${
                                active ? "bg-gray-100 text-black" : "text-gray-700"
                              }`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none">
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
          <Disclosure.Panel className="md:hidden px-4 pb-3 pt-2 space-y-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="block text-white py-2 hover:underline">{item.name}</span>
              </Link>
            ))}
            {/* Optional: You can also add dropdown items here for mobile if needed */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
