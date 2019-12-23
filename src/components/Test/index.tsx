import React, { useRef, useEffect, useState } from "react";
import "./test.css";
import { select, line, curveCardinal, scaleLinear } from "d3";

const Test: React.FC = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  // useRef --> https://reactjs.org/docs/hooks-reference.html#useref
  const svgRef = useRef(null);

  // useEffect --> https://reactjs.org/docs/hooks-reference.html#useeffect
  // Called once when the element renders
  useEffect(() => {
    const svg = select(svgRef.current);

    // xScale which accepts input value between 0 and 6 (the domain) and maps it to output between 0 and 300 (the range)
    // domain() refers to the actual info you get and range() the space you have for the render
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    // line() needs to receive an array of coordinates
    // generates the d attr inside a path element 
    const myLine = line<number>()
      .x((_value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}>
        <g className="x-axis" />
      </svg>
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
