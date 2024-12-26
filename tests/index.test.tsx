import MyComponent from "@/components/my-component";
import { render, screen } from "@testing-library/react";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);

    // Example assertions
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
