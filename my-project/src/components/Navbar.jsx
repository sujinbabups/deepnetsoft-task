import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white w-full z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://www.deepnetsoft.com/images/logo.png"
                            alt="Logo"
                            className="w-36 h-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className={`px-3 py-2 text-sm font-bold ${
                                    activeLink === '/'
                                        ? 'text-blue-500'
                                        : 'text-white hover:text-blue-500'
                                } transition duration-300`}
                                onClick={() => setActiveLink('HOME')}
                            >
                                HOME
                            </Link>
                            <Link
                                to="/menu"
                                className={`px-3 py-2 text-sm font-bold ${
                                    activeLink === 'MENU'
                                        ? 'text-blue-500'
                                        : 'text-white hover:text-blue-500'
                                } transition duration-300`}
                                onClick={() => setActiveLink('MENU')}
                            >
                                MENU
                            </Link>
                            <Link
                                to="/make-a-reservation"
                                className={`px-3 py-2 text-sm font-bold ${
                                    activeLink === 'MAKE A RESERVATION'
                                        ? 'text-blue-500'
                                        : 'text-white hover:text-blue-500'
                                } transition duration-300`}
                                onClick={() => setActiveLink('MAKE A RESERVATION')}
                            >
                                MAKE A RESERVATION
                            </Link>
                            <Link
                                to="/contact-us"
                                className={`px-3 py-2 text-sm font-bold ${
                                    activeLink === 'CONTACT US'
                                        ? 'text-blue-500'
                                        : 'text-white hover:text-blue-500'
                                } transition duration-300`}
                                onClick={() => setActiveLink('CONTACT US')}
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-500 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
                        <Link
                            to="/"
                            className={`block px-3 py-2 text-base font-bold ${
                                activeLink === 'HOME'
                                    ? 'text-blue-500'
                                    : 'text-white hover:text-blue-500'
                            } transition duration-300`}
                            onClick={() => {
                                setActiveLink('HOME');
                                toggleMenu();
                            }}
                        >
                            HOME
                        </Link>
                        <Link
                            to="/menu"
                            className={`block px-3 py-2 text-base font-bold ${
                                activeLink === 'MENU'
                                    ? 'text-blue-500'
                                    : 'text-white hover:text-blue-500'
                            } transition duration-300`}
                            onClick={() => {
                                setActiveLink('MENU');
                                toggleMenu();
                            }}
                        >
                            MENU
                        </Link>
                        <Link
                            to="/make-a-reservation"
                            className={`block px-3 py-2 text-base font-bold ${
                                activeLink === 'MAKE A RESERVATION'
                                    ? 'text-blue-500'
                                    : 'text-white hover:text-blue-500'
                            } transition duration-300`}
                            onClick={() => {
                                setActiveLink('MAKE A RESERVATION');
                                toggleMenu();
                            }}
                        >
                            MAKE A RESERVATION
                        </Link>
                        <Link
                            to="/contact-us"
                            className={`block px-3 py-2 text-base font-bold ${
                                activeLink === 'CONTACT US'
                                    ? 'text-blue-500'
                                    : 'text-white hover:text-blue-500'
                            } transition duration-300`}
                            onClick={() => {
                                setActiveLink('CONTACT US');
                                toggleMenu();
                            }}
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
