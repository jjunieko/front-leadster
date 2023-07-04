import { render, screen } from '@testing-library/dom';
import NavContainer from "@/Layout/NavContainer";


describe("NavContainer", () => {
  it("renders without error", () => {
    render(<NavContainer />);
    // Opcional: adicione mais asserções para verificar o comportamento do componente
  });

  it("renders the logo image", () => {
    render(<NavContainer />);

    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });
});

