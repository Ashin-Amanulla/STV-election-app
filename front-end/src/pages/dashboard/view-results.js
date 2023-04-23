import AdminMenu from '@/Components/AdminMenu'
import React from 'react'

function Viewresults() {
    const candidates = [
        { name: 'Candidate 1', position: 'President', votes: 500 },
        { name: 'Candidate 2', position: 'Vice President', votes: 350 },
        { name: 'Candidate 3', position: 'Secretary', votes: 200 },
        { name: 'Candidate 4', position: 'Treasurer', votes: 150 },
      ]
  return (
    <div className="flex flex-row h-screen">
    <AdminMenu />
    <div className="flex flex-col m-4">
    <h2 className="text-lg font-semibold mb-4 text-red-500 underline decoration-4">Results</h2>
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{candidate.name}</td>
              <td className="border px-4 py-2">{candidate.position}</td>
              <td className="border px-4 py-2">{candidate.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default Viewresults