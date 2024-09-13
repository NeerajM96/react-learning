import React from "react";
import ReactDOM from "react-dom/client"

const jsxHeading = (
  <h1>
    Namaste React using JSX🚀
  </h1>
)

const HeadingComponent = () =>{
  return (
    <div>
      {jsxHeading}
      <h2>Hello World</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
