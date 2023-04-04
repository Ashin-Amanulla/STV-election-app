import Card from '@/Components/Card'
import React,{useState,useEffect} from 'react'
import { GoAlert } from "react-icons/go"

function Position() {
    let position = localStorage.getItem('position')
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
        setVote([...vote, name])
        console.log(...vote)
    }

    const abstain = () => {
        setVote(['abstain'])
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
        </div>
        </section>
        <div className="bg-gray-100 p-4">
        <p className="text-yellow-600 font-medium">Note <GoAlert className='inline'/></p>
        <p className="text-yellow-500 text-sm">Click the candidate card to add the candidate name to preference list or click the abstain button for vote abstaining.</p>
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
            <button className="bg-blue-500 my-2 text-base text-white rounded-full py-4 px-4 font-bold  pointer hover:bg-blue-800 mx-2 pointer" onClick={voteSubmit}>Submit</button>
            </div>
        </div>      
  )
}

export default Position