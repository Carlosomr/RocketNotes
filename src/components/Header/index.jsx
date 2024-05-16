import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout} from "./styles";



export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/Carlosomr.png" alt="Foto de perfil"/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>Carlos Eduardo</strong>
                </div>
            </Profile>
            <Logout>
            <RiShutDownLine />
            </Logout>
        </Container>
    )
}
