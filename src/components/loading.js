import React from 'react'

const Loading = () => {
  return (
    <div className='mx-auto flex justify-center flex-col mt-[10rem]  '>
      <p className='flex ml-[20%]'>
        <span className='material-icons animate-spin h-5 w-5 mr-3'>
          refresh
        </span>
        Loading...
      </p>
      <br />
      <h1 className='text-main-color text-[24px] -ml-8'>
        Turn on your Location and Refresh Page
      </h1>
    </div>
  )
}

export default Loading
