import { Provider } from "react-redux";
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("should render header component", () => {
       render(
        <BrowserRouter>
             <Provider store={appStore} >
                 <Header />
             </Provider >
        </BrowserRouter>       
       );

       const loggedIn = screen.getByRole("button",{name:"Login"});

       fireEvent.click(loggedIn);

    //    expect(loggedIn).toBeInTheDocument();

       const logout = screen.getByRole("button",{name:"Logout"});

       expect(logout).toBeInTheDocument();
});