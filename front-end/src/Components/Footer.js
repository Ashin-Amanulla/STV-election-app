import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 text-center">
  <div className="container mx-auto py-8 px-4 md:flex md:justify-between">
    <div className="mb-6 md:mb-0 md:w-1/2">
      <h2 className="text-lg font-bold mb-2">About Us</h2>
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus lacinia lectus, vel gravida est cursus eget.</p>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Name. All rights reserved.
    </p>
    </div>
    <div className="md:w-1/2">
      <h2 className="text-lg font-bold mb-2">Follow Us</h2>
      <div className="flex space-x-4 justify-center">
        <a href="#" className="text-gray-700 hover:text-gray-300 text-2xl"><FaFacebook /></a>
        <a href="#" className="text-gray-700 hover:text-gray-300 text-2xl"><FaTwitter /></a>
        <a href="#" className="text-gray-700 hover:text-gray-300 text-2xl"><FaInstagram /></a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer