import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header";
import { ThemeProvider } from "../../context/ThemeContext"; 

// Reusable render helper
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Header Component", () => {
  test("renders logo and navigation links", () => {
    renderWithTheme(<Header />);
    expect(screen.getByText("CV")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  // test("toggles mobile menu when button is clicked", () => {
  //   render(<Header />);
  //   const menuButton = screen.getByLabelText("Toggle menu");
  //   // Menu should be hidden initially
  //   expect(screen.queryByRole("navigation")).not.toBeVisible();
  //   // Click to open menu
  //   fireEvent.click(menuButton);
  //   expect(screen.queryByRole("navigation")).toBeVisible();
  //   // Click to close menu
  //   fireEvent.click(menuButton);
  //   expect(screen.queryByRole("navigation")).not.toBeVisible();
  // });
});
