const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

// db.createCollection(collection);

db['bd3_atv3_produtos'].insertMany(
    [
        {
            "nome": "Smartphone XYZ",
            "valor": 999.99,
            "quantidade_em_estoque": 50,
            "fabricante": "XYZ Corp",
            "categoria": "Eletrônicos",
            "descricao": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento."
        },
        {
            "nome": "Notebook ABC",
            "valor": 2999.99,
            "quantidade_em_estoque": 30,
            "fabricante": "ABC Tech",
            "categoria": "Eletrônicos",
            "descricao": "Notebook com processador i7, 16GB de RAM e 512GB SSD."
        },
        {
            "nome": "Cafeteira Elétrica",
            "valor": 199.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Café Bom",
            "categoria": "Eletrodomésticos",
            "descricao": "Cafeteira elétrica com capacidade para 12 xícaras."
        },
        {
            "nome": "Fone de Ouvido Bluetooth",
            "valor": 149.99,
            "quantidade_em_estoque": 200,
            "fabricante": "AudioPro",
            "categoria": "Acessórios",
            "descricao": "Fone de ouvido sem fio com cancelamento de ruído."
        },
        {
            "nome": "Televisão 4K 55\"",
            "valor": 2499.99,
            "quantidade_em_estoque": 20,
            "fabricante": "VisionTech",
            "categoria": "Eletrônicos",
            "descricao": "Televisão 4K com HDR e Smart TV."
        },
        {
            "nome": "Micro-ondas Inox",
            "valor": 499.99,
            "quantidade_em_estoque": 40,
            "fabricante": "HomeTech",
            "categoria": "Eletrodomésticos",
            "descricao": "Micro-ondas com 20 litros de capacidade e 10 funções."
        },
        {
            "nome": "Cadeira Gamer",
            "valor": 799.99,
            "quantidade_em_estoque": 15,
            "fabricante": "GamerPro",
            "categoria": "Móveis",
            "descricao": "Cadeira ergonômica para gamers com ajuste de altura."
        },
        {
            "nome": "Relógio Inteligente",
            "valor": 299.99,
            "quantidade_em_estoque": 80,
            "fabricante": "SmartWear",
            "categoria": "Acessórios",
            "descricao": "Relógio inteligente com monitoramento de saúde."
        },
        {
            "nome": "Impressora Multifuncional",
            "valor": 599.99,
            "quantidade_em_estoque": 25,
            "fabricante": "PrintMaster",
            "categoria": "Eletrônicos",
            "descricao": "Impressora que imprime, copia e digitaliza."
        },
        {
            "nome": "Bicicleta Mountain Bike",
            "valor": 1299.99,
            "quantidade_em_estoque": 10,
            "fabricante": "BikePro",
            "categoria": "Esportes",
            "descricao": "Bicicleta para trilhas com suspensão e 21 marchas."
        },
        {
            "nome": "Câmera DSLR",
            "valor": 3499.99,
            "quantidade_em_estoque": 5,
            "fabricante": "PhotoMax",
            "categoria": "Fotografia",
            "descricao": "Câmera DSLR com lente de 18-55mm."
        },
        {
            "nome": "Console de Videogame",
            "valor": 2499.99,
            "quantidade_em_estoque": 12,
            "fabricante": "GameStation",
            "categoria": "Jogos",
            "descricao": "Console de videogame com 1TB de armazenamento."
        },
        {
            "nome": "Tênis Esportivo",
            "valor": 199.99,
            "quantidade_em_estoque": 60,
            "fabricante": "SportWear",
            "categoria": "Moda",
            "descricao": "Tênis confortável para corrida e atividades físicas."
        },
        {
            "nome": "Mochila para Notebook",
            "valor": 89.99,
            "quantidade_em_estoque": 150,
            "fabricante": "BagPro",
            "categoria": "Acessórios",
            "descricao": "Mochila com compartimento acolchoado para notebook de até 15.6\"."
        },
        {
            "nome": "Cafeteira Francesa",
            "valor": 49.99,
            "quantidade_em_estoque": 200,
            "fabricante": "Café Bom",
            "categoria": "Eletrodomésticos",
            "descricao": "Cafeteira francesa de vidro com capacidade para 8 xícaras."
        },
        {
            "nome": "Teclado Mecânico",
            "valor": 299.99,
            "quantidade_em_estoque": 40,
            "fabricante": "KeyTech",
            "categoria": "Acessórios",
            "descricao": "Teclado mecânico com retroiluminação RGB."
        },
        {
            "nome": "Mouse Gamer",
            "valor": 149.99,
            "quantidade_em_estoque": 100,
            "fabricante": "GamerPro",
            "categoria": "Acessórios",
            "descricao": "Mouse gamer com 16.000 DPI e iluminação RGB."
        },
        {
            "nome": "Monitor 27\"",
            "valor": 1199.99,
            "quantidade_em_estoque": 20,
            "fabricante": "VisionTech",
            "categoria": "Eletrônicos",
            "descricao": "Monitor Full HD de 27 polegadas com painel IPS."
        },
        {
            "nome": "Cadeira de Escritório",
            "valor": 499.99,
            "quantidade_em_estoque": 25,
            "fabricante": "OfficePro",
            "categoria": "Móveis",
            "descricao": "Cadeira de escritório ergonômica com apoio para lombar."
        },
        {
            "nome": "Batedeira Planetária",
            "valor": 399.99,
            "quantidade_em_estoque": 30,
            "fabricante": "Cozinha Fácil",
            "categoria": "Eletrodomésticos",
            "descricao": "Batedeira com 6 velocidades e tigela de 4.5 litros."
        },
        {
            "nome": "Fritadeira Elétrica",
            "valor": 299.99,
            "quantidade_em_estoque": 50,
            "fabricante": "Cozinha Saudável",
            "categoria": "Eletrodomésticos",
            "descricao": "Fritadeira elétrica com tecnologia de ar quente."
        },
        {
            "nome": "Câmera de Segurança",
            "valor": 199.99,
            "quantidade_em_estoque": 80,
            "fabricante": "SecureHome",
            "categoria": "Segurança",
            "descricao": "Câmera de segurança com visão noturna e conexão Wi-Fi."
        },
        {
            "nome": "Carregador Portátil",
            "valor": 79.99,
            "quantidade_em_estoque": 150,
            "fabricante": "PowerBank",
            "categoria": "Acessórios",
            "descricao": "Carregador portátil com capacidade de 10.000mAh."
        },
        {
            "nome": "Roupão de Banho",
            "valor": 89.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Moda Conforto",
            "categoria": "Moda",
            "descricao": "Roupão de banho em algodão, disponível em várias cores."
        },
        {
            "nome": "Camiseta Estampada",
            "valor": 39.99,
            "quantidade_em_estoque": 200,
            "fabricante": "Moda Casual",
            "categoria": "Moda",
            "descricao": "Camiseta de algodão com estampa divertida."
        },
        {
            "nome": "Relógio de Pulso",
            "valor": 199.99,
            "quantidade_em_estoque": 75,
            "fabricante": "TimeMaster",
            "categoria": "Acessórios",
            "descricao": "Relógio de pulso com pulseira de couro."
        },
        {
            "nome": "Sofá Retrátil",
            "valor": 1999.99,
            "quantidade_em_estoque": 10,
            "fabricante": "Móveis Conforto",
            "categoria": "Móveis",
            "descricao": "Sofá retrátil com chaise e revestimento em tecido."
        },
        {
            "nome": "Mesa de Jantar",
            "valor": 899.99,
            "quantidade_em_estoque": 15,
            "fabricante": "Móveis Elegantes",
            "categoria": "Móveis",
            "descricao": "Mesa de jantar de madeira com capacidade para 6 pessoas."
        },
        {
            "nome": "Cama Box",
            "valor": 1299.99,
            "quantidade_em_estoque": 20,
            "fabricante": "Dormir Bem",
            "categoria": "Móveis",
            "descricao": "Cama box com colchão de espuma e estrutura resistente."
        },
        {
            "nome": "Aspirador de Pó",
            "valor": 399.99,
            "quantidade_em_estoque": 30,
            "fabricante": "Limpeza Fácil",
            "categoria": "Eletrodomésticos",
            "descricao": "Aspirador de pó com filtro HEPA e potência de 1200W."
        },
        {
            "nome": "Liquidificador",
            "valor": 199.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Cozinha Prática",
            "categoria": "Eletrodomésticos",
            "descricao": "Liquidificador com 5 velocidades e copo de vidro."
        },
        {
            "nome": "Bicicleta Elétrica",
            "valor": 3499.99,
            "quantidade_em_estoque": 8,
            "fabricante": "BikeTech",
            "categoria": "Esportes",
            "descricao": "Bicicleta elétrica com autonomia de 50 km."
        },
        {
            "nome": "Cadeira de Praia",
            "valor": 49.99,
            "quantidade_em_estoque": 150,
            "fabricante": "Verão Alegre",
            "categoria": "Esportes",
            "descricao": "Cadeira de praia dobrável e leve."
        },
        {
            "nome": "Torradeira",
            "valor": 99.99,
            "quantidade_em_estoque": 80,
            "fabricante": "Cozinha Rápida",
            "categoria": "Eletrodomésticos",
            "descricao": "Torradeira com 2 fatias e controle de temperatura."
        },
        {
            "nome": "Cesta de Pique-Nique",
            "valor": 59.99,
            "quantidade_em_estoque": 120,
            "fabricante": "Aventura ao Ar Livre",
            "categoria": "Esportes",
            "descricao": "Cesta de pique-nique com compartimentos para alimentos."
        },
        {
            "nome": "Capa de Chuva",
            "valor": 29.99,
            "quantidade_em_estoque": 200,
            "fabricante": "Moda Prática",
            "categoria": "Moda",
            "descricao": "Capa de chuva leve e dobrável, ideal para viagens."
        },
        {
            "nome": "Bola de Futebol",
            "valor": 79.99,
            "quantidade_em_estoque": 150,
            "fabricante": "SportPro",
            "categoria": "Esportes",
            "descricao": "Bola de futebol oficial, tamanho 5."
        },
        {
            "nome": "Camiseta de Time",
            "valor": 89.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Moda Esportiva",
            "categoria": "Moda",
            "descricao": "Camiseta de time de futebol, disponível em várias cores."
        },
        {
            "nome": "Tênis Casual",
            "valor": 149.99,
            "quantidade_em_estoque": 80,
            "fabricante": "SportWear",
            "categoria": "Moda",
            "descricao": "Tênis casual para uso diário, confortável e estiloso."
        },
        {
            "nome": "Cadeira de Rodas",
            "valor": 899.99,
            "quantidade_em_estoque": 10,
            "fabricante": "Mobilidade Fácil",
            "categoria": "Saúde",
            "descricao": "Cadeira de rodas dobrável e leve."
        },
        {
            "nome": "Termômetro Digital",
            "valor": 39.99,
            "quantidade_em_estoque": 200,
            "fabricante": "Saúde e Bem-Estar",
            "categoria": "Saúde",
            "descricao": "Termômetro digital com leitura rápida e precisa."
        },
        {
            "nome": "Escova de Dentes Elétrica",
            "valor": 99.99,
            "quantidade_em_estoque": 150,
            "fabricante": "Higiene Pessoal",
            "categoria": "Saúde",
            "descricao": "Escova de dentes elétrica com modos de escovação e temporizador."
        },
        {
            "nome": "Creme Hidratante",
            "valor": 29.99,
            "quantidade_em_estoque": 300,
            "fabricante": "Beleza Natural",
            "categoria": "Saúde",
            "descricao": "Creme hidratante para pele seca, com ingredientes naturais."
        },
        {
            "nome": "Soro Fisiológico",
            "valor": 19.99,
            "quantidade_em_estoque": 250,
            "fabricante": "Saúde e Bem-Estar",
            "categoria": "Saúde",
            "descricao": "Soro fisiológico estéril, ideal para limpeza de feridas."
        },
        {
            "nome": "Máscara Facial",
            "valor": 49.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Beleza e Estética",
            "categoria": "Saúde",
            "descricao": "Máscara facial hidratante, ideal para todos os tipos de pele."
        },
        {
            "nome": "Suplemento de Vitamina C",
            "valor": 39.99,
            "quantidade_em_estoque": 150,
            "fabricante": "Nutrição Saudável",
            "categoria": "Saúde",
            "descricao": "Suplemento de vitamina C em cápsulas, 1000mg."
        },
        {
            "nome": "Banda Elástica para Exercícios",
            "valor": 29.99,
            "quantidade_em_estoque": 200,
            "fabricante": "Fitness Pro",
            "categoria": "Esportes",
            "descricao": "Banda elástica para exercícios de resistência, ideal para treinos em casa."
        },
        {
            "nome": "Roupas de Cama",
            "valor": 199.99,
            "quantidade_em_estoque": 50,
            "fabricante": "Conforto do Lar",
            "categoria": "Móveis",
            "descricao": "Conjunto de roupas de cama, 100% algodão, disponível em várias cores."
        },
        {
            "nome": "Cortina Blackout",
            "valor": 149.99,
            "quantidade_em_estoque": 30,
            "fabricante": "Decoração Prática",
            "categoria": "Móveis",
            "descricao": "Cortina blackout que bloqueia a luz, ideal para quartos."
        },
        {
            "nome": "Tapete Antiderrapante",
            "valor": 89.99,
            "quantidade_em_estoque": 40,
            "fabricante": "Decoração Conforto",
            "categoria": "Móveis",
            "descricao": "Tapete antiderrapante, ideal para áreas internas e externas."
        },
    ]
)