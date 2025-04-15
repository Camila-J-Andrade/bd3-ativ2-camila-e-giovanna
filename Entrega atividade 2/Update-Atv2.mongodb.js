const database = 'Atv2-BD3-NoSQL-AtlasMongoDB';

use (database);


db['bd3-nosql-atv2'].updateOne(
    {'cod_aluno': 17},
    {$set: {'nome': 'Rafael Moreira'}},
    {$set: {'cpf':11901234567}},
    {$set: {'rg': '789012300'}},
    {$set: {'telefone_aluno': '18987654300'}},
    {$set: {'telefone_responsavel': '11882345674'}},
    {$set: {'email': 'rafa.moreira@outlook.com'}},
    {$set: {'data_nascimento': '1999-07-05T00:00:00'}}
)

// db['bd3-nosql-atv2'].find(
//     {'cod_aluno':17}
// )