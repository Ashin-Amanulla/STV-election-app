import React,{useState} from 'react'

function Select({data}) {
    const [vote, setVote] = useState("")
    const submitVote = () => {
        console.log(vote)
        setVote("")
    }
  return (
    <>
        <select
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="department"
                value={vote}
                onChange={(e) => setVote(e.target.value)}
                placeholder="Department"
                >
                <option value="">Select candidate</option>
                {data.map(res=>{
                    return (
                        <option value={res.name} key={res.name}>{res.name}</option>  
                    )
                })}
        </select>
        <button onClick={submitVote} className="bg-[#dc668a] my-2 text-base text-gray-900 rounded-full py-4 px-4 font-bold  pointer hover:bg-pink-300">Submit vote</button>
    </>
  )
}

export default Select