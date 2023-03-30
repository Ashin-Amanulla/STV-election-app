function Banner() {
  return (
    <section
      className="bg-[#dc668a] bg-center bg-contain bg-no-repeat h-screen flex justify-center items-center relative"
      style={{ backgroundImage: `url('/images/election.svg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900 to-transparent opacity-50"></div>
      <div className="relative text-center">
        <h1 className="text-white text-6xl font-bold mb-6">
        &ldquo; Vote today for a better tomorrow &rdquo;
        </h1>
        <p className="text-gray-300 text-2xl mb-12">
          Leadership is not about being in charge. It's about taking care of
          those in your charge.
        </p>
        <button className="bg-white text-gray-900 rounded-full py-4 px-8 font-bold uppercase tracking-wider pointer hover:bg-gray-300">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Banner;
