const CarTool = () => {
  return (
    <header>
      <h1>Car Tool</h1>
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
          <tr>
            <td>1</td>
            <td>Toyota</td>
            <td>Prius</td>
            <td>1992</td>
            <td>Red</td>
            <td>18,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jeep</td>
            <td>Chereek</td>
            <td>1992</td>
            <td>Blue</td>
            <td>11,000</td>
          </tr>
        </tbody>
      </table>
    </header>
  );
};

export default CarTool;
