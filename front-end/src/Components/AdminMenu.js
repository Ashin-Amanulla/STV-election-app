import React from 'react'
import Link from 'next/link';
function AdminMenu() {
  return (
      <div className="bg-[#dc668a] text-gray-100 w-64 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="flex-grow">
          <ul className="p-4">
          <li className="mb-4">
            <button
            className="block py-2 px-4 text-sm hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          >
            <Link href="/dashboard" className='text-gray-100 hover:text-gray-100 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none'>
              Dashboard
            </Link>
          </button>
            </li>
            <li className="mb-4">
            <button
            className="block py-2 px-4 text-sm hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          >
            <Link href="/dashboard/add-candidate" className='text-gray-100 hover:text-gray-100 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none'>
              Add Candidate
            </Link>
          </button>
            </li>
            <li className="mb-4">
            <button
            className="block py-2 px-4 text-sm hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          >
            <Link href="/dashboard/declare-date" className='text-gray-100 hover:text-gray-100 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none'>
              Declare Date
            </Link>
          </button>
            </li>
            <li className="mb-4">
            <button
            className="block py-2 px-4 text-sm hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          >
            <Link href="/dashboard/view-results" className='text-gray-100 hover:text-gray-100 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none'>
              View Results
            </Link>
            </button>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default AdminMenu