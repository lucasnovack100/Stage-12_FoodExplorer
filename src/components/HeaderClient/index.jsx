import { useState } from "react";
import { Container, Receipt, Menu } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import SidebarItem from "../SidebarItem";


export function HeaderClient(){

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <Container>
            <Menu
            type="button"
            >
            <img 
            src="../../../src/assets/Icons/Menu.png" 
            alt="" 
            onClick={showSidebar}
            />
            {sidebar && <Sidebar active={setSidebar}/>}
            </Menu>
        <h1><img src="../../../src/assets/Polygon 1.png" alt="" /> Food Explorer</h1>
            <Receipt>
                <img src="../../../src/assets/Icons/Receipt.png" alt="" />
            </Receipt>
        </Container>
    );
}