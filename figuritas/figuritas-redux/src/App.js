import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure'
import Jugadores from './components/jugadores';
import Arquero from './components/arquero';
import Defensa from './components/defensa';
import Mediocampo from './components/mediocampo';
import Delantera from './components/delantera';
import store from "./store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Jugadores/>
        <Arquero/>
        <Defensa/>
        <Mediocampo/>
        <Delantera/>
      </Container>
    </Provider>
  );
}

export default App;

