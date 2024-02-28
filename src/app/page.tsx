"use client"
import { log } from 'console'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { createContext } from 'vm'


const myContext = createContext()
export default function page() {
  const [x, setx] = useState([])


  function handel(newtask) {
    setx(newtask)
  }

  return (
    <main className='w-full h-[100vh] flex justify-center items-center'>
      <section className=' w-[85%] h-[85%]  flex  *:bg-white'>
        <section className='w-[60%] me-2'>
          <ToDo tackchnge={handel}></ToDo>
        </section>
        <section className='w-[40%] ms-2'>
          <List mydata={x}></List>
        </section>
      </section>
    </main>
  )
}


function ToDo({ tackchnge }) {
  const mytask: string = useRef()
  const [myval, setMyval] = useState([])
  function Addpost(e: any): void {
    const newTask=mytask.current.value
    setMyval(preval=>[...preval,newTask])
    tackchnge([...myval,newTask])
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
        <input className='me-2' type="date" />
        <input className='ms-2' type="time" />
      </section>
      <section>
        <textarea ref={mytask} placeholder='what do you need done today?' name="" id="" className=' w-full border border-gray-600 resize-none  p-3 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-gray-600'></textarea>
      </section>
      <section className=' flex justify-center *:border *:border-gray-600 py-10 cursor-pointer '>
        <span className='hover:bg-gray-600 hover:text-white me-2 p-2' onClick={(e) => Addpost(e)}>click to post</span>
        <span className='hover:bg-gray-600 hover:text-white ms-2 p-2'>click to clear list</span>
      </section>
    </section>
  )
}

function List({ mydata }) {
  const [task, setTask] = useState([''])
  useEffect(() => {
    setTask(mydata)
  }, [mydata])
 return (
    <section className=' w-full p-5'>
      <section className=' flex justify-center'>
        <h2 className=' text-3xl font-extrabold text-[#474747]'>List</h2>
      </section>
      <section>
        <section >
          {task.map((val)=>{
            return(
              <section>
                <h2>{val}</h2>
              </section>
            )
          })}
        </section>
      </section>
    </section>
  )
}