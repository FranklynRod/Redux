import PropTypes from 'prop-types';
import ToolHeader from './ToolHeader';
import CarTable from './CarTable';

const CarTool = (props) => {
    const carToolHeaderText = "Car Tool Header"
    
    
  return (
    <>
   <ToolHeader headerText={carToolHeaderText}/>
   <CarTable cars={props.cars}/>
      
      </>
   
  );
};
CarTool.defaultProps = {
    // if the component is called and the array of colors
    // is not provided, then the default value will be used
    cars: [],
  };
  
CarTool.propTypes = {
    // if the component is called and the array of colors
    // is provided, then the array of colors must be an array
    // of objects with an id property and a name property
    cars: PropTypes.arrayOf(PropTypes.shape({
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })).isRequired,
  };

export default CarTool;
