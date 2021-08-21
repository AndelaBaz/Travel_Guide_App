export const PROMJENA_FAVORITA = 'PROMJENA_FAVORITA'
export const POSTAVI_FILTERE = 'POSTAVI_FILTERE'

export const promjenaFavorita = (id) => {
    return {
        type: PROMJENA_FAVORITA,
        idDestinacije: id

    }
}

export const postaviFiltere = (vrijednostiFiltera) => {
    return {
        type: POSTAVI_FILTERE,
        filteri: vrijednostiFiltera

    }
}