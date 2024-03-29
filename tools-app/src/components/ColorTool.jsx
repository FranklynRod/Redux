import PropTypes from 'prop-types';
import ToolHeader from './ToolHeader';
import ColorList from './ColorList';

const ColorTool = (props) => {
  
    const colorToolHeaderText = "Color Header"

  return (
    <>
     <ToolHeader headerText={colorToolHeaderText}/>
     <ColorList colors={props.colors}/>
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