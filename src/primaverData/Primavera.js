import primavera1 from "../assets/primavera-img/praça/sãoJoãoBatista.png";
import primavera2 from "../assets/primavera-img/Igreja/igrejaFontesMilagres.png";
import primavera3 from "../assets/primavera-img/Hotel/hotelMarphil.png";
import primavera4 from "../assets/primavera-img/Estadio/cardosao.png";
import primavera5 from "../assets/primavera-img/Estadio/poliesportivoDr.AlmirGabriel.png";
import primavera6 from "../assets/primavera-img/Igreja/paróquiaSãoJoãoBatista.png";
import primavera7 from "../assets/primavera-img/Igreja/temploCentral.png";
import primavera8 from "../assets/primavera-img/Lanconete/cachorrao.png";
import primavera9 from "../assets/primavera-img/Lanconete/etnaLançonete.png";
import primavera10 from "../assets/primavera-img/Lanconete/pizzariaSaborbemCaseiro.png";
import primavera11 from "../assets/primavera-img/mercados/mercadoMunicipal.png";
import primavera12 from "../assets/primavera-img/mercados/santoAntonio.png";
import primavera13 from "../assets/primavera-img/praça/pracamatriz.png";
import primavera14 from "../assets/primavera-img/praça/ruthPassarinho.png";
import primavera15 from "../assets/primavera-img/rios-margemcosteira/riodasPedras.png";
import primavera16 from "../assets/primavera-img/rios-margemcosteira/telha.png";
import primavera17 from "../assets/primavera-img/servicosPublicos/bilbiotecaRuthPassarinho.jpg";
import primavera18 from "../assets/primavera-img/servicosPublicos/correios.png";

