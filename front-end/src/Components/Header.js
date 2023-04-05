import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  return (
    <header className="bg-[#dc668a] sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link href='/'>
          <Image
            className='invert'
            src="/images/roe-logo20.png"
            alt="Logo"
            width={150}
            height={150}/>
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-10 h-10 text-white">
              <path
                className={`${isOpen ? 'hidden' : 'block'}`}
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
              <path
                className={`${isOpen ? 'block' : 'hidden'}`}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-4 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <Link href="/">
          <span className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">
            Home
          </span>
        </Link>
        <Link href="/login">
          <span className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
            Log in
          </span>
        </Link>
      </nav>
    </header>

  )
}

export default Header