import { Container, Row, Col, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import React from 'react';
import { connect } from 'react-redux';
import { types } from '../store';

const Defensa = ({defensa, moveToJugadores, moveToArquero, moveToMediocampo, moveToDelantera}) => {
    return (
        <div>
            <Row>
                <h1>Defensa</h1>
            </Row>
            <Row className='justify-center-md-center'>
                {

                    defensa.map(jug=>(
                        <Col md="2" key={jug.id}>
                            <Figure.Image
                            width={171}
                            height={180}
                            alt={jug.nombre}
                            src={jug.image}
                            />
                            <Figure.Caption>
                                {jug.nombre}
                            </Figure.Caption>
                            <p style={{textAlign: 'center', marginTop:'10px'}}>
                            <Button varient="secondary" onClick={ () => moveToJugadores(jug)}>Jugadores</Button>{' '}
                                <Button varient="primary" onClick={ () => moveToArquero(jug)}>Arquero</Button>{' '}
                                <Button varient="primary" onClick={ () => moveToMediocampo(jug)}>Mediocampo</Button>{' '}
                                <Button varient="primary" onClick={ () => moveToDelantera(jug)}>Delantero</Button>{' '}
                                </p>
                        </Col>
                    ))
                }

            </Row>
        </div>
    );
}
const mapStateToProps = state => ({
    defensa: state.defensa
});
const mapDispatchToProps = dispatch => ({
    moveToJugadores(jug) {
        dispatch({
            type: types.MOVE_TO_JUGADORES,
            jug
        });
    },
    moveToArquero(jug) {
        dispatch({
            type: types.MOVE_TO_ARQUERO,
            jug
        });
    },
    moveToMediocampo(jug) {
        dispatch({
            type: types.MOVE_TO_MEDIOCAMPO,
            jug
        });
    },
    moveToDelantera(jug) {
        dispatch({
            type: types.MOVE_TO_DELANTERA,
            jug
        });
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (Defensa);