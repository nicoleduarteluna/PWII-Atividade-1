export class Piscina {
    
    constructor (public diametro :number, public custoConstrucao:number) {}

    raio () : number {
       return (this.diametro/2)
    }

    area () : number {
        return (3.14159 * (this.raio()*this.raio()))
    }

    custoTotal () : number {
        return (this.area() * this.custoConstrucao)
    }
}