import ReactDOM from 'react-dom/client'
import './index.css'
import CarTool from './components/CarTool.jsx'
import ColorTool from './components/ColorTool.jsx';

const cars = [
  {
      id: 1,
      make: "Toyota",
      model: "Prius", 
      year: 1992,
      color: "green",
      price: 9000,

  },
  {
      id: 2,
      make: "Jeep",
      model: "Grande", 
      year: 2012,
      color: "blue",
      price: 2000,
  }
];
const colors = [
  {id: 1,
  name: 'red',
  hexcode:'00000f',
},
  {id: 2,
  name: 'yellow',
  hexcode:'000f000',
}
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
  <CarTool cars={cars}/>
  <ColorTool colors={colors}/>
  </>
   
 
);
