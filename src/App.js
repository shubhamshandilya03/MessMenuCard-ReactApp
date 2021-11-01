import React from "react";
import Restorant from "./component/Basics/Restorant";
// const App = () => {
//   return (
//     <div>
//       <h1> Hello World!!!</h1>
//     </div>
//   );
// };
//how react seeing it...
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World!!!")
//   );
// };

const App = () => {
  return (
    <>
      <Restorant />
    </>
  );
};
export default App;
