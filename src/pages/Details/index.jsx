import { Container } from "./style";
import { Glow } from "../../components/Glow";
import { Card } from "./style";
import { Name } from "./style";

export function Details() {
  return (
    <Container>
      <Glow />

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

