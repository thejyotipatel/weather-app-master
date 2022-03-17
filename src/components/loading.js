import React from 'react'

const Loading = () => {
  return (
    <div className='mx-auto flex justify-center flex-col mt-[2rem]  '>
      <p className='flex ml-[20%]'>
        <span className='material-icons animate-spin h-5 w-5 mr-3'>
          refresh
        </span>
        Loading...
      </p>
      <br />
      <h1 className='text-main-color text-[1em]   max-w-[450px]'>
        Turn on your Location and Refresh Page
      </h1>
    </div>
  )
}

export default Loading
