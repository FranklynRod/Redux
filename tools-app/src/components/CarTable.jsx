
import PropTypes from 'prop-types';


const CarTable = (props) => {
 
  return (
    <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cars.map(car => <tr key={car.id}>
          <td>{car.make}</td> 
          <td>{car.model}</td> 
          <td>{car.year}</td> 
          <td>{car.color}</td>  
          <td>{car.price} </td>
        </tr>)}
        </tbody>
      </table>
    
  )
}
CarTable.defaultProps = {
  // if the component is called and the array of colors
  // is not provided, then the default value will be used
  cars: [],
};

CarTable.propTypes = {
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
export default CarTable