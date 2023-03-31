import { useState, useEffect, Fragment } from "react";
import moment from "moment";
import Link from 'next/link';
import { Dialog, Transition } from "@headlessui/react";

function Timer({ isOpen, onClose }) {
    
    const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const tomorrow = moment().add(1, "days").startOf("day");
    const diff = moment.duration(tomorrow.diff(moment()));

    const interval = setInterval(() => {
      setTimeLeft({
        hours: diff.hours(),
        minutes: diff.minutes(),
        seconds: diff.seconds(),
      });

        diff.subtract(1, "second");

        if (diff.asSeconds() <= 0) {
            clearInterval(interval);
        }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

  return (
    <>
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                  Election timer
                </Dialog.Title>
                <div className="flex flex-col items-center py-2">
                <div className="flex">
                    <div className="px-3 py-2 bg-gray-800 text-white mx-1 rounded-md">
                    {timeLeft.hours ? timeLeft.hours : "00"}
                    <span className="text-xs">Hours</span>
                    </div>
                    <div className="px-3 py-2 bg-gray-800 text-white mx-1 rounded-md">
                    {timeLeft.minutes ? timeLeft.minutes : "00"}
                    <span className="text-xs">Minutes</span>
                    </div>
                    <div className="px-3 py-2 bg-gray-800 text-white mx-1 rounded-md">
                    {timeLeft.seconds ? timeLeft.seconds : "00"}
                    <span className="text-xs">Seconds</span>
                    </div>
                </div>
                <p className="text-center text-gray-800 mt-4">
                    Time to vote before the deadline
                </p>
                </div>
                <div className="mt-4">
                <Link href='/vote'>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Go to Voting!
                  </button>
                </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
  )
}

export default Timer