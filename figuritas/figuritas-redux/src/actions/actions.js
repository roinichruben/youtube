export 


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