import { Outlet } from "react-router-dom";
import Nav1 from "./Nav1";


function Nav(){
 return(
    <>
    <header>
    <Nav1 />
</header>
<main>
<Outlet />
</main>
</>
    );
};
export default Nav;