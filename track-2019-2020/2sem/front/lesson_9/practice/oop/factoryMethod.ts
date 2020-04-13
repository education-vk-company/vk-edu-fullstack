class Infected {
    constructor(public name: string, public virus: string, public relatives: string[]) {
        this.name = name;
        this.virus = virus;
        this.relatives = relatives;

        // why public?
    }

    static createCovidInfected(name: string, relatives: string[]) {
        return new Infected(name, 'covid', relatives)
    }

    public test() {
        return 'positive'
    }
}

const covidInfectedMan = Infected.createCovidInfected('Boris J', ['anton', 'liza'])

console.log(covidInfectedMan.test())