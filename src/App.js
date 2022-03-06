import Sidebar from './components/Sidebar'
import MainPage from './components/MainPage'
import Loading from './components/loading'
import { useAppContext } from './components/context'
function App() {
  const { sidebar, loading } = useAppContext()
  return (
    <div className=' text-gray-100       bg-main-color-2   mx-auto  w-full h-full '>
      <div className=' flex flex-col md:flex-row    justify-between'>
        <Sidebar />
        <MainPage />
      </div>
    </div>
  )
}

export default App
