const database = 'Atv2-BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv2';

use (database);

db.createCollection(collection);

db['bd3-nosql-atv2'].insertMany(
 [

    {
        "cod_aluno": 1,
        "nome": "Ana Silva",
        "cpf": "12345678901",
        "rg": "123456789",
        "telefone_aluno": "11987654321",
        "telefone_responsavel": "11912345678",
        "email": "ana.silva@gmail.com",
        "data_nascimento": "2005-01-15T00:00:00"
    },
    {
        "cod_aluno": 2,
        "nome": "Bruno Santos",
        "cpf": "23456789012",
        "rg": "234567890",
        "telefone_aluno": "11987654322",
        "telefone_responsavel": "11912345679",
        "email": "bruno.santos@hotmail.com",
        "data_nascimento": "2004-02-20T00:00:00"
    },
    {
        "cod_aluno": 3,
        "nome": "Carlos Oliveira",
        "cpf": "34567890123",
        "rg": "345678901",
        "telefone_aluno": "11987654323",
        "telefone_responsavel": "11912345680",
        "email": "carlos.oliveira@gmail.com",
        "data_nascimento": "2003-03-25T00:00:00"
    },
    {
        "cod_aluno": 4,
        "nome": "Daniela Costa",
        "cpf": "45678901234",
        "rg": "456789012",
        "telefone_aluno": "11987654324",
        "telefone_responsavel": "11912345681",
        "email": "daniela.costa@hotmail.com",
        "data_nascimento": "2002-04-30T00:00:00"
    },
    {
        "cod_aluno": 5,
        "nome": "Eduardo Lima",
        "cpf": "56789012345",
        "rg": "567890123",
        "telefone_aluno": "11987654325",
        "telefone_responsavel": "11912345682",
        "email": "eduardo.lima@gmail.com",
        "data_nascimento": "2001-05-05T00:00:00"
    },
    {
        "cod_aluno": 6,
        "nome": "Fernanda Almeida",
        "cpf": "67890123456",
        "rg": "678901234",
        "telefone_aluno": "11987654326",
        "telefone_responsavel": "11912345683",
        "email": "fernanda.almeida@hotmail.com",
        "data_nascimento": "2000-06-10T00:00:00"
    },
    {
        "cod_aluno": 7,
        "nome": "Gabriel Pereira",
        "cpf": "78901234567",
        "rg": "789012345",
        "telefone_aluno": "11987654327",
        "telefone_responsavel": "11912345684",
        "email": "gabriel.pereira@gmail.com",
        "data_nascimento": "1999-07-15T00:00:00"
    },
    {
        "cod_aluno": 8,
        "nome": "Helena Martins",
        "cpf": "89012345678",
        "rg": "890123456",
        "telefone_aluno": "11987654328",
        "telefone_responsavel": "11912345685",
        "email": "helena.martins@hotmail.com",
        "data_nascimento": "1998-08-20T00:00:00"
    },
    {
        "cod_aluno": 9,
        "nome": "Igor Rocha",
        "cpf": "90123456789",
        "rg": "901234567",
        "telefone_aluno": "11987654329",
        "telefone_responsavel": "11912345686",
        "email": "igor.rocha@gmail.com",
        "data_nascimento": "1997-09-25T00:00:00"
    },
    {
        "cod_aluno": 10,
        "nome": "Juliana Ferreira",
        "cpf": "01234567890",
        "rg": "012345678",
        "telefone_aluno": "11987654330",
        "telefone_responsavel": "11912345687",
        "email": "juliana.ferreira@hotmail.com",
        "data _nascimento": "1996-10-30T00:00:00"
    },
    {
        "cod_aluno": 11,
        "nome": "Lucas Mendes",
        "cpf": "12345678901",
        "rg": "123456780",
        "telefone_aluno": "11987654331",
        "telefone_responsavel": "11912345688",
        "email": "lucas.mendes@gmail.com",
        "data_nascimento": "1995-11-05T00:00:00"
    },
    {
        "cod_aluno": 12,
        "nome": "Mariana Souza",
        "cpf": "23456789012",
        "rg": "234567890",
        "telefone_aluno": "11987654332",
        "telefone_responsavel": "11912345689",
        "email": "mariana.souza@hotmail.com",
        "data_nascimento": "1994-12-10T00:00:00"
    },
    {
        "cod_aluno": 13,
        "nome": "Nicolas Lima",
        "cpf": "34567890123",
        "rg": "345678901",
        "telefone_aluno": "11987654333",
        "telefone_responsavel": "11912345690",
        "email": "nicolas.lima@gmail.com",
        "data_nascimento": "1993-01-15T00:00:00"
    },
    {
        "cod_aluno": 14,
        "nome": "Olivia Costa",
        "cpf": "45678901234",
        "rg": "456789012",
        "telefone_aluno": "11987654334",
        "telefone_responsavel": "11912345691",
        "email": "olivia.costa@hotmail.com",
        "data_nascimento": "1992-02-20T00:00:00"
    },
    {
        "cod_aluno": 15,
        "nome": "Pedro Alves",
        "cpf": "56789012345",
        "rg": "567890123",
        "telefone_aluno": "11987654335",
        "telefone_responsavel": "11912345692",
        "email": "pedro.alves@gmail.com",
        "data_nascimento": "1991-03-25T00:00:00"
    },
    {
        "cod_aluno": 16,
        "nome": "Quiteria Santos",
        "cpf": "67890123456",
        "rg": "678901234",
        "telefone_aluno": "11987654336",
        "telefone_responsavel": "11912345693",
        "email": "quiteria.santos@hotmail.com",
        "data_nascimento": "1990-04-30T00:00:00"
    },
    {
        "cod_aluno": 17,
        "nome": "Rafael Gomes",
        "cpf": "78901234567",
        "rg": "789012345",
        "telefone_aluno": "11987654337",
        "telefone_responsavel": "11912345694",
        "email": "rafael.gomes@gmail.com",
        "data_nascimento": "1989-05-05T00:00:00"
    },
    {
        "cod_aluno": 18,
        "nome": "Sofia Martins",
        "cpf": "89012345678",
        "rg": "890123456",
        "telefone_aluno": "11987654338",
        "telefone_responsavel": "11912345695",
        "email": "sofia.martins@hotmail.com",
        "data_nascimento": "1988-06-10T00:00:00"
    },
    {
        "cod_aluno": 19,
        "nome": "Thiago Rocha",
        "cpf": "90123456789",
        "rg": "901234567",
        "telefone_aluno": "11987654339",
        "telefone_responsavel": "11912345696",
        "email": "thiago.rocha@gmail.com",
        "data_nascimento": "1987-07-15T00:00:00"
    },
    {
        "cod_aluno": 20,
        "nome": "Ursula Ferreira",
        "cpf": "01234567890",
        "rg": "012345678",
        "telefone_aluno": "11987654340",
        "telefone_responsavel": "11912345697",
        "email": "ursula.ferreira@hotmail.com",
        "data_nascimento": "1986-08-20T00:00:00"
    },
    {
        "cod_aluno": 21,
        "nome": "Vinicius Lima",
 "cpf": "12345678901",
        "rg": "123456781",
        "telefone_aluno": "11987654341",
        "telefone_responsavel": "11912345698",
        "email": "vinicius.lima@gmail.com",
        "data_nascimento": "1985-09-25T00:00:00"
    },
    {
        "cod_aluno": 22,
        "nome": "Wesley Costa",
        "cpf": "23456789012",
        "rg": "234567892",
        "telefone_aluno": "11987654342",
        "telefone_responsavel": "11912345699",
        "email": "wesley.costa@hotmail.com",
        "data_nascimento": "1984-10-30T00:00:00"
    },
    {
        "cod_aluno": 23,
        "nome": "Yasmin Almeida",
        "cpf": "34567890123",
        "rg": "345678903",
        "telefone_aluno": "11987654343",
        "telefone_responsavel": "11912345700",
        "email": "yasmin.almeida@gmail.com",
        "data_nascimento": "1983-11-05T00:00:00"
    },
    {
        "cod_aluno": 24,
        "nome": "Zoe Martins",
        "cpf": "45678901234",
        "rg": "456789014",
        "telefone_aluno": "11987654344",
        "telefone_responsavel": "11912345701",
        "email": "zoe.martins@hotmail.com",
        "data_nascimento": "1982-12-10T00:00:00"
    },
    {
        "cod_aluno": 25,
        "nome": "André Santos",
        "cpf": "56789012345",
        "rg": "567890125",
        "telefone_aluno": "11987654345",
        "telefone_responsavel": "11912345702",
        "email": "andre.santos@gmail.com",
        "data_nascimento": "1981-01-15T00:00:00"
    },
    {
        "cod_aluno": 26,
        "nome": "Bianca Oliveira",
        "cpf": "67890123456",
        "rg": "678901236",
        "telefone_aluno": "11987654346",
        "telefone_responsavel": "11912345703",
        "email": "bianca.oliveira@hotmail.com",
        "data_nascimento": "1980-02-20T00:00:00"
    },
    {
        "cod_aluno": 27,
        "nome": "Carlos Eduardo",
        "cpf": "78901234567",
        "rg": "789012347",
        "telefone_aluno": "11987654347",
        "telefone_responsavel": "11912345704",
        "email": "carlos.eduardo@gmail.com",
        "data_nascimento": "1979-03-25T00:00:00"
    },
    {
        "cod_aluno": 28,
        "nome": "Diana Ferreira",
        "cpf": "89012345678",
        "rg": "890123458",
        "telefone_aluno": "11987654348",
        "telefone_responsavel": "11912345705",
        "email": "diana.ferreira@hotmail.com",
        "data_nascimento": "1978-04-30T00:00:00"
    },
    {
        "cod_aluno": 29,
        "nome": "Eduarda Lima",
        "cpf": "90123456789",
        "rg": "901234569",
        "telefone_aluno": "11987654349",
        "telefone_responsavel": "11912345706",
        "email": "eduarda.lima@gmail.com",
        "data_nascimento": "1977-05-05T00:00:00"
    },
    {
        "cod_aluno": 30,
        "nome": "Felipe Costa",
        "cpf": "01234567890",
        "rg": "012345670",
        "telefone_aluno": "11987654350",
        "telefone_responsavel": "11912345707",
        "email": "felipe.costa@hotmail.com",
        "data_nascimento": "1976-06-10T00:00:00"
    },
    {
        "cod_aluno": 31,
        "nome": "Gabriela Almeida",
        "cpf": "12345678901",
        "rg": "123456781",
        "telefone_aluno": "11987654351",
        "telefone_responsavel": "11912345708",
        "email": "gabriela.almeida@gmail.com",
        "data_nascimento": "1975-07-15T00:00:00"
    },
    {
        "cod_aluno": 32,
        "nome": "Henrique Martins",
        "cpf": "23456789012",
        "rg": "234567892",
        "telefone_aluno": "11987654352",
        "telefone_responsavel": "11912345709",
        "email": "henrique.martins@hotmail.com",
        "data_nascimento": "1974-08-20T00:00:00"
    },
    {
        "cod_aluno": 33,
        "nome": "Isabela Santos",
        "cpf": "34567890123",
        "rg": "345678903",
        "telefone_aluno": "11987654353",
        "telefone_responsavel": "11912345710",
        "email": "isabela.santos@gmail.com",
        "data_nascimento": "1973-09-25T00:00:00"
    },
    {
        "cod_aluno": 34,
        "nome": "João Pedro",
        "cpf": "45678901234",
        "rg": "456789014",
        "telefone_aluno": "11987654354",
        "telefone_responsavel": "11912345711",
        "email": "joao.pedro@hotmail.com",
        "data_nascimento": "1972-10-30T00:00:00"
    },
    {
        "cod_aluno": 35,
        "nome": "Karina Lima",
        "cpf": "56789012345",
        "rg": "567890125",
        "telefone_aluno": "11987654355",
        "telefone_responsavel": "11912345712",
        "email": "karina.lima@gmail.com",
        "data_nascimento": "1971-11-05T00:00:00"
    },
    {
        "cod_aluno": 36,
        "nome": "Leonardo Costa",
        "cpf": "67890123456",
        "rg": "678901236",
        "telefone_aluno": "11987654356",
        "telefone_responsavel": "11912345713",
        "email": "leonardo.costa@hotmail.com",
        "data_nascimento": "1970-12-10T00:00:00"
    },
    {
        "cod_aluno": 37,
        "nome": "Marcos Almeida",
        "cpf": "78901234567",
        "rg": "789012347",
        "telefone_aluno": "11987654357",
        "telefone_responsavel": "11912345714",
        "email": "marcos.almeida@gmail.com",
        "data_nascimento": "1969-01-15T00:00:00"
    },
    {
        "cod_aluno": 38,
        "nome": "Natália Ferreira",
        "cpf": "89012345678",
        "rg": "890123458",
        "telefone_aluno": "11987654358",
        "telefone_responsavel": "11912345715",
        "email": "natalia.ferreira@hotmail.com",
        "data_nascimento": "1968-02-20T00:00:00"
    },
    {
        "cod_aluno": 39,
        "nome": "Otávio Santos",
        "cpf": "90123456789",
        "rg": "901234569",
        "telefone_aluno": "11987654359",
        "telefone_responsavel": "11912345716",
        "email": "otavio.santos@gmail.com",
        "data_nascimento": "1967-03-25T00:00:00"
    },
    {
        "cod_aluno": 40,
        "nome": "Paula Lima",
        "cpf": "01234567890",
        "rg": "012345670",
        "telefone_aluno": "11987654360",
        "telefone_responsavel": "11912345717",
        "email": "paula.lima@hotmail.com",
        "data_nascimento": "1966-04-30T00:00:00"
    },
    {
        "cod_aluno": 41,
        "nome": "Quintino Martins",
        "cpf": "12345678901",
        "rg": "123456781",
        "telefone_aluno": "11987654361",
        "telefone_responsavel": "11912345718",
        "email": "quintino.martins@gmail.com",
        "data_nascimento": "1965-05-05T00: 00:00"
    },
    {
        "cod_aluno": 42,
        "nome": "Rita Almeida",
        "cpf": "23456789012",
        "rg": "234567892",
        "telefone_aluno": "11987654362",
        "telefone_responsavel": "11912345719",
        "email": "rita.almeida@hotmail.com",
        "data_nascimento": "1964-06-10T00:00:00"
    },
    {
        "cod_aluno": 43,
        "nome": "Samuel Costa",
        "cpf": "34567890123",
        "rg": "345678903",
        "telefone_aluno": "11987654363",
        "telefone_responsavel": "11912345720",
        "email": "samuel.costa@gmail.com",
        "data_nascimento": "1963-07-15T00:00:00"
    },
    {
        "cod_aluno": 44,
        "nome": "Tatiane Ferreira",
        "cpf": "45678901234",
        "rg": "456789014",
        "telefone_aluno": "11987654364",
        "telefone_responsavel": "11912345721",
        "email": "tatiane.ferreira@hotmail.com",
        "data_nascimento": "1962-08-20T00:00:00"
    },
    {
        "cod_aluno": 45,
        "nome": "Ulisses Lima",
        "cpf": "56789012345",
        "rg": "567890125",
        "telefone_aluno": "11987654365",
        "telefone_responsavel": "11912345722",
        "email": "ulisses.lima@gmail.com",
        "data_nascimento": "1961-09-25T00:00:00"
    },
    {
        "cod_aluno": 46,
        "nome": "Vanessa Santos",
        "cpf": "67890123456",
        "rg": "678901236",
        "telefone_aluno": "11987654366",
        "telefone_responsavel": "11912345723",
        "email": "vanessa.santos@hotmail.com",
        "data_nascimento": "1960-10-30T00:00:00"
    },
    {
        "cod_aluno": 47,
        "nome": "Wagner Almeida",
        "cpf": "78901234567",
        "rg": "789012347",
        "telefone_aluno": "11987654367",
        "telefone_responsavel": "11912345724",
        "email": "wagner.almeida@gmail.com",
        "data_nascimento": "1959-11-05T00:00:00"
    },
    {
        "cod_aluno": 48,
        "nome": "Xuxa Ferreira",
        "cpf": "89012345678",
        "rg": "890123458",
        "telefone_aluno": "11987654368",
        "telefone_responsavel": "11912345725",
        "email": "xuxa.ferreira@hotmail.com",
        "data_nascimento": "1958-12-10T00:00:00"
    },
    {
        "cod_aluno": 49,
        "nome": "Yuri Costa",
        "cpf": "90123456789",
        "rg": "901234569",
        "telefone_aluno": "11987654369",
        "telefone_responsavel": "11912345726",
        "email": "yuri.costa@gmail.com",
        "data_nascimento": "1957-01-15T00:00:00"
    },
    {
        "cod_aluno": 50,
        "nome": "Zara Almeida",
        "cpf": "01234567890",
        "rg": "012345670",
        "telefone_aluno": "11987654370",
        "telefone_responsavel": "11912345727",
        "email": "zara.almeida@hotmail.com",
        "data_nascimento": "1956-02-20T00:00:00"
    }
])