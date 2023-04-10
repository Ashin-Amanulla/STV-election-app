function Card({ name, desc, imageUrl, onCandidateClick, btn1, btn2 }) {
  const handleCandidateClick = () => {
    onCandidateClick(name);
  };
  return (
    <div className="mb-8 lg:mb-0" onClick={handleCandidateClick}>
      <div className="relative block rounded-lg shadow-lg bg-white p-6">
        <div className="lg:flex flex-row items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 lg:pr-6">
            <img
              src={imageUrl}
              alt={name}
              className="w-full rounded-md mb-6 lg:mb-0"
            />
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
            <h5 className="text-lg font-bold mb-2">{name}</h5>
            <p className="text-gray-500 mb-4">{desc}</p>
            {btn1 && btn2 && (
              <div className="flex justify-between">
                <button className="bg-green-500 text-white rounded-full py-2 mx-2 px-4 hover:bg-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {btn1}
                </button>
                <button className="bg-red-500 text-white rounded-full py-2 px-4 hover:bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {btn2}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
