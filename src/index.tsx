import React from "react";
import ReactDOM from "react-dom";

import styles from "./index.module.css";

const Index = () => {
  return <div className={styles.hello}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
