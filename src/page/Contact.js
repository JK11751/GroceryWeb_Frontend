import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="flex flex-wrap">
      {/* Our Contacts */}
      <div className="flex-1">
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h3 className="mb-4 text-xl tracking-tight font-bold text-left text-gray-900 dark:text-white">
            Our Contacts
          </h3>
          <div>
            <ul className="ps-0">
              <li class="mb-3 flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-300">
                <AiOutlineHome class="text-lg font-medium text-gray-900 dark:text-gray-300" />
                <address class="mb-0">Location</address>
              </li>
              <li class="mb-3 flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-300">
                <BiPhoneCall className="fs-5" />
                <a href="tel:+2540000000">+2540000000</a>
              </li>
              <li class="mb-3 flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-300">
                <AiOutlineMail className="fs-5" />
                <a href="mailto:navdeepdahiya753@gmail.com">
                  example@gmail.com
                </a>
              </li>
              <li class="mb-3 flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-300">
                <BiInfoCircle className="fs-5" />
                <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Leave us a message */}
      <div className="flex-1">
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-xl tracking-tight font-bold text-left text-gray-900 dark:text-white">
            Leave us a message
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Want to leave us a message, suggestion or comment? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enter full name
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enter email address
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Type the message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
