const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

/* BUSCAR PRODUTO NA FAIXA DE VALOR ENTRE 100 E 500 REAIS */
db['bd3_atv3_produtos'].find({ valor: { $gte: 100, $lte: 500 } });