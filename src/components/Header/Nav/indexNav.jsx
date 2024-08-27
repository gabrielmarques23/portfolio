import { Container } from "./navStyle";
import { Button } from "../../Button/index";


export function Nav() {
    return (
        <Container>
            <div>
                <ul>
                <Button title="Sobre mim"/>
                <Button title="Projetos"/>
                <Button title="Contato"/>
                </ul>
            </div>
        </Container>
    );
}