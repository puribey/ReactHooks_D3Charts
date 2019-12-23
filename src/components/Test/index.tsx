import React, { useRef, useEffect } from "react";
import "./test.css";

const Test: React.FC = () => {
  // useRef --> https://reactjs.org/docs/hooks-reference.html#useref
  const svg1Ref = useRef(null);

  // useEffect --> https://reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
    console.log(svg1Ref);
  }, []);

  return (
    <>
      <svg ref={svg1Ref}></svg>
    </>
  );
};

export default Test;
