import { Button, Row, Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import React from 'react';
import { connect } from 'react-redux';
import { types } from '../store';

const Jugadores = ({jugadores, moveToArquero, moveToDefensa, moveToMediocampo, moveToDelantera}) => {
    return (
        <div>
            <Row>
                <h1>Jugadores</h1>
            </Row>
            <Row className='justify-center-md-center'>
                {

                    jugadores.map(jug=>(
                        <Col md="2" key={jug.id}>
                            <Figure>
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
                                <Button varient="primary" onClick={ () => moveToArquero(jug)}>Arquero</Button>{' '}
                                <Button varient="secondary" onClick={ () => moveToDefensa(jug)}>Defensa</Button>{' '}
                                <Button varient="primary" onClick={ () => moveToMediocampo(jug)}>Mediocampo</Button>{' '}
                                <Button varient="primary" onClick={ () => moveToDelantera(jug)}>Delantero</Button>{' '}
                                </p>
                            </Figure>
                        </Col>
                    ))
                }

            </Row>
        </div>
    );
}
const mapStateToProps = state => ({
    jugadores: state.jugadores
});
const mapDispatchToProps = dispatch => ({
    moveToArquero(jug) {
        dispatch({
            type: types.MOVE_TO_ARQUERO,
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
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);