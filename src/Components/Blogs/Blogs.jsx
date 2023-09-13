import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h3 className="text-2xl font-bold">Blogs:{blogs.length}</h3>
            {
                blogs.map(blog=><Blog  key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookmark: PropTypes.func.isRequired
    
    
}
Blogs.propTypes={
    handleMarkAsRead:PropTypes.func.isRequired
}


export default Blogs;