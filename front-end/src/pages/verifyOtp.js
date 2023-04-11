import {useState} from 'react'
import { useRouter } from 'next/router'

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  
  const router = useRouter()

  const submitData = () => {
    console.log({ otp });
    setOtp("")
    alert("Login successfully!")
  }
  return (
    <div className="bg-gray-100 min-h-screen bg-center bg-contain bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url('/images/otp.svg')` }}>
      <div className="bg-[#e3e3e3ad] p-10 rounded-lg shadow-md w-3/5">
        <h2 className="text-2xl font-bold mb-5 text-[#dc668a]">Verify</h2>
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
          onClick={submitData}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default VerifyOtp