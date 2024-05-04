import { Container, Profile} from "./styles";


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
        </Container>
    )
}
