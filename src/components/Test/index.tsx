import React, { useRef, useEffect, useState } from "react";
import "./test.css";
import { select, line, curveCardinal } from "d3";

const Test: React.FC = () => {
  const [data, setData] = useState([25, 35, 40, 10, 39, 70, 90]);
  // useRef --> https://reactjs.org/docs/hooks-reference.html#useref
  const svgRef = useRef(null);

  // useEffect --> https://reactjs.org/docs/hooks-reference.html#useeffect
  // Called once when the element renders
  useEffect(() => {
    const svg = select(svgRef.current);
    // line() needs to receive an array of coordinates
    const myLine = line<any>()
      .x((_value, index) => index * 50)
      .y(value => 150 - value).curve(curveCardinal)
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 50))}>
        Filter
      </button>
    </>
  );
};

export default Test;
