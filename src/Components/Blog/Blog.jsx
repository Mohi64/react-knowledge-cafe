import PropTypes from 'prop-types'; 
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    // console.log(handleMarkAsRead)
   const {cover_image, title, author_image, author, 
    reading_time, posted_date, hash_tag} = blog;
    return (
        <div className='mb-20 mx-4'>
            <img className='h-96 w-full rounded-lg' src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-4'>
               <div className='flex'>
                  <img className='h-20 rounded-full w-20' src={author_image} alt="" />
                  <div className='ml-6'>
                  <h1 className='text-3xl'>{author}</h1>
                  <p>{posted_date}</p>
                  </div>
               </div>
               <div className='flex gap-1'>
                 <p>{reading_time} Mins read</p>
                <p> <button onClick={() => handleAddToBookmarks(blog)}><FaRegBookmark></FaRegBookmark> </button></p>
               </div>
            </div>
            <h3 className='text-2xl my-4'>Blog Title:{title}</h3>
            <p>
                {
                hash_tag.map((hash, idx) => <span key={idx}> <a href="#" >{hash}</a> </span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='btn border-2 p-2 mt-4 rounded-lg'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
   blog: PropTypes.object.isRequired,
   handleAddToBookmarks: PropTypes.function,
   handleMarkAsRead: PropTypes.func


}
export default Blog;