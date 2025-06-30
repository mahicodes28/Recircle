import React from 'react'
import "../pages/styles.css"

const HelpCenter = () => {
  return (
    <div className="help min-h-screen flex flex-col shadow-md  items-center justify-center bg-gradient-to-br from-indigo-50 to-white py-10 px-2">
      <form className="flex flex-col items-center text-sm text-slate-800 bg-white !shadow-xl rounded-2xl !p-8 w-full max-w-xl border border-indigo-100">
        <p className="text-md bg-indigo-200 text-indigo-600 font-medium !px-3 !py-1 rounded-full !mb-2">Contact Us</p>
        <h1 className="!text-4xl md:text-4xl font-bold !py-2 text-center">Let’s Get In Touch.</h1>
        <p className="max-md:text-sm text-gray-500 !pb-8 text-center">
          Or just reach out manually to us at{" "}
          <a href="mailto@gmail.com" className="text-indigo-600 hover:underline">mailto@gmail.com</a>
        </p>

        <div className="!w-full !space-y-5">
          <div>
            <label htmlFor="name" className="!font-medium block !mb-1">Full Name</label>
            <div className="flex items-center !h-11 !pl-3 border border-slate-300 rounded-full focus-within:ring-1 focus-within:ring-indigo-400 transition-all overflow-hidden bg-slate-50">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/>
              </svg>
              <input
                type="text"
                id="name"
                className="h-full !px-2 w-full outline-none bg-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email-address" className="font-medium block !mb-1">Email Address</label>
            <div className="flex items-center !h-11 !pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden bg-slate-50">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
              </svg>
              <input
                type="email"
                id="email-address"
                className="h-full !px-2 w-full outline-none bg-transparent"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-medium block !mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full !mt-2 !p-3 bg-slate-50 border border-slate-300 rounded-xl resize-none outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 !mt-2 bg-indigo-500 hover:bg-indigo-600 text-white !py-3 w-full rounded-full transition font-semibold text-base shadow"
          >
            Submit Form
            <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default HelpCenter