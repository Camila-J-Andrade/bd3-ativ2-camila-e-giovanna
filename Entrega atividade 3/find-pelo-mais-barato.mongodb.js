const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

/* BUSCA DO MENOR PARA O MAIOR LIMITANDO PARA APENAS 1, MOSTRANDO O MAIS BARATO */
db['bd3_atv3_produtos'].find().sort({ valor: 1 }).limit(1);