import React, { useState } from "react";
import "./App.css";
import { Play } from "./components/play";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducer";

function App() {

//   const store = createStore(
//     rootReducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


  return (
    <>
      <React.StrictMode>
        {/* <Provider store={store}> */}
          <Play />
        {/* </Provider> */}
      </React.StrictMode>
    </>
  );
}

export default App;
