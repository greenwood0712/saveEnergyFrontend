import React from "react";

function Newsletter() {
  return (
    <div className="col-span-2 bg-analytic-newletter bg-cover h-full text-white p-5">
      <h1 className="text-xl font-bold">
        Subscribe to the Enterprise.nxt newsletter
      </h1>
      <p className="text-xs font-bold">
        Get weekly roundups from Enterprise.nxt, straight to your inbox
      </p>
      <div className="flex">
        <div className="newsletter w-1/2 flex flex-col justify-between">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="bg-transparent border-0 my-3 border-b-2 border-gray-400 hover:border-white"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="bg-transparent border-0 my-3 border-b-2 border-gray-400 hover:border-white"
            required
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            className="bg-transparent border-0 my-3 border-b-2 border-gray-400 hover:border-white"
            required
          />
          <select className="bg-transparent border-0 text-white my-3 border-b-2 border-gray-400 hover:border-white">
            <option value="Please Select" disabled selected>
              Please Select
            </option>
            <option value="Canada">
              Canada
            </option>
            <option value="Germany">
              Germany
            </option>
            <option value="United Kingdom">
              United Kingdom
            </option>
            <option value="United States">
              United States
            </option>
          </select>
          <p className="text-base pb-3">
            May HPE provide you with personalized communications about HPE and
            select HPE-partner products, services, offers and events?
          </p>
          <div className="flex items-center">
            <input type="checkbox" name="mail_checkbox" value="Email" />
            <p className="px-3">Email</p>
          </div>
        </div>
        <div className="w-1/2 pl-5 py-5 flex flex-col">
          <a
            className="arrow-animation w-full text-lg text-white font-bold flex justify-center items-center bg-green-500 rounded py-3 px-10 outline-none outline-offset-0 hover:outline-2 hover:outline-green-500"
            href="/blog/#"
          >
            Subscribe&nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <p className="text-xs py-5">
            For more information on how HPE manages, uses, and protects your
            information please refer to{" "}
            <a href="https://www.hpe.com/us/en/legal/privacy.html">
              HPE Privacy Statement
            </a>
            . You can always withdraw or modify your consent to receive
            marketing and sales communication from HPE. This can be done by
            using the opt-out and preference mechanism at the bottom of our
            email marketing communication or by following this{" "}
            <a href="https://www.hpe.com/ww/unsubscribe">link to unsubscribe</a>
            . If you have provided your mobile number to receive marketing
            communications, please note that roaming charges may apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
