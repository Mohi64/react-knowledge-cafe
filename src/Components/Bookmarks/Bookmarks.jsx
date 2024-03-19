
import PropTypes from 'prop-types'
import Singlebook from '../Singlebook/Singlebook';
const Bookmark = ({bookmarks, readingTime}) => {
    return (
        <div className="md: w-1/3 bg-gray-200 rounded-md mt-2">
            <div>
                <h className="text-2xl">Spend Time on Reding:{readingTime} Mins </h>
            </div>
            <h3>BookMarked Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Singlebook key={bookmark.id} bookmark={bookmark}></Singlebook>)
            }
        </div>
    );
};
Bookmark.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmark;