/*a média gasta durante uma viagem abastecendo com Etanol ou Gasolina
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoMedio = 10;
const distancia = 100;
const tipoCombustivel = 'gasolina';

const LitrosGasto = distancia / gastoMedio;

if (tipoCombustivel === 'etanol')
{
    const valorGasto = LitrosGasto * precoEtanol;
    console.log(valorGasto.toFixed(2));
}
else
{
    const valorGasto = LitrosGasto * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
