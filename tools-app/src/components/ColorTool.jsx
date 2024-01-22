import PropTypes from 'prop-types';

const ColorTool = (props) => {
  
    
  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.length === 0 && <li>No colors.</li>}
        {!props.colors.length && <li>No colors.</li>}
        {props.colors.map(color => <li key={color.id}>
          {color.name} - {color.hexcode}
        </li>)}
      </ul>
    </>
  );
}
ColorTool.defaultProps = {
  // if the component is called and the array of colors
  // is not provided, then the default value will be used
  colors: [],
};

ColorTool.propTypes = {
  // if the component is called and the array of colors
  // is provided, then the array of colors must be an array
  // of objects with an id property and a name property
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hexcode: PropTypes.string.isRequired,
  })).isRequired,
};
export default ColorTool