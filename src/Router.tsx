import {Routes, Route} from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import {Home} from "./pages/Home";
import {User} from "./pages/User";
import {Professional} from "./pages/Professional";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/professional" element={<Professional/>}/>
            </Route>
        </Routes>
    )
}