const Primavera = [
  {
    id: 1,
    img: primavera1,
    name: "Praça São João Batista",
    description: "A Praça São João Batista encanta visitantes com sua atmosfera. Nela, destaca-se um imponente monumento em homenagem a São João, e além disso seus belos jardins floridos, gramados bem cuidados e bancos aconchegantes.",
    slug: "pracaSaoJoao",
    lat: -0.943390, // Exemplo de latitude
    lng: -47.120438, // Exemplo de longitude , 
  },
  {
    id: 2,
    img: primavera2,
    name: "Igreja Fonte dos Milagres",
    description: "A Igreja Evangélica Fonte dos Milagres destaca-se com a sua missão centrada no propósito de Deus. Localizada em uma posição de destaque na entrada da cidade, é um espaço acolhedor para a reflexão e a renovação da esperança.",
    slug: "igrejaFonte",
    lat: -0.951038, // Exemplo de latitude  
    lng: -47.127953, // Exemplo de longitude
  },
  {
    id: 3,
    img: primavera3,
    name: "Hotel Marphil",
    description: "O Hotel Marphil é reconhecido por oferecer conforto e conveniência em um ambiente acolhedor. Com espaços internos bem planejados sendo um dos melhores da região, com seu estacionamento e hospedagem é ideal para os visitantes.",
    slug: "hotelMarphil",
    lat: -0.938567, // Exemplo de latitude 
    lng: -47.114705 // Exemplo de longitude 
  },
  {
    id: 4,
    img: primavera4,
    name: "Estádio Cardosão",
    description: "O Estádio Municipal Cardosão representa a paixão pelo futebol e une a comunidade. Com uma atmosfera vibrante e cheia de energia, é palco de grandes partidas e momentos inesquecíveis que celebram o espírito esportivo de Primavera.",
    slug: "estadioCardosao",
    lat: -0.949695, // Exemplo de latitude  
    lng: -47.126733 // Exemplo de longitude
  },
  {
    id: 5,
    img: primavera5,
    name: "Ginásio Dr. Almir Gabriel",
    description: "Próximo do Cardosão, O Ginásio Municipal Dr. Almir Gabriel é um ponto de encontro vibrante para quem busca lazer e diversão. Com uma infraestrutura que acolhe diferentes modalidades esportivas e eventos, é um espaço que promove o bem-estar.",
    slug: "ginasioDrAlmir",
    lat: -0.948511, // Exemplo de latitude   
    lng: -47.126152, // Exemplo de longitude
  },
  {
    id: 6,
    img: primavera6,
    name: "Igreja São João Batista",
    description: "A Igreja São João Batista é um espaço de serenidade e inspiração, acolhendo visitantes e moradores em um ambiente perfeito para momentos de reflexão e espiritualidade. Sua atmosfera tranquila convida à paz interior e à conexão com o sagrado.",
    slug: "igrejaSãoBatista",
    lat: -0.941093, // Exemplo de latitude  
    lng: -47.116400, // Exemplo de longitude
  },
  {
    id: 7,
    img: primavera7,
    name: "Assembleia de Deus",
    description: "A Igreja Evangélica Assembleia de Deus é um marco de fé e devoção, dedicada a promover valores religiosos e filosóficos que transformam vidas. Com uma forte presença na comunidade, é um espaço de acolhimento, ensino e espiritualidade.",
    slug: "assembleiaDeus",
    lat: -0.942384, // Exemplo de latitude  
    lng: -47.119386, // Exemplo de longitude
  },
  {
    id: 8,
    img: primavera8,
    name: "Cachorrão",
    description: "O Cachorrão é uma lanchonete que se destaca pela combinação irresistível de sabor e preço acessível. Famosa por seus lanches deliciosos, tornou-se um ponto de encontro popular, oferecendo uma experiência simples, mas cheia de sabor.",
    slug: "cachorrao",
    lat: -0.940632, // Exemplo de latitude  

    lng: -47.117238, // Exemplo de longitude
  },
  {
    id: 9,
    img: primavera9,
    name: "Etna",
    description: "O Etna é uma hamburgueria conhecida por seus lanches irresistíveis e seu ambiente vibrante, enriquecido por música que cria uma atmosfera descontraída. Ideal para quem busca sabor e momentos agradáveis.",
    slug: "etna",
    lat: -0.942833, // Exemplo de latitude 
    lng: -47.120166, // Exemplo de longitude
  },
  {
    id: 10,
    img: primavera10,
    name: "Sabor bem Caseiro",
    description: "A pizzaria Sabor Bem Caseiro encanta com pizzas feitas artesanalmente, combinando sabores autênticos e acolhedores. Com um ambiente convidativo, é o destino perfeito para quem aprecia uma boa pizza.",
    slug: "saborCaseiro",
    lat: -0.942561, // Exemplo de latitude , 
    lng: -47.119618, // Exemplo de longitude
  },
  {
    id: 11,
    img: primavera11,
    name: "Mercado Municipal",
    description: "O Mercado Municipal de Primavera é um vibrante ponto de encontro que celebra a cultura local. Ele oferece aos visitantes a oportunidade de experimentar os sabores, aromas e tradições que tornam a região única.",
    slug: "mercadoMunicipal",
    lat: -0.940283, // Exemplo de latitude  
    lng: -47.116621 // Exemplo de longitude
  },
  {
    id: 12,
    img: primavera12,
    name: "Mercado Santo Antonio",
    description: "O Mercadinho Santo Antônio é um dos comércios mais destacados de Primavera, conhecido por sua ampla diversidade de produtos que atendem às necessidades do dia a dia. Sendo uma referência para moradores e visitantes.",
    slug: "mercadoAntonio",
    lat: -0.942637, // Exemplo de latitude 
    lng: -47.119726, // Exemplo de longitude  
  },
  {
    id: 13,
    img: primavera13,
    name: "Praçinha da Paca",
    description: "A Praça da Paca é um dos encantos de Primavera, especialmente durante datas comemorativas como Natal e Ano Novo, quando suas decorações transformam o local em um cenário mágico. É um espaço ideal para momentos de celebração.",
    slug: "pracaMatriz",
    lat: -0.935733, // Exemplo de latitude  
    lng: -47.111488, // Exemplo de longitude
  },
  {
    id: 14,
    img: primavera14,
    name: "Praça Ruth Passarinho",
    description: "A Praça Ruth Passarinho é um refúgio verde no coração da cidade, cercada por árvores e plantas que oferecem um ambiente tranquilo e agradável. Este espaço é um ponto de destaque em Primavera, ideal para momentos de lazer e convivência.",
    slug: "pracaRuth",
    lat: -0.940562, // Exemplo de latitude   
    lng: -47.116849 // Exemplo de longitude
  },
  {
    id: 15,
    img: primavera15,
    name: "Rio das Pedras",
    description: "O Rio das Pedras, com suas águas escuras e geladas, é um dos principais atrativos turísticos da região. Seu ambiente sereno e envolvente oferece um convite perfeito para relaxar e se conectar com a natureza, tornando-se um destino comum para moradores.",
    slug: "rioPedras",
    lat: -0.951886, // Exemplo de latitude  
    lng: -47.116787 // Exemplo de longitude
  },
  {
    id: 16,
    img: primavera16,
    name: "Vila da Telha",
    description: "A Vila da Telha encanta com sua deslumbrante orla, onde a natureza revela todo o seu esplendor. Sua localidade é um pouco distante do munícipio, mesmo assim é um destino imperdível, sua orla e seu rio traz tranquilidade e momentos inesquecíveis.",
    slug: "vilaTelha",
    lat: -0.870591, // Exemplo de latitude 
    lng: -47.079251 // Exemplo de longitude  
  },
  {
    id: 17,
    img: primavera17,
    name: "Biblioteca Rth.Passarinho",
    description: "A Biblioteca Ruth Passarinho é um espaço dedicado ao conhecimento e à leitura, oferecendo uma quantidade decente de livros para diversos gostos. Com um ambiente acolhedor e bem estruturado, é o lugar ideal para mergulhar no aprendizado.",
    slug: "bibliotecaPassarinho",
    lat: -0.943552, // Exemplo de latitude 
    lng: -47.120332, // Exemplo de longitude  
  },
  {
    id: 18,
    img: primavera18,
    name: "Correio Municípal",
    description: "O Correio Municipal, localizado próximo à praça São João Batista, é um ponto essencial para a comunidade. Apesar de sua estrutura compacta, desempenha com eficiência seu papel, conectando pessoas e serviços com praticidade.",
    slug: "correio",
    lat: -0.942795, // Exemplo de latitude , 
    lng: -47.119418, // Exemplo de longitude
  },
];

export default Primavera;
