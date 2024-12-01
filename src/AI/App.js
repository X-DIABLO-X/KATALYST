import React from "react";
import Particle from "./Particle";
import "./App.css";

const App = () => {
  return (
    <>
    <Particle />
    <div id="webcrumbs">
      <div className="w-full h-full min-h-[700px] bg-black text-neutral-50 flex flex-col items-center justify-center relative shadow-lg">
        <header classNamefull="absolute top-0 left-0 w-[80px] h-full bg-neutral-800 flex flex-col items-center py-4">
          <div className="mt-auto mb-4">
          </div>
        </header>
        <main className="flex flex-col items-center justify-center px-4">
          <h1 className="text-[28px] font-title mb-8">What can I help you with?</h1>
          <div className="bg-neutral-800 w-full max-w-[680px] rounded-md p-4 text-neutral-400">
            {/* <p className="text-sm mb-4 flex justify-between">
              <span>You have 1 message remaining today.</span>
              <a href="#"><span className="text-primary-500 hover:underline">Upgrade Plan</span></a>
            </p> */}
            <div className="flex items-center bg-neutral-900 rounded-md px-3 py-2 mb-4">
              <span className="material-symbols-outlined mr-3 text-neutral-500">edit</span>
              <input
                type="text"
                placeholder="Ask katalyst a question..."
                className="flex-grow bg-transparent text-neutral-50 outline-none"
              />
              <button className="w-[30px] h-[30px] flex items-center justify-center bg-primary-500 text-neutral-50 rounded-full ml-3">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <button className="flex items-center gap-3 text-neutral-200 hover:bg-neutral-600 bg-neutral-700 px-4 py-2 rounded-md mb-4">
              <span className="material-symbols-outlined">attach_file</span> <span>+ Project</span>
            </button>
            <div className="flex flex-wrap gap-2">
              {["Setup a Coffee Shop!!", "Start a ecommerce business?", "I want to create an AI model from scratch"].map(
                (question, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-neutral-700 rounded-full text-neutral-50 hover:bg-neutral-600 text-sm"
                  >
                    {question}
                  </button>
                )
              )}
            </div>
          </div>
        </main>
        <footer className="absolute bottom-4 text-neutral-500 text-sm flex gap-4">
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Enterprise</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">katalyst</a>
        </footer>
      </div>
    </div>
  </>
  )
}

export default App;
