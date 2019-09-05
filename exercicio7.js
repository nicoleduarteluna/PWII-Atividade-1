var Piscina = /** @class */ (function () {
    function Piscina(diametro) {
        if (diametro === void 0) { diametro = 50; }
        this.diametro = diametro;
        this.custoConstrucao = 50;
    }
    Piscina.prototype.raio = function () {
        return (this.diametro / 2);
    };
    return Piscina;
}());
