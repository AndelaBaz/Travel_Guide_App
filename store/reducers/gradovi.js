import { DESTINACIJE } from "../../data/test-podaci"
import { POSTAVI_FILTERE, PROMJENA_FAVORITA } from "../actions/gradovi";

const pocetnoStanje = {
    gradovi: DESTINACIJE,
    filterGradovi: DESTINACIJE,
    favoritGradovi: []
}

const gradoviReducer = (state=pocetnoStanje, action) => {
    switch (action.type) {
        case PROMJENA_FAVORITA:
            const oznacen = state.favoritGradovi.findIndex(
                grad => grad.id === action.idDestinacije
            )
            if (oznacen >= 0){
                const noviFavoriti = [...state.favoritGradovi]
                noviFavoriti.splice(oznacen,1)
                return {...state, favoritGradovi: noviFavoriti}
            }
            else {
                const grad = state.gradovi.find(g => g.id === action.idDestinacije)
                return {...state, favoritGradovi: state.favoritGradovi.concat(grad),
                };
            }
        case POSTAVI_FILTERE:
            const filteri = action.filteri
            const noviGradovi = state.gradovi.filter(grad =>{
                if (filteri.sluzbeniEng && !grad.sluzbeniEng){
                    return false
                }
                if (filteri.wifi && !grad.wifi){
                    return false
                }
                if (filteri.sigurnost && !grad.sigurnost){
                    return false
                }
                if (filteri.nightlife && !grad.nightlife){
                    return false
                }
                return true
            })
                return {...state, filterGradovi: noviGradovi}
        default:
            return state;
    }
    
};

export default gradoviReducer