import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body"
import MOCK_DATA from ".././Mocks/resDataMock.json";
import { BrowserRouter, json } from "react-router-dom";
import { act } from "react-dom/test-utils";


// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//       json : Promise.resolve(MOCK_DATA)
//     });
// });

// it("should check search functionality with burger", async() => {
//     await act(async() => {
//         render(
//             <BrowserRouter> 
//                <Body />
//             </BrowserRouter>  
//     );
//     })

// const beforeSearchBtn = screen.getAllByTestId("SearchInput");
// expect(beforeSearchBtn.length).toBe(20);
// }); 
    
import { sum } from "../sum";

test('test for sum method', () => { 

    const Return = sum(4,5);
    expect(Return).toBe(9);
 });
     


