import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./component/jumbotron";
import jumboData from "./fixtures/jumbo.json";

function App() {
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

export default App;
