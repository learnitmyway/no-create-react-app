import React from "react";
import { render, waitForElement } from "react-testing-library";

import App from "./App";
import { exportAllDeclaration } from "@babel/types";

it("renders text", async () => {
  {
    const { getByText } = render(<App />);

    await waitForElement(() => getByText("Hello React!"));
  }
});
