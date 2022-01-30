import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getFirestore, query, getDocs, collection, where, addDoc, setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzjtbyvaH96GEy29IyAgPUCi-tC2HWYcY",
  authDomain: "utopix-chavivi.firebaseapp.com",
  projectId: "utopix-chavivi",
  storageBucket: "utopix-chavivi.appspot.com",
  messagingSenderId: "780663219482",
  appId: "1:780663219482:web:293c2b91ab7f387416f8a3"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp)

var products = [
  {
    "id": 0,
    "owner": "",
    "quantity": 1,
    "optional": false,
    "disponible": 1,
    "price": '119,00',
    "link": "https://www.magazineluiza.com.br/aquecedor-halogeno-mondial-comfort-air-ii-a-09/p/228886400/ar/arel/?&force=3&seller_id=magazineluiza&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=58927&gclid=CjwKCAiAvriMBhAuEiwA8Cs5lSpbQLiUn06QPLJJMa0PO3u0O-eLZpjpCM7W8Bxv4_5xbg32wj6XORoClHwQAvD_BwE&gclsrc=aw.ds",
    "name": "AQUECEDOR "
  },
  {
    "id": 1,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '154,00',
    "link": "https://shopee.com.br/product/408720963/15303236659?smtt=0.538103868-1642779897.3",
    "name": "TRANÇA PARA BERÇO - (COR ROSA MÉDIO)"
  },
  {
    "id": 2,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '299,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1911694912-protetor-ouvido-abafador-auricular-banz-bebe-infantil-prisma-_JM",
    "name": "PROTETOR / ABAFADOR AURICULAR"
  },
  {
    "id": 3,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '328,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1971523737-banheira-ofuro-beb-babytub-1-a-6-anos-_JM?searchVariation=93336666388#searchVariation=93336666388&position=2&search_layout=grid&type=item&tracking_id=bb86cb86-f0f6-4e8c-bb9f-dfb6d1b67700",
    "name": "OFURÔ BABYTUB (BRANCO E DOURADO)"
  },
  {
    "id": 4,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '129,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1713291457-trocador-americano-para-beb-anatmico-_JM",
    "name": "TROCADOR (COR ROSE)"
  },
  {
    "id": 5,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '159,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1909733297-tapete-de-atividades-para-beb-piano-unicornio-rosa-maxibaby-_JM#position=9&search_layout=grid&type=item&tracking_id=b74a24e8-6ba3-4eb1-b42e-5897600dbe1c",
    "name": "TAPETE DE ATIVIDADES"
  },
  {
    "id": 6,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '129,25',
    "link": "https://produto.mercadolivre.com.br/MLB-1836111225-conjunto-2-toalhas-de-banho-carters-para-beb-menina-_JM#position=11&search_layout=grid&type=item&tracking_id=9736683a-d2b3-46e4-a54e-103ecf29346b",
    "name": "KIT 2 TOALHAS DE BANHO"
  },
  {
    "id": 7,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '420,00 + 99 (frete)',
    "link": "https://produto.mercadolivre.com.br/MLB-1991410838-combo-poltrona-decorativa-opala-deluxe-com-puff-suede-bege-_JM",
    "name": "POLTRONA DE AMAMENTAÇÃO OPALA (COR. BEGE)"
  },
  {
    "id": 8,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '110,00',
    "link": "https://shopee.com.br/product/429318697/13621927036?smtt=0.538103868-1642090873.3",
    "name": "ALMOFADA DE AMAMENTAÇÃO + NINHO (COR SAL ROSA)"
  },
  {
    "id": 9,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '60,00',
    "link": "https://produto.mercadolivre.com.br/MLB-765198783-promoco-do-ms-wrap-slingcangurucarregador-de-bebesling-_JM?attributes=U0VMRUNJT05FIEEgQ09SIERFU0VKQURB%3AUFJFVE8%3D&quantity=1",
    "name": "SLING (CINZA)"
  },
  {
    "id": 10,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '29,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1498664011-aspirador-nasal-de-beb-higiene-nariz-sugador-de-catarro-_JM?searchVariation=54075876867#searchVariation=54075876867&position=2&search_layout=grid&type=item&tracking_id=f5b59ec2-7eef-40b2-bdb7-5e123ade5896",
    "name": "SUGADOR DE SUJEIRA DE NARIZ"
  },
  {
    "id": 11,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '36,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1245429390-desitin-roxo-creme-preventivo-de-assaduras-max-duraco-57g-_JM#position=1&search_layout=grid&type=item&tracking_id=e22085a2-f9f6-4e1c-814c-9203f8fad98e",
    "name": "POMADA DESITIN (ROXA) PARA TRATAMENTO DE ASSADURAS"
  },
  {
    "id": 12,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '37,00',
    "link": "https://produto.mercadolivre.com.br/MLB-2056259859-kit-pente-e-escova-macia-para-beb-cerdas-naturais-buba-_JM#position=2&search_layout=grid&type=item&tracking_id=2bba5ff9-4165-4f6c-b688-662ac189c5fa",
    "name": "KIT ESCOVINHA E PENTE DE CABELO"
  },
  {
    "id": 13,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '23,80',
    "link": "https://www.amazon.com.br/dp/B07YFC4S7W/ref=cm_sw_r_awdo_navT_a_FJCX0J1DZGD7SASANQZC",
    "name": "CHUPETINHA LOLLY - ROSA (TEM NA TONI TOYS BABY)"
  },
  {
    "id": 14,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '85,00',
    "link": "https://www.rihappy.com.br/mamadeira-transparente-125-ml-petala-philips-avent/p?idsku=100164415&utm_source=google&utm_medium=cpc&utm_campaign=gss_todos_produtos&gclid=CjwKCAiAvriMBhAuEiwA8Cs5lbAjPVrpCxC4-X8PWTULe2KmkzSYC3rHN7gG0HiF01zSo__dUMwmMhoChWwQAvD_BwE",
    "name": "MAMADEIRA AVENT PEQUENA (TEM NA TONI TOYS BABY)"
  },
  {
    "id": 15,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '79,00',
    "link": "https://produto.mercadolivre.com.br/MLB-2019487048-kit-com-10-colmeias-organizadoras-para-beb-brancas-_JM#position=4&search_layout=stack&type=item&tracking_id=323c241b-98c5-4c84-b329-840577be136b",
    "name": "COLMÉIA PARA ROUPAS"
  },
  {
    "id": 16,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '67,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1640289077-6-cestas-organizadoras-pequenas-rattan-para-gaveta-e-armario-_JM",
    "name": "CAIXINHAS ORGANIZADORAS"
  },
  {
    "id": 17,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '72,00',
    "link": "https://www.elo7.com.br/cesto-porta-fraldas-p-kit-higiene-tons-de-rosa-e-branco/dp/10109B8?pp=28&pn=1&nav=sch_pd_sr_1_28&qrid=2T8x07eaATxI#wpm=0&drzv=1&cat=1&rcp=1&hpa=0&lpfcm=0&pso=up&ps2=1&sdps=0&dwhc=1&rch=1&hsv=1&bf=0&pcpe=1&pssb=0&osrlt7=0&ucrq=1&supc=1&psews=0&pnt=1&spsem=0&carf=1&paok=1&droam=0&sgta=1&df=d&rps=0&eesoi=0&srm=1&vpl=1&fsfv=0&ssl=0&sew=0&deac=0&dld=1&wppbm=1&dqs=1&csdm=0&sms=0&spc=1&staa=0&smsm=0&usb=0&sseov=1&ses=0&rcpd=1&wppbd=1&sei=0&cscws=0&disc=1&suf=0&uje=0&smps=0&rfn=0&sedk=0&sewb=0&uso=m&wcld=1&smc=1&dcc=1&idfs=1&psedm=0&osrl=0&lvbbob=1&sum=0&sep=1&auto=1&cpr=0&utp=0&accb=0&fnc=0&oppb=0&secpl=0&lvbbpm=1&wsld=1&uar=1&uaa=1&doar=0&inp=0&sed=0",
    "name": "CESTO PORTA FRALDAS"
  },
  {
    "id": 18,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '49,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1953142186-manta-maternidade-beb-tric-tricot-luxo-promoco-_JM?attributes=SIZE%3AVU4%3D%2CCOLOR_SECONDARY_COLOR%3AQnJhbmNv&quantity=1 (cor BRANCA)",
    "name": "MANTA (COR BRANCA)"
  },
  {
    "id": 19,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '77,90',
    "link": "https://produto.mercadolivre.com.br/MLB-1614742115-fralda-de-pano-luxo-branca-com-bainha-cremer-2-cxs-_JM",
    "name": "CONJUNTO FRALDAS GRANDES"
  },
  {
    "id": 20,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '32,90',
    "link": "https://produto.mercadolivre.com.br/MLB-1929619723-capa-impermeavel-para-colcho-de-berco-americano-papi-_JM#position=3&search_layout=stack&type=item&tracking_id=1092b693-9200-434b-9e56-ef1ab11d341a",
    "name": "PROTETOR DE COLCHÃO"
  },
  {
    "id": 21,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '47,99',
    "link": "https://produto.mercadolivre.com.br/MLB-1893459580-3-lencol-de-berco-malha-c-elastico-americano-100-alg-menina-_JM?searchVariation=85629055088#searchVariation=85629055088&position=4&search_layout=stack&type=item&tracking_id=fb48c668-6fcd-4dac-8f1e-484d077fe4a8",
    "name": "3 LENÇÓIS DE BERÇO"
  },
  {
    "id": 22,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '45,00',
    "link": "https://produto.mercadolivre.com.br/MLB-1872751519-babador-bandana-kit-10-meninao-c-2-botoes-_JM?searchVariation=83507123640#searchVariation=83507123640&position=9&search_layout=grid&type=item&tracking_id=3a6518ec-6dbb-4461-8bbf-a4498c09a0c7",
    "name": "3 BABADORES"
  },
  {
    "id": 23,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "BOMBA EXTRATORA DE LEITE"
  },
  {
    "id": 24,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "BOLSA TÉRMICA DE SEMENTES PARA CÓLICAS"
  },
  {
    "id": 25,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "LIXO PARA FRALDAS (BRANCO)"
  },
  {
    "id": 27,
    "owner": "",
    "quantity": 5,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "ROUPINHAS (TAMANHO RN)"
  },
  {
    "id": 28,
    "owner": "",
    "quantity": 3,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "MEIAS"
  },
  {
    "id": 29,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '22,01',
    "link": "https://shopee.com.br/product/238614917/5742659283?smtt=0.538103868-1643329855.3",
    "name": "B B GORRO DE INVERNO DE TRICÔ - COR WHITE"
  },
  {
    "id": 30,
    "owner": "",
    "quantity": 10,
    "disponible": 1,
    "price": '7,00',
    "link": "https://shopee.com.br/product/436392853/11035273310?smtt=0.538103868-1643330026.3",
    "name": "FAIXINHAS - (ROSA, MARSALA, BRANCO, PRETO, ETC )"
  },
  {
    "id": 31,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '336,00',
    "link": "https://shopee.com.br/product/240788689/9604818905?smtt=0.538103868-1643386489.3",
    "name": "BABÁ ELETRÔNICA - (PLUG EU OU UE)"
  },
  {
    "id": 32,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '26,90',
    "link": "https://shopee.com.br/product/435692544/5593832933?smtt=0.538103868-1643386537.3?smtt=0.538103868-1643386537.3",
    "name": "MACACÃO DE BEBÊ VIRA PÉ ONCINHA - (RN MENINA)"
  },
  {
    "id": 33,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '26,90',
    "link": "https://shopee.com.br/product/435692544/9175145830?smtt=0.538103868-1643386569.3",
    "name": "MACACÃO DE BEBÊ VIRA PÉ BOLINHA - (RN MENINA)"
  },
  {
    "id": 34,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '26,90',
    "link": "https://shopee.com.br/product/435692544/12273217016?smtt=0.538103868-1643386595.3",
    "name": "MACACÃO DE BEBÊ VIRA PÉ CORAÇÃO - (RN MENINA)"
  },
  {
    "id": 35,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '144,00',
    "link": "https://shopee.com.br/product/318122928/6859289898?smtt=0.538103868-1643387445.3",
    "name": "KIT PIJAMINHAS - (RN MENINA)"
  },
  {
    "id": 36,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "MORDEDOR"
  },
  {
    "id": 37,
    "owner": "",
    "quantity": 1,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "CHOCALHO"
  },
  {
    "id": 38,
    "owner": "",
    "quantity": 3,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "LAÇINHOS"
  },
  {
    "id": 39,
    "owner": "",
    "quantity": 10,
    "disponible": 1,
    "price": '',
    "link": "",
    "name": "OUTROS"
  },
]





// products.forEach((obj) => {

//   setDoc(doc(db, 'products', `${obj.id}`), {
//     id: obj.id,
//     name: obj.name,
//     owner: obj.owner,
//     link: obj.link,
//     price: obj.price,
//     quantity: obj.quantity,
//     disponible: obj.disponible
//   }).then((objRef) => {
//     console.log('Document writted with ID: ', objRef);
//   }).catch(function (error) {
//     console.error("Error adding document: ", error);
//   });

// })


