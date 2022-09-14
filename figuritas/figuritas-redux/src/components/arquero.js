import { Container, Row, Col, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import React from 'react';
import { connect } from 'react-redux';
import { types } from '../store';

const Arquero = ({arquero, moveToJugadores, moveToDefensa, moveToMediocampo, moveToDelantera}) => {
    return (
        <div>
            <Row>
                <h1>Arquero</h1>
            </Row>
            <Row className='justify-center-md-center'>
                {

                    arquero.map(jug=>(
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
                                <Button varient="primary" onClick={ () => moveToJugadores(jug)}>Jugadores</Button>{' '}
                                <Button varient="secondary" onClick={ () => moveToDefensa(jug)}>Defensa</Button>{' '}
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
    arquero: state.arquero
});
const mapDispatchToProps = dispatch => ({
    moveToJugadores(jug) {
        dispatch({
            type: types.MOVE_TO_JUGADORES,
            jug
        });
    },
    moveToDefensa(jug) {
        dispatch({
            type: types.MOVE_TO_DEFENSA,
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
export default connect(mapStateToProps, mapDispatchToProps) (Arquero);