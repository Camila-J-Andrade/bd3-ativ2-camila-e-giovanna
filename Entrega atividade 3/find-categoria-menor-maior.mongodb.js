const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

/* BUSCA DO MAIOR PARA O MENOR PREÇO DE UMA CATEGORIA ESPECÍFICA*/
db['bd3_atv3_produtos'].find({categoria: "Moda"}).sort({ valor: 1 });