import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
function Card({ name, desc, imageUrl, onCandidateClick, btn1, btn2, model }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }
  const handleCandidateClick = () => {
    onCandidateClick(name);
  };

  const clicked = () => {
    alert("clicked")
    setIsOpen(false)
  };
  return (
    <div className="mb-8 lg:mb-0" onClick={onCandidateClick && handleCandidateClick}>
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
            <p className="text-gray-500">{desc}</p>
            {model && <p className="text-blue-500 underline mb-4" onClick={openModal}>More</p>}
            {btn1 && btn2 && (
              <div className="flex justify-between">
                <button className="bg-green-500 text-white rounded-full py-2 mx-2 px-4 hover:bg-green-600" onClick={clicked}>
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
                <button className="bg-red-500 text-white rounded-full py-2 px-4 hover:bg-red-600" onClick={clicked}>
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
             <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    About candiate
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus, alias eaque at omnis praesentium excepturi veniam tempore magni rerum cum odio unde voluptates esse repellat temporibus voluptatibus, numquam molestiae?
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
