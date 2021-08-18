class Destinacije {
    constructor(
        idDestinacije,
        idKontinenti,
        naziv,
        opis,
        zanimljivosti,
        povijest,
        urlSlike,
        sluzbeniEng,
        besplatniWifi,
        sigurnaDestinacija,
        NightLife,
        cijena
    ) {
        this.id = idDestinacije,
        this.idKontinenti = idKontinenti,
        this.naziv=naziv,
        this.opis = opis,
        this.zanimljivosti =zanimljivosti,
        this.povijest = povijest,
        this.urlSlike = urlSlike,
        this.sluzbeniEng = sluzbeniEng,
        this.besplatniWifi = besplatniWifi,
        this.sigurnaDestinacija = sigurnaDestinacija,
        this.NightLife = NightLife,
        this.cijena = cijena
    }
}

export default Destinacije;