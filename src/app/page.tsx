"use client"
import { log } from 'console'
import React, { createRef, useContext, useEffect, useRef, useState } from 'react'
import { createContext } from 'vm'


export default function page() {
  const [task, setTask] = useState([])
  const [mydate, setMydate] = useState([])
  const [times,setTimes]=useState([])

  function handel(newtask, newDate,newTime) {
    setTask([...task, newtask])
    setMydate([...mydate, newDate])
    setTimes([...times,newTime])


  }

  return (
    <main className='w-full h-[100vh] flex justify-center items-center'>
      <section className=' w-[85%] h-[85%]  flex  *:bg-white'>
        <section className='w-[60%] me-2'>
          <ToDo tackchnge={handel} ></ToDo>
        </section>
        <section className='w-[40%] ms-2'>
          <List task={task} dates={mydate} times={times}></List>
        </section>
      </section>
    </main>
  )
}


function ToDo({ tackchnge }) {
  const [myval, setMyval] = useState('')
  const [mydate, setMydate] = useState('')
  const [mytime,setMytime]=useState('')

  function Addpost() {
    const newTask = myval
    const newDate = mydate
    const newTime=mytime
    tackchnge(newTask, newDate,newTime);
    setMydate('')
    setMyval('')
    setMytime('')


  }


  return (
    <section className=' w-full p-5'>
      <section className=' flex justify-center'>
        <h1 className=' text-3xl font-extrabold text-[#474747]'>To-Do List Creator</h1>
      </section>
      <section className='flex justify-center'>
        <p className=' text-sm py-3'>Type in what you need below and press enter to add it to the list!</p>
      </section>
      <section className='flex *:w-1/2 *:border *:border-gray-600 *:outline-none *:py-2 *:px-2 py-10'>
        <input value={mydate} onChange={(e) => setMydate(e.target.value)} className='me-2' type="date" />
        <input value={mytime} onChange={(e)=>setMytime(e.target.value)} className='ms-2' type="time" />
      </section>
      <section>
        <textarea value={myval} onChange={(e) => setMyval(e.target.value)} placeholder='what do you need done today?' name="" id="" className=' w-full border border-gray-600 resize-none  p-3 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-gray-600'></textarea>
      </section>
      <section className=' flex justify-center *:border *:border-gray-600 py-10 cursor-pointer '>
        <span className='hover:bg-gray-600 hover:text-white me-2 p-2' onClick={Addpost}>click to post</span>
        <span className='hover:bg-gray-600 hover:text-white ms-2 p-2'>click to clear list</span>
      </section>
    </section>
  )
}

function List({ task, dates,times }) {

  return (
    <section className='w-full p-5'>
      <section className='flex justify-center'>
        <h2 className='text-3xl font-extrabold text-[#474747]'>List</h2>
      </section>
      <section className='flex *:w-1/2 justify-between '>
        <section>
          {task.map((task, index) => (
            <>
              <section key={index}>
                <h2>{task}</h2>
                <span>{dates[index]}</span>
                <span>{times[index]}</span>

              </section>
            </>
          ))}

        </section>
      </section>
    </section>
  )
}

