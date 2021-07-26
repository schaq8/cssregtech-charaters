import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "./app/store";
import App from "./App";

const store = setupStore();

test("renders cssregtech.com link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/cssregtech/i)).toBeInTheDocument();
});

test("renders page info", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Page/i)).toBeInTheDocument();
});
