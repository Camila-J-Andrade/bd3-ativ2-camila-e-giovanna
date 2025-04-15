const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

db['bd3_atv3_produtos'].find({ categoria: { $ne: "Eletrodomésticos" } }).sort({ valor: -1 });