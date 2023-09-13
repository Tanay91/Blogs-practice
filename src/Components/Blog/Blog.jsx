
import PropTypes from 'prop-types'
import cover from '../../images/2.png'
import authorImage from '../../images/girl1.jpg'
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBookmark,handleMarkAsRead}) => {
    
    const {title,reading_time,author,posted_date,hashtag}=blog
   
    return (
        <div className='border-b-8 mb-6'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex mt-7 mb-3'>
                    <img className='w-16 ' src={authorImage} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                   
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(blog)} className='ml-4 text-red-700 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-extrabold '>{title}</h2>
            <p className='mb-2'>
                {
                    hashtag.map((hash,idx)=> <span key={hash.idx}><a>#{hash}</a></span>)
                }
            </p>
            <button className='mb-7 text-purple-600 font-bold underline' onClick={()=>handleMarkAsRead(reading_time)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
   
    
}
Blog.propTypes={
    handleBookmark:PropTypes.func
    
}
Blog.propTypes={
    handleMarkAsRead:PropTypes.func
}

export default Blog;