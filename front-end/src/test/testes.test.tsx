import NavContainer from "@/Layout/NavContainer";
import { render, screen } from "@testing-library/react";
import Image from "next/image";


jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

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

