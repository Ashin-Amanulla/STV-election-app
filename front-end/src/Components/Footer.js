import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-white text-gray-700 text-center">
  <div class="container mx-auto py-8 px-4 md:flex md:justify-between">
    <div class="mb-6 md:mb-0 md:w-1/2">
      <h2 class="text-lg font-bold mb-2">About Us</h2>
      <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus lacinia lectus, vel gravida est cursus eget.</p>
    </div>
    <div class="md:w-1/2">
      <h2 class="text-lg font-bold mb-2">Follow Us</h2>
      <div class="flex space-x-4 justify-center">
        <a href="#" class="text-gray-700 hover:text-gray-300 text-2xl"><FaFacebook /></a>
        <a href="#" class="text-gray-700 hover:text-gray-300 text-2xl"><FaTwitter /></a>
        <a href="#" class="text-gray-700 hover:text-gray-300 text-2xl"><FaInstagram /></a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer