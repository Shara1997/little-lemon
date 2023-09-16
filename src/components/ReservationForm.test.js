import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

describe("Reservation Form",()=>{
    test("Submission is enabled only when all input fields are filled",()=>{
        const handleSubmit = jest.fn();
        render(<ReservationForm onSubmit={handleSubmit} />);

        const time = screen.getByLabelText(/Date:/);
        fireEvent.change(time, {target: {value: '17:00'}})

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
        
    })
    
})