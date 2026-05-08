"use client"

import Image from "next/image";
import { useState } from "react";
import StarBackground from "./component/StarBackground";
import confetti from "canvas-confetti";

export default function Home() {

  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const [fourthModal, setFourthModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const milestones = [
    {
      date: '23rd march 2026', 
      event: 'We matched by our friend',
      image: '/picts/icons8-phone-50.png',
    },
    {
      date: '4th april 2026', 
      event: 'First time we met and our first date',
      image: '/picts/icons8-ramen-50.png',
    },
    {
      date: '11th april 2026', 
      event: 'Our second competitive date',
      image: '/picts/icons8-badminton-50.png',
    },
    {
      date: '25th april 2026', 
      event: 'I slept over at your place for the first time and we made cheese "fudge"',
      image: '/picts/icons8-cake-50.png', 
    },
    {
      date: '30th april 2026', 
      event: 'I slept over at your place again but longer and took the first pict together',
      image: '/picts/icons8-photo-50.png',
    },
    {
      date: 'Random time', 
      event: 'Call when I am on my way home'
      ,image: '/picts/icons8-calling-64.png',
    },
    {
      date: 'Now', 
      event: 'Mystery event',
      image: '/picts/icons8-question-50.png',
    },
  ]

  const last_milestone = milestones.length - 1;

  const handleClick = (answer:string) => {
    if(answer == "NO"){
      setErrorMessage("You have to Accept");
      setFirstModal (true);
    }
    if(answer == "YES"){
      setErrorMessage("Awwww Are you sure?");
      setFirstModal (true);
    }
  }

   const handleClick2 = (answer:string) => {
    if(answer == "Yes"){
      setErrorMessage("Awww are you sure?");
      setFirstModal (false);
      setSecondModal (true);
    }
    if(answer == "YES"){
      setErrorMessage("Awww are you sure?");
      setFirstModal (false);
      setSecondModal(false);
      setThirdModal(true);
    }
  }

   const handleClick3 = (answer:string) => {
    if(answer == "YES"){
      setErrorMessage("No Take Backsies");
      setSecondModal(false);
      setThirdModal (false);
      setFourthModal(true);
    }
    if(answer == "YES"){
      setErrorMessage("No Take Backsies");
      setSecondModal(false);
      setThirdModal (false);
      setFourthModal(true);

    }
  }

  const handleClick4 = (answer:string) => {
    if(answer == "YES"){
      setErrorMessage("No Take Backsies");
      setFourthModal (false);

      confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ffaabb', '#ffffff'] 
    });
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-black items-center justify-center overflow-y-auto p-4">
      <StarBackground/>
      <div className="w-full max-w-md mt-12 space-y-8 px-6">
        {milestones.map((item, index) => {
          let alignment = "justify-start";
          if (index % 2 !== 0) {
            alignment = "justify-end";
          }
          return (
          <div 
            key={index} 
            className={`flex w-full p-2 ${alignment}`}
          >
            <div className="max-w-[80%] p-4 border border-zinc-800 rounded-lg bg-zinc-900/50">
              <span className="text-red-300">{item.date}</span>
              <p className="text-white">{item.event}</p>
              <Image 
              className="" 
              src={item.image!} 
              alt={item.event}
              width={55}
              height={55}
              />
                
            </div>
          </div>
        )})}
      </div>

      <div className="flex w-[60%] p-2 py-4 border border-zinc-800 rounded-lg bg-zinc-900/50 mt-10 items-center justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center align-middle items-center text-white">
              Do you want to <span className="text-red-300 ml-1">continue <span className="text-white"> our story?</span></span>
              <div className="flex flex-row space-x-5">
                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick('YES')}
                >
                  Yes!
                </button>

                <button 
                  className="flex p-3 rounded-lg bg-red-600 mt-10 items-center justify-center"
                  onClick={() => handleClick('NO')}
                >
                  No!
                </button>

              </div>
            </div>
          </div>
      </div>

      {firstModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
          <div className="w-full max-w-sm p-6 border border-zinc-800 rounded-2xl bg-zinc-900 shadow-2xl flex flex-col items-center text-center">
            <div className="flex flex-col justify-center align-middle items-center text-white">
              <span className="text-white">{errorMessage}</span>
              <div className="flex flex-row space-x-5">
                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick2('Yes')}
                >
                  Yes!
                </button>

                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick2('YES')}
                >
                  YES!
                </button>

              </div>
            </div>
          </div>
      </div>
      )}

      {secondModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
          <div className="w-full max-w-sm p-6 border border-zinc-800 rounded-2xl bg-zinc-900 shadow-2xl flex flex-col items-center text-center">
            <div className="flex flex-col justify-center align-middle items-center text-white">
              <span className="text-white">{errorMessage}</span>
              <div className="flex flex-row space-x-5">
                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick3('YES')}
                >
                  YES!
                </button>

                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick3('YES')}
                >
                  YES!
                </button>

              </div>
            </div>
          </div>
      </div>
      )}

      {thirdModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
          <div className="w-full max-w-sm p-6 border border-zinc-800 rounded-2xl bg-zinc-900 shadow-2xl flex flex-col items-center text-center">
            <div className="flex flex-col justify-center align-middle items-center text-white">
              <span className="text-white">{errorMessage}</span>
              <div className="flex flex-row space-x-5">
                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick3('YES')}
                >
                  YES!
                </button>

                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick3('YES')}
                >
                  YES!
                </button>

              </div>
            </div>
          </div>
      </div>
      )}

      {fourthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
          <div className="w-full max-w-sm p-6 border border-zinc-800 rounded-2xl bg-zinc-900 shadow-2xl flex flex-col items-center text-center">
            <div className="flex flex-col justify-center align-middle items-center text-white">
              <span className="text-white">{errorMessage}</span>
              <div className="flex flex-row space-x-5">
                <button 
                  className="flex p-3 rounded-lg bg-green-600 mt-10 items-center justify-center"
                  onClick={() => handleClick4('YES')}
                >
                  YES!
                </button>

              </div>
            </div>
          </div>
      </div>
      )}
    </div>
  );
}
