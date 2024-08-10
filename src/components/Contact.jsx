import React from 'react';

const Contact = () => {
  return (
  <div className='max-w-[50rem] mx-auto my-6 p-4'>
    <form className="flex flex-col space-y-4">
  <div className="flex space-x-2">
    <input
      type="text"
      name="name"
      placeholder="Name"
      className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
  <input
    type="text"
    name="subject"
    placeholder="Subject"
    className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
  />
  <textarea
    name="message"
    placeholder="Message"
    rows="5"
    className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
  ></textarea>
  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
    Submit
  </button>
</form>
</div>
  );
};

export default Contact;
