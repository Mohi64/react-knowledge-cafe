
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
       const [bookmarks, setBookmarks] = useState([]);
       const [readingTime, setReadingTime] = useState(0);
       
       const handleAddToBookmarks = blog =>{
        const newBookmark= [...bookmarks, blog]
        setBookmarks(newBookmark);
       }
       const handleMarkAsRead= time =>{
       const newReadingTime = readingTime + time;
       setReadingTime(newReadingTime);
      // console.log(newReadingTime)
       }
         

  return (
    <>
    <Header></Header>
    <div className='flex max-w-7xl'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
  
    <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
    </div>
     
      
     
    </>
  )
}

export default App
