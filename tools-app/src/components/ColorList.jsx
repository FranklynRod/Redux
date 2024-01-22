
import PropTypes from 'prop-types';



const ColorList = (props) => {
  return (
<ul>
        {props.colors.length === 0 && <li>No colors.</li>}
        {!props.colors.length && <li>No colors.</li>}
        {props.colors.map(color => <li key={color.id}>
          {color.name} - {color.hexcode}
        </li>)}
      </ul>
)}
ColorList.defaultProps = {
  // if the component is called and the array of colors
  // is not provided, then the default value will be used
  colors: [],
};

ColorList.propTypes = {
  // if the component is called and the array of colors
  // is provided, then the array of colors must be an array
  // of objects with an id property and a name property
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hexcode: PropTypes.string.isRequired,
  })).isRequired,
};

export default ColorList