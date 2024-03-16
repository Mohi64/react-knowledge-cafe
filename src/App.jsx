
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
function App() {
  

  return (
    <>
    <Header></Header>
    <div className='flex'>
    <Blogs></Blogs>
    <Bookmark></Bookmark>
    </div>
     
      
     
    </>
  )
}

export default App
