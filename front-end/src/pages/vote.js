import Ballot from "@/Components/Ballot";
import Card from "@/Components/Card"
import React,{useState} from "react"

function Vote() {
  const [vote, setVote] = useState("");
    const president = [
        {
            name: "John",
            image: "https://mdbootstrap.com/img/new/avatars/6.jpg",
            about: "Frontend Developer"
        },
        {
            name: "Sean",
            image: "https://mdbootstrap.com/img/new/avatars/7.jpg",
            about: "Backend Developer"
        },
        {
            name: "Diana",
            image: "https://mdbootstrap.com/img/new/avatars/8.jpg",
            about: "Backend Developer"
        }
    ]
    const uuc = [
        {
            name: "John",
            image: "https://mdbootstrap.com/img/new/avatars/6.jpg",
            about: "Frontend Developer"
        },
        {
            name: "Sean",
            image: "https://mdbootstrap.com/img/new/avatars/7.jpg",
            about: "Backend Developer"
        },
        {
            name: "Diana",
            image: "https://mdbootstrap.com/img/new/avatars/8.jpg",
            about: "Backend Developer"
        }
    ]
  return (
    <div className="bg-[#FFEAEA] py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="max-w-7xl mx-auto mt-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-center bg-white mx-auto py-4 lg:w-[500px] text-gray-800">
          Upcoming election
        </h1>
        <p
          className="text-lg font-bold mb-4 text-gray-600"
          style={{ fontFamily: "Roboto Slab" }}
        >
          Don't miss out on your chance to cast your vote.Voting in the 2022 RSU
          Spring Elections open on{" "}
          <strong
            className="text-gray-900"
            style={{ fontFamily: "Roboto Slab" }}
          >
            February 27th at 10am
          </strong>{" "}
          and run through to{" "}
          <strong
            className="text-gray-900"
            style={{ fontFamily: "Roboto Slab" }}
          >
            March 3rd at 10am
          </strong>
          . If you have any questions or just want to speak to a member of our
          team about the elections, please email <a href="mailto:elections@roehampton.ac.uk" className="text-blue-500">elections@roehampton.ac.uk</a>.
        </p>
        <Card data={president} position="President"/>
      <Ballot title="Make your vote">
      <select
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="department"
              value={vote}
              onChange={(e) => setVote(e.target.value)}
              placeholder="Department"
            >
              <option value="">Select candidate</option>
              {president.map(data=>{
                  return (
                    <option value="IT">{data.name}</option>  
                )
              })}
            </select>
      </Ballot>
        <Card data={uuc} position="UUC"/>
        <Ballot title="Make your vote">
      <select
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="department"
              value={vote}
              onChange={(e) => setVote(e.target.value)}
              placeholder="Department"
            >
              <option value="">Select candidate</option>
              {uuc.map(data=>{
                  return (
                    <option value="IT">{data.name}</option>  
                )
              })}
            </select>
      </Ballot>
      </div>
    </div>
  );
}

export default Vote;
