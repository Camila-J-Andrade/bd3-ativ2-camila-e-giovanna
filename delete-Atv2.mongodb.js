const database = 'Atv2-BD3-NoSQL-AtlasMongoDB';

use (database);


db['bd3-nosql-atv2'].deleteOne(
    {'cod_aluno': 42}
)

// db['bd3-nosql-atv2'].find(
//     {'cod_aluno':42}
// )