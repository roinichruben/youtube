import { createStore } from "redux";
export const types = {
    MOVE_TO_JUGADORES: 'move_to_jugadores',
    MOVE_TO_ARQUERO: 'move_to_arquero',
    MOVE_TO_DEFENSA: 'move_to_defensa',
    MOVE_TO_MEDIOCAMPO: 'move_to_mediocampo',
    MOVE_TO_DELANTERA: 'move_to_delantera'
};

const initialState = {
    jugadores: [
        {
            id: 1,
            image: 'jugadores/arquero.png',
            nombre: 'Dominik Livakovic'
            
        },
        {
            id: 2,
            image: 'jugadores/arquero2.png',
            nombre: 'Ivan Ivusic'
          
        },
        {
            id: 3,
            image: 'jugadores/defensa1.png',
            nombre: 'Duje Caleta-Car'
          
        },
        {
            id: 4,
            image: 'jugadores/defensa4.png',
            nombre: 'Dejan Lovren'
        },
        {
            id: 5,
            image: 'jugadores/defensa5.png',
            nombre: 'Borna Sosa'
        },
        {
            id: 6,
            image: 'jugadores/defensa6.png',
            nombre: 'Domagoj Vida'
        },
        {
            id: 7,
            image: 'jugadores/volante1.png',
            nombre: 'Marcelo Brozovic'
        },
        {
            id: 8,
            image: 'jugadores/volante2.png',
            nombre: 'Mateo Kovacic'
        },
        {
            id: 9,
            image: 'jugadores/volante3.png',
            nombre: 'Luka Modric'
        },
        {
            id: 10,
            image: 'jugadores/volante5.png',
            nombre: 'Ivan Perisic'
        },
        {
            id: 11,
            image: 'jugadores/delantero1.png',
            nombre: 'Andrej Kramaric'
        },
        {
            id: 12,
            image: 'jugadores/delantero1.png',
            nombre: 'Marko Livaja'
        },
        {
            id: 13,
            image: 'jugadores/delantero1.png',
            nombre: 'Mislav Orsic'
        },
        {
            id: 14,
            image: 'jugadores/delantero1.png',
            nombre: 'Josip Brekalo'
        }

        
    ],
    arquero: [],
    defensa: [],
    mediocampo: [],
    delantera: []
    
    
}

const reducerJugadores = (state = initialState, action) => {
switch(action.type)
    {
        case types.MOVE_TO_JUGADORES:
             return {
                ...state,
                jugadores: state.jugadores.concat(action.jug),
                arquero: state.arquero.filter(ft => ft.id !== action.jug.id),
                defensa: state.defensa.filter(ft => ft.id !== action.jug.id),
                mediocampo: state.mediocampo.filter(ft => ft.id !== action.jug.id),
                delantera: state.delantera.filter(ft => ft.id !== action.jug.id)
            }
        case types.MOVE_TO_ARQUERO:
            return {
                ...state,
                arquero: state.arquero.concat(action.jug),
                jugadores: state.jugadores.filter(ft => ft.id !== action.jug.id),
                defensa: state.defensa.filter(ft => ft.id !== action.jug.id),
                mediocampo: state.mediocampo.filter(ft => ft.id !== action.jug.id),
                delantera: state.delantera.filter(ft => ft.id !== action.jug.id)

            }
        case types.MOVE_TO_DEFENSA:
            return {
                ...state,
                defensa: state.defensa.concat(action.jug),
                jugadores: state.jugadores.filter(ft => ft.id !== action.jug.id),
                arquero: state.arquero.filter(ft => ft.id !== action.jug.id),
                mediocampo: state.mediocampo.filter(ft => ft.id !== action.jug.id),
                delantera: state.delantera.filter(ft => ft.id !== action.jug.id)

            } 
        case types.MOVE_TO_MEDIOCAMPO:
            return {
                ...state,
                mediocampo: state.mediocampo.concat(action.jug),
                jugadores: state.jugadores.filter(ft => ft.id !== action.jug.id),
                arquero: state.arquero.filter(ft => ft.id !== action.jug.id),
                defensa: state.defensa.filter(ft => ft.id !== action.jug.id),
                delantera: state.delantera.filter(ft => ft.id !== action.jug.id)

            }
        case types.MOVE_TO_DELANTERA:
            return {
                ...state,
                delantera: state.delantera.concat(action.jug),
                jugadores: state.jugadores.filter(ft => ft.id !== action.jug.id),
                arquero: state.arquero.filter(ft => ft.id !== action.jug.id),
                defensa: state.defensa.filter(ft => ft.id !== action.jug.id),
                mediocampo: state.mediocampo.filter(ft => ft.id !== action.jug.id)
            };
            default:
                return state;        
    }
}
export default createStore (reducerJugadores);