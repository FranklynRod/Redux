import PropTypes from 'prop-types';

const CarViewRow = (props) => {
  return (
     <tr key={props.car.id}>
        <td>{props.car.make}</td> 
        <td>{props.car.model}</td> 
        <td>{props.car.year}</td> 
        <td>{props.car.color}</td>  
        <td>{props.car.price} </td>
      </tr>)
}
CarViewRow.defaultProps = {
    // if the component is called and the array of colors
    // is not provided, then the default value will be used
    cars: [],
  };
  
  CarViewRow.propTypes = {
    // if the component is called and the array of colors
    // is provided, then the array of colors must be an array
    // of objects with an id property and a name property
    car: PropTypes.arrayOf(PropTypes.shape({
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })).isRequired,
}

export default CarViewRow