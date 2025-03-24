import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [colors, setColors] = useState(Array(9).fill(''));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (index === 8) { 
      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[8] = 'green'; 
        return newColors;
      });

      // function to change all previously clicked boxes to orange withe the sequence
      clickOrder.forEach((clickIndex, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[clickIndex] = 'orange';
            return newColors;
          });
        }, i * 500); 
      });

      // box 9 action (change colors to orange)
      setTimeout(() => {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[8] = 'orange'; 
          return newColors;
        });
      }, clickOrder.length * 500 + 500);
    } else {
      // Change the color of clicked box to green
      const newColors = [...colors];
      newColors[index] = 'green';
      setColors(newColors);
      setClickOrder([...clickOrder, index]);
    }
  };

  const resetColors = () => {
    setColors(Array(9).fill(''));
    setClickOrder([]); 
  };

  return (
    <div>
      <div className="matrix">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button onClick={resetColors} className="reset-button">Reset</button>
    </div>
  );
};

export default Matrix;