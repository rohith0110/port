import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock(
  "react-router-dom",
  () => {
    const React = require("react");

    return {
      NavLink: ({ children, to, className, end, ...props }) =>
        React.createElement(
          "a",
          {
            href: to,
            className:
              typeof className === "function"
                ? className({ isActive: to === "/" })
                : className,
            ...props,
          },
          children,
        ),
      Route: ({ element }) => element,
      Routes: ({ children }) =>
        React.createElement(
          React.Fragment,
          null,
          React.Children.toArray(children)[0],
        ),
    };
  },
  { virtual: true },
);

test("renders the portfolio home page", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /rohith rathod/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("navigation", { name: /primary navigation/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("navigation", { name: /section navigation/i }),
  ).toBeInTheDocument();
});
