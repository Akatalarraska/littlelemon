import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { MemoryRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(<MemoryRouter>
      <BookingForm />
    </MemoryRouter>);
    const headingElement = screen.getByText("Number of guests");
    expect(headingElement).toBeInTheDocument();
})