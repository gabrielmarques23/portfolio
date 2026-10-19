import { Container, Card, Name, PhotoLeft, PhotoRight } from "./style";
import { Glow } from "../../components/Glow";
import fotoReal from "../../../imagens/fotoReal.png";
import fotoAvatar from "../../../imagens/fotoAvatar.png";

export function Details() {
  return (
    <Container>
      <Glow />

      <PhotoLeft src={fotoReal} alt="" />
      <PhotoRight src={fotoAvatar} alt="" />


      <Card>
        <p>Card de vidro</p>
      </Card>

      <Name>
        <span>GABRIEL</span>
        <span>MARQUES</span>
      </Name>

    </Container>
  )
}

