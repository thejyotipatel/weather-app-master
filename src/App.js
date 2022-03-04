import Sidebar from './components/Sidebar'
import MainPage from './components/MainPage'
function App() {
  return (
    <div className=' text-gray-100  max-w-[2100px]     bg-main-color-2 grid mx-auto '>
      <div
        // className='grid sm:grid-cols-2 grid-cols-1   w-[100%] mx-auto '
        // className='grid gr '

        style={{
          display: 'grid',
          gridTemplateColumns: '25% auto',
          justifyContent: 'stretch',
          height: '100%',
          // paddingBottom: '20px',
        }}
      >
        <Sidebar />
        <MainPage />
      </div>
    </div>
  )
}

export default App
