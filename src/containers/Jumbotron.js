import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo.json";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((data) => (
        <Jumbotron key={data.id} direction={data.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{data.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={data.image} alt={data.alt}></Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
