"use client"
import React from 'react'



export default function page() {
  return (
    <main className='w-full h-[100vh] flex justify-center items-center'>
      <section className=' w-[85%] h-[85%]  flex  *:bg-white'>
        <section className='w-[60%] me-2'>
          <ToDo></ToDo>
        </section>
        <section className='w-[40%] ms-2'> </section>
      </section>
    </main>
  )
}


function ToDo() {
  
  function Addpost(e:any):void{
   
    
  }

  return (
    <section className=' w-full p-5'>
      <section className=' flex justify-center'>
        <h1 className=' text-3xl font-bold'>To-Do List Creator</h1>
      </section>
      <section className='flex justify-center'>
        <p className=' text-sm py-3'>Type in what you need below and press enter to add it to the list!</p>
      </section>
      <section className='flex *:w-1/2 *:border *:border-gray-600 *:outline-none *:py-2 *:px-2 py-10'>
        <input className='me-2' type="date" />
        <input className='ms-2' type="time" />
      </section>
      <section>
        <textarea placeholder='what do you need done today?' name="" id="" className=' w-full border border-gray-600 resize-none  p-3 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-gray-600'></textarea>
      </section>
      <section className=' flex justify-center *:border *:border-gray-600 py-10 cursor-pointer '>
        <span className='hover:bg-gray-600 hover:text-white me-2 p-2' onClick={(e) => Addpost(e)}>click to post</span>
        <span className='hover:bg-gray-600 hover:text-white ms-2 p-2'>click to clear list</span>
      </section>
    </section>
  )
}