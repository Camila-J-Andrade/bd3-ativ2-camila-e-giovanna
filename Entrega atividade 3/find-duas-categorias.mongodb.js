const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

/* LISTANDO AS DUAS CATEGORIAS USANDO O $in E O find() */
db['bd3_atv3_produtos'].find({ categoria:{ $in: ["Eletrônicos", "Moda"] }});