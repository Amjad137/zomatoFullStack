// import React from "react";
// import NavBar from "../Components/NavBar/NavBar.components";
// import FoodTab from "../Components/FoodTab/FoodTab.components";
// const HomeLayout = (Component) => {
//   return (props) => {
//     return (
//       <>
//         <div className="container mx-auto">
//           <NavBar />
//           <Component {...props} />
//           <FoodTab />
//         </div>
//       </>
//     );
//   };
// };

// export default HomeLayout;

import React from "react";
import NavBar from "../Components/NavBar/NavBar.components";
import FoodTab from "../Components/FoodTab/FoodTab.components";
const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavBar />
        <Component {...props} />
        <FoodTab />
      </div>
    );
  };

export default DefaultLayout;
