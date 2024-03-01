"use client"
import { log } from 'console'
import React, { createRef, useContext, useEffect, useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";



export default function page() {
  const [task, setTask]: any = useState(() => JSON.parse(localStorage.getItem('task')) || [])
  const [mydate, setMydate]: any = useState(() => JSON.parse(localStorage.getItem('dates')) || [])
  const [times, setTimes]: any = useState(() => JSON.parse(localStorage.getItem('times')) || [])

  function handel(newtask, newDate, newTime) {

    const updatetasks = [...task, newtask]
    const updateDate = [...mydate, newDate]
    const updateTimes = [...times, newTime]
    setTask(updatetasks)
    setTimes(updateTimes)
    setMydate(updateDate)

    localStorage.setItem('task', JSON.stringify(updatetasks))
    localStorage.setItem('dates', JSON.stringify(updateDate))
    localStorage.setItem('times', JSON.stringify(updateTimes))
  }

  function remove_task(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks)
    localStorage.setItem('task', JSON.stringify(updatedTasks));
  }

  function ClearAll() {
    setTask([])
    setMydate([])
    setTimes([])
    localStorage.clear()
  }



  return (
    <main className='w-full min-h-[100vh] flex justify-center items-center text-[#f2f4f5]'>
      <section className=' w-[85%] h-[85%]  flex  *:bg-[#252525] flex-wrap md:flex-nowrap *:rounded-md '>
        <section className=' w-full md:w-[60%] my-5 md:me-2 *:overflow-hidden'>
          <ToDo tackchnge={handel} ClearAll={ClearAll}  ></ToDo>
        </section>
        <section className=' w-full md:w-[40%] my-5 md:ms-2'>
          <List task={task} dates={mydate} times={times} remove_task={remove_task}></List>
        </section>
      </section>
    </main>
  )
}


function ToDo({ tackchnge, ClearAll }) {
  const [myval, setMyval] = useState('')
  const [mydate, setMydate] = useState('')
  const [mytime, setMytime] = useState('')

  function Addpost() {
    const newTask = myval
    const newDate = mydate
    const newTime = mytime

    if (newTask === "") {
      alert("Please enter a valid input");
    } else {
      tackchnge(newTask, newDate, newTime);
      setMyval('')
    }
  }

  function Clearall() {
    setMydate('')
    setMytime('')
    setMyval('')
    ClearAll()
  }



  return (
    <section className=' w-full p-5'>
      <section className=' flex justify-center'>
        <h1 className=' text-3xl font-extrabold tex'>To-Do List Creator</h1>
      </section>

      <section className='flex *:w-1/2 *:rounded-md *:outline-none *:py-2 *:px-2 py-10 *:bg-[#f8d663] *:text-gray-700'>
        <input value={mydate} onChange={(e) => setMydate(e.target.value)} className='me-2' type="date" />
        <input value={mytime} onChange={(e) => setMytime(e.target.value)} className='ms-2' type="time" />
      </section>
      <section>
        <textarea value={myval} onChange={(e) => setMyval(e.target.value)} placeholder='what do you need done today?' name="" id="" className='bg-[#f8d663] text-gray-700 placeholder:text-gray-700 rounded-md w-full   resize-none  p-3 outline-none border-none'></textarea>
      </section>
      <section className=' flex justify-center *:bg-[#4f4f4f] *:rounded-md py-10 cursor-pointer '>
        <span className='hover:bg-gray-500  me-2 p-2' onClick={Addpost}>click to post</span>
        <span className='hover:bg-gray-500  ms-2 p-2 ' onClick={Clearall}>click to clear list</span>
      </section>
    </section>
  )
}

function List({ task, dates, times, remove_task }) {



  return (
    <section className='w-full p-5 cursor-pointer  h-[85vh] overflow-hidden ' >
      <section className=' w-full h-full  overflow-y-scroll myscroll '>
        <section className='flex justify-center'>
          <h2 className='text-3xl font-extrabold  '>List</h2>
        </section>
        <section className='flex w-full py-10  px-4   '>
          <section className=' w-full *:my-2'>
            {task.map((task, index) => (
              <>
                <section key={index} className=' w-full rounded-md p-3 bg-[#f8d663] text-gray-700  '>
                  <div className=' flex justify-between '>
                    <h2 className=' text-xl font-semibold'>{task}</h2>
                    <IoClose onClick={() => remove_task(index)} className=' flex items-center text-xl '></IoClose>

                  </div>
                  <div className=' flex  '>
                    <span className='me-2 text-gray-800 text-sm'>{dates[index]}</span>
                    <span className='ms-2 text-gray-800 text-sm'>{times[index]}</span>
                  </div>

                </section>
              </>
            ))}

          </section>
        </section>
      </section>
    </section>
  )
}

