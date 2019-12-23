import React, { useRef, useEffect, useState } from "react";
import "./test.css";
import { select } from "d3";

const Test: React.FC = () => {
  const [data, setData] = useState([25, 35, 45, 55, 65]);
  // useRef --> https://reactjs.org/docs/hooks-reference.html#useref
  const svgRef = useRef(null);

  // useEffect --> https://reactjs.org/docs/hooks-reference.html#useeffect
  // Called once when the element renders
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        // elements to create
        enter =>
          enter
            .append("circle")
            .attr("class", "new")
            .attr("stroke", "red"),
        // elements to update
        update => update.attr("class", "update")
      )
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2);
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
