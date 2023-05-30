import { Container, Receipt, Menu } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

import { ButtonImg } from "../../components/ButtonImg";

export function HeaderClient(){



    
    return(
        <Container>
        
            <Menu>
            <img src="../../../src/assets/Icons/Menu.png" alt="" />
            </Menu>

        <h1><img src="../../../src/assets/Polygon 1.png" alt="" /> Food Explorer</h1>

            <Receipt>
                <img src="../../../src/assets/Icons/Receipt.png" alt="" />
            </Receipt>


        </Container>
    );
}