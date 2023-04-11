import {useState} from 'react'

import AdminMenu from '@/Components/AdminMenu';
import Card from '@/Components/Card';
import Login from './login';
function Dashboard() {


    const candidates = [
        {
            name: 'Maria Smith',
            desc: 'Frontend Developer',
            imageUrl: 'https://mdbootstrap.com/img/new/avatars/6.jpg'
        },
        {
            name: 'Darren',
            desc: 'Fullstack developer',
            imageUrl: 'https://mdbootstrap.com/img/new/avatars/7.jpg'
        },
        {
            name: 'Ayat Black',
            desc: 'Backend developer',
            imageUrl: 'https://mdbootstrap.com/img/new/avatars/8.jpg'
        }
    ]
    const [admin, setAdmin] = useState(true)
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  return (
    <>
          {admin ? 
              <div className="flex flex-row h-full lg:h-screen"> <AdminMenu/>
              <div className="flex-grow bg-gray-100 p-4">
                <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                <p className="mb-4">Welcome to the Admin Dashboard</p>
                <h2 className="text-lg font-semibold mb-4 text-red-500 underline decoration-4">Candidate requests</h2>
                <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12 cursor-pointer">
                {candidates.map((candidate, index) => (
                    <Card key={index} {...candidate} btn1="Accept" btn2="Reject" model={openModal} />
              ))}
                </div>
              </div>
              </div> :
              <Login />
        }
    </>
  )
}

export default Dashboard