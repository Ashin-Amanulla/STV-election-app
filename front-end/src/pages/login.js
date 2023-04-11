import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showDiv, setShowDiv] = useState(false);


  const submitEmail = () => {
    setShowDiv(!showDiv);
    console.log({ email });
    setEmail("");
   
  };
  const submitOTP = () => {
    
    console.log({ otp });
    setEmail("");
   
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-3/5">
        <h2 className="text-2xl font-bold mb-5 text-[#dc668a]">Login</h2>
        {!showDiv && <div>
          <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="bg-sky-800 inline hover:bg-sky-600 mb-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={submitEmail}
          >
            Get OTP
          </button>
        </div>}
        {showDiv && <div>
          <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="OTP">
              Enter OTP
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="OTP"
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button
            className="bg-[#dc668a] hover:bg-[#dd265e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={submitOTP}
          >
            Login
          </button>
        </div>
        }
      </div>
    </div>
  )
}

export default Login;
