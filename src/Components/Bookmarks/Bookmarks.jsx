import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 text-center bg-slate-300 mt-8'>
            <div>
                <h3 className='text-4xl font-extrabold'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className='text-3xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.object.isRequired
    
    
}
Bookmarks.propTypes={
    readingTime:PropTypes.object.isRequired
}
export default Bookmarks;