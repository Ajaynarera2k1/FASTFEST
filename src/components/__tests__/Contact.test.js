import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("should load Contact page", () => {

    // *we can also use it at the place of test
             
          it("should load contact heading",() => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

           })

           test("should test button loaded or not", () => {
   render(<Contact />);

   const button = screen.getByRole("button");

   expect(button).toBeInTheDocument();
           })

           test("should test with placeholder ", () => {
   render(<Contact />);

   const button = screen.getByPlaceholderText("enter your name");

   expect(button).toBeInTheDocument();
            })

           test("should test input  loaded or not", () => {
   render(<Contact />);

   const input = screen.getAllByRole("textbox");

   expect(input.length).toBe(2);
            })
           
});            