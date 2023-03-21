import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Le Contexte nous permet de transmettre une prop profondément dans l’arbre des composants sans la faire passer explicitement à travers tous les composants.
export const StateContext = createContext();

// Utilise un Provider pour passer le Contexte plus bas dans l’arbre.
// N’importe quel composant peut le lire, quelle que soit sa profondeur.
export const StateProvider = ({children, initialState, reducer}) => (
    // useReducer, la manière la plus simple de l’initialiser consiste à fournir l’état initial comme deuxième argument
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Il renverra la valeur du contexte d'état
export const useStateProvider = () => useContext(StateContext);

StateProvider.propTypes = {
    children: PropTypes.object,
    initialState: PropTypes.object,
    reducer: PropTypes.func
};