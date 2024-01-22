import PropTypes from 'prop-types';

const ToolHeader = (props) => {
  return (
    <header>
    <h1>{props.headerText}</h1>
  </header>
  )
}
  
  ToolHeader.propTypes = {
    // if the component is called and the array of colors
    // is provided, then the array of colors must be an array
    // of objects with an id property and a name property
    headerText: PropTypes.arrayOf(PropTypes.shape({
        headerText: PropTypes.string.isRequired,
    })).isRequired,
  };

export default ToolHeader