import PropTypes from 'prop-types'

const Singlebook = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-gray-300 p-4 m-4 rounded-xl'>
            <h3>{title}</h3>
        </div>
    );
};
Singlebook.propTypes ={
    bookmark: PropTypes.object
}
export default Singlebook;