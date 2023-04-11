import Card from '@/Components/Card'
import React,{useState,useEffect,Fragment} from 'react'
import { GoAlert } from "react-icons/go"
import { Dialog, Transition } from '@headlessui/react'


function Position() {
    let position = localStorage.getItem('position')
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    const President = [
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
    const Secretary = [
        {
            name: 'Maria Smith',
            desc: 'Frontend Developer',
            imageUrl: 'https://mdbootstrap.com/img/new/avatars/9.jpg'
        },
        {
            name: 'Darren',
            desc: 'Fullstack developer',
            imageUrl: 'https://mdbootstrap.com/img/new/avatars/10.jpg'
        },
        {
            name: 'Ayat Black',
            desc: 'Backend developer',
            imageUrl: 'https://mdbootstrap.com/img/new/avatars/11.jpg'
        }
    ]
    const [candidates, setCandidates] = useState([])
    const [vote, setVote] = useState([])
    if (position === 'President') {
        useEffect(() => {
            setCandidates(President)
          }, [])
    } else if (position === 'Secretary') {
        useEffect(() => {
            setCandidates(Secretary)
          }, [])
    }

    const handleCandidateClick = (name) => {
        if (vote.length === 0) {
            setVote([...vote, name])
        } else {
            let alreadyVoted = false
            vote.forEach(data => {
                if (data === name) {
                    const updatedVote = vote.filter(candidate => candidate !== name)
                    setVote(updatedVote)
                    alreadyVoted = true
                }
            })
            if (!alreadyVoted) {
                setVote([...vote, name])
            }
        }
    }

    const abstain = () => {
        setIsOpen(true)
    }

    const voteReset = () => {
        setVote([])
    }

    const voteSubmit = () => {
        confirm('Are you sure you want to submit?')
    }
    
    return (
      <div className='bg-gray-200 py-16'>
    <div className="container bg-red-200 px-6 mx-auto border-solid border-4 rounded-[20px]  border-sky-500 py-10">
      <section className="text-center lg:text-left">
        <h2 className="text-xl md:text-3xl font-bold mb-12 text-center">
          Meet the <span className="text-blue-600">{position}</span> candidates
        </h2>
    
        <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12 cursor-pointer">
        {candidates.map((candidate, index) => (
        <Card key={index} {...candidate} onCandidateClick={handleCandidateClick}/>
      ))}
        </div>
        <div className='text-center my-2'>
        <button className="bg-red-500 my-2 text-base text-white rounded-full py-4 px-4 font-bold  pointer hover:bg-red-800 mx-2 pointer" onClick={abstain}>Abstain</button>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-red-500"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You want to abstain the vote...
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex mx-2 justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </div>
        </section>
        <div className="bg-gray-100 p-4">
        <p className="text-yellow-600 font-medium">Note <GoAlert className='inline'/></p>
        <p className="text-yellow-500 text-sm">Click the candidate card to add/remove the candidate name to preference list or click the abstain button for vote abstaining.</p>
        </div>
        </div>
                    <table className="container mx-auto w-full text-left my-20">
                    <thead className="bg-orange-200">
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Prefernce no.</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {vote.map((res, index) => {
                            return (
                                <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{res}</td>
                      </tr>
                            )
                        })}
                    </tbody>
            </table>
            <div className="text-center">
            <button className="bg-orange-500 my-2 text-base text-white rounded-full py-4 px-4 font-bold  pointer hover:bg-orange-800 mx-2 pointer" onClick={voteReset}>Reset</button>
            <button className="bg-blue-500 my-2 text-base text-white rounded-full py-4 px-4 font-bold  pointer hover:bg-blue-800 mx-2 pointer" onClick={voteSubmit}>Submit</button>
            </div>
        </div>      
  )
}

export default Position