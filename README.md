# React Hooks + D3js

### Circles

`const [data, setData] = useState([25, 35, 40, 10, 39, 70, 90]`

```
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
```

### Line and Path

`const [data, setData] = useState([25, 35, 40, 10, 39, 70, 90]`

```
    const svg = select(svgRef.current);
    // line() needs to receive an array of coordinates
    const myLine = line<number>()
      .x((value, index) => index * 50)
      .y(value => 150 - value).curve(curveCardinal)
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "black");
```

### Scales

```
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
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
