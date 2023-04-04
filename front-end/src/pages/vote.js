import { useRouter } from 'next/router'

function Vote() {
  const positions = ['President', 'Vice President', 'Secretary', 'Treasurer', 'Board Member']
  const router = useRouter()
  const goto = (e) => {
    let pos = e.target.innerText
    localStorage.setItem('position', pos)
    router.push('/position')
  }
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
        <h1 className="text-2xl font-bold mb-4 text-center bg-white mx-auto py-4 text-gray-800">
          You are voting for the  following posiions
        </h1>
        <div className="flex justify-center bg-sky-200">
          <div className="w-96">
            {positions.map(pos => {
              return (
                <span
                key={pos}
                onClick={goto}
                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                {pos}
              </span>
              )
            })}
  </div>
</div>
      </div>
    </div>
  );
}

export default Vote;
