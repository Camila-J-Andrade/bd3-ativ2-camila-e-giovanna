const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

/* LISTAR TODOS OS PRODUTOS */
// db['bd3_atv3_produtos'].find();

/* BUSCAR PRODUTO NA FAIXA DE VALOR ENTRE 100 E 500 REAIS */
db['bd3_atv3_produtos'].find({ categoria: "Eletrônicos" });