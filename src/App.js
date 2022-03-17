import Sidebar from './components/Sidebar'
import MainPage from './components/MainPage'
import Loading from './components/loading'
import { useAppContext } from './components/context'
function App() {
  const { loading } = useAppContext()
  return (
    <div className='app text-gray-100 mx-auto   '>
      <div className=' flex flex-col md:flex-row    justify-between'>
        <Sidebar />
        {loading ? <Loading /> : <MainPage />}
      </div>
    </div>
  )
}

export default App
