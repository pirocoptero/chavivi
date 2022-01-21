import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Link, Checkbox, Text } from "@chakra-ui/react"

export const Products = () => {
    return (
        <Table size="xs" variant='striped' colorScheme='teal' fontSize={8}>
            <TableCaption py={4} mt={-2} color="purple.700" textAlign="right" fontSize={9} fontWeight={800} placement="top">Selecione o presente que você gostaria de mimar a Vickynha =D</TableCaption>
            <Thead h={6}>
                <Tr color="purple.700">
                    <Th textAlign="left" >ESCOLHER</Th>
                    <Th color="pink.600" fontWeight={900}>TOQUE NO LINK ABAIXO PARA ACESSAR </Th>
                    <Th textAlign="right">VALOR</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://www.magazineluiza.com.br/aquecedor-halogeno-mondial-comfort-air-ii-a-09/p/228886400/ar/arel/?&force=3&seller_id=magazineluiza&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=58927&gclid=CjwKCAiAvriMBhAuEiwA8Cs5lSpbQLiUn06QPLJJMa0PO3u0O-eLZpjpCM7W8Bxv4_5xbg32wj6XORoClHwQAvD_BwE&gclsrc=aw.ds" isExternal>AQUECEDOR </Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$119,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1967629384-kit-berco-americano-4-rolos-arabesco-rosa-antigo-_JM" isExternal>KIT BERÇO BÁSICO </Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$154,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1911694912-protetor-ouvido-abafador-auricular-banz-bebe-infantil-prisma-_JM" isExternal>PROTETOR / ABAFADOR AURICULAR</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$299,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1971523737-banheira-ofuro-beb-babytub-1-a-6-anos-_JM?searchVariation=93336666388#searchVariation=93336666388&position=2&search_layout=grid&type=item&tracking_id=bb86cb86-f0f6-4e8c-bb9f-dfb6d1b67700" isExternal>OFURÔ BABYTUB (BRANCO E DOURADO)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$328,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1713291457-trocador-americano-para-beb-anatmico-_JM" isExternal>TROCADOR (COR ROSE)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$129,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1909733297-tapete-de-atividades-para-beb-piano-unicornio-rosa-maxibaby-_JM#position=9&search_layout=grid&type=item&tracking_id=b74a24e8-6ba3-4eb1-b42e-5897600dbe1c" isExternal>TAPETE DE ATIVIDADES</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$159,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1836111225-conjunto-2-toalhas-de-banho-carters-para-beb-menina-_JM#position=11&search_layout=grid&type=item&tracking_id=9736683a-d2b3-46e4-a54e-103ecf29346b" isExternal>KIT 2 TOALHAS DE BANHO</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$129,25</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1991410838-combo-poltrona-decorativa-opala-deluxe-com-puff-suede-bege-_JM" isExternal>POLTRONA DE AMAMENTAÇÃO OPALA (COR. BEGE)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$420,00 +99$ do frete</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://shopee.com.br/product/429318697/13621927036?smtt=0.538103868-1642090873.3" isExternal>ALMOFADA DE AMAMENTAÇÃO + NINHO (COR SAL ROSA)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$110,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-765198783-promoco-do-ms-wrap-slingcangurucarregador-de-bebesling-_JM?attributes=U0VMRUNJT05FIEEgQ09SIERFU0VKQURB%3AUFJFVE8%3D&quantity=1" isExternal>SLING (CINZA)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$60,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1498664011-aspirador-nasal-de-beb-higiene-nariz-sugador-de-catarro-_JM?searchVariation=54075876867#searchVariation=54075876867&position=2&search_layout=grid&type=item&tracking_id=f5b59ec2-7eef-40b2-bdb7-5e123ade5896" isExternal>SUGADOR DE SUJEIRA DE NARIZ</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$29,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1245429390-desitin-roxo-creme-preventivo-de-assaduras-max-duraco-57g-_JM#position=1&search_layout=grid&type=item&tracking_id=e22085a2-f9f6-4e1c-814c-9203f8fad98e" isExternal>POMADA DESITIN (ROXA) PARA TRATAMENTO DE ASSADURAS</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$36,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-2056259859-kit-pente-e-escova-macia-para-beb-cerdas-naturais-buba-_JM#position=2&search_layout=grid&type=item&tracking_id=2bba5ff9-4165-4f6c-b688-662ac189c5fa" isExternal>KIT ESCOVINHA E PENTE DE CABELO</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$37,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-2036810522-chupeta-ortodontica-avent-soothie-rosa-menina-0-6-meses-rn-_JM?searchVariation=173729095273#searchVariation=173729095273&position=10&search_layout=grid&type=item&tracking_id=b55321c6-cfe0-47f6-b0c9-c35322a90c16" isExternal>CHUPETINHA + PORTA CHUPETA (TEM A TONI TOYS BABY)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$66,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://www.rihappy.com.br/mamadeira-transparente-125-ml-petala-philips-avent/p?idsku=100164415&utm_source=google&utm_medium=cpc&utm_campaign=gss_todos_produtos&gclid=CjwKCAiAvriMBhAuEiwA8Cs5lbAjPVrpCxC4-X8PWTULe2KmkzSYC3rHN7gG0HiF01zSo__dUMwmMhoChWwQAvD_BwE" isExternal>MAMADEIRA AVENT PEQUENA (TEM A TONI TOYS BABY)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$70,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-2019487048-kit-com-10-colmeias-organizadoras-para-beb-brancas-_JM#position=4&search_layout=stack&type=item&tracking_id=323c241b-98c5-4c84-b329-840577be136b" isExternal>COLMÉIA PARA ROUPAS</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$79,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1891046072-6-cestinhas-organizadoras-guarda-roupa-armario-infantil-beb-_JM?searchVariation=90767006684#searchVariation=90767006684&position=4&search_layout=stack&type=item&tracking_id=b0071cab-61d0-41fd-9637-cef3449c0556" isExternal>CAIXINHAS ORGANIZADORAS</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$60,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://www.elo7.com.br/cesto-porta-fraldas-p-kit-higiene-tons-de-rosa-e-branco/dp/10109B8?pp=28&pn=1&nav=sch_pd_sr_1_28&qrid=2T8x07eaATxI#wpm=0&drzv=1&cat=1&rcp=1&hpa=0&lpfcm=0&pso=up&ps2=1&sdps=0&dwhc=1&rch=1&hsv=1&bf=0&pcpe=1&pssb=0&osrlt7=0&ucrq=1&supc=1&psews=0&pnt=1&spsem=0&carf=1&paok=1&droam=0&sgta=1&df=d&rps=0&eesoi=0&srm=1&vpl=1&fsfv=0&ssl=0&sew=0&deac=0&dld=1&wppbm=1&dqs=1&csdm=0&sms=0&spc=1&staa=0&smsm=0&usb=0&sseov=1&ses=0&rcpd=1&wppbd=1&sei=0&cscws=0&disc=1&suf=0&uje=0&smps=0&rfn=0&sedk=0&sewb=0&uso=m&wcld=1&smc=1&dcc=1&idfs=1&psedm=0&osrl=0&lvbbob=1&sum=0&sep=1&auto=1&cpr=0&utp=0&accb=0&fnc=0&oppb=0&secpl=0&lvbbpm=1&wsld=1&uar=1&uaa=1&doar=0&inp=0&sed=0" isExternal>CESTO PORTA FRALDAS</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$72,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1953142186-manta-maternidade-beb-tric-tricot-luxo-promoco-_JM?attributes=SIZE%3AVU4%3D%2CCOLOR_SECONDARY_COLOR%3AQnJhbmNv&quantity=1 (cor BRANCA)" isExternal>MANTA (COR BRANCA)</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$49,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1399772480-caixa-com-5-fralda-de-pano-luxo-68x70cm-com-bainha-cremer-_JM?searchVariation=48762568400#searchVariation=48762568400&position=2&search_layout=grid&type=item&tracking_id=c09d2aec-8595-4b10-a14c-f677c1309422" isExternal>CONJUNTO FRALDAS GRANDES</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$46,00</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1929619723-capa-impermeavel-para-colcho-de-berco-americano-papi-_JM#position=3&search_layout=stack&type=item&tracking_id=1092b693-9200-434b-9e56-ef1ab11d341a" isExternal>PROTETOR DE COLCHÃO</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$32,90</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1893459580-3-lencol-de-berco-malha-c-elastico-americano-100-alg-menina-_JM?searchVariation=85629055088#searchVariation=85629055088&position=4&search_layout=stack&type=item&tracking_id=fb48c668-6fcd-4dac-8f1e-484d077fe4a8" isExternal>3 LENÇÓIS DE BERÇO</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$47,99</Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>
                        <Link fontWeight={600} href="https://produto.mercadolivre.com.br/MLB-1872751519-babador-bandana-kit-10-meninao-c-2-botoes-_JM?searchVariation=83507123640#searchVariation=83507123640&position=9&search_layout=grid&type=item&tracking_id=3a6518ec-6dbb-4461-8bbf-a4498c09a0c7" isExternal>3 BABADORES</Link>
                    </Td>
                    <Td textAlign="right" pr={1} fontSize={7}>R$45,00</Td>
                </Tr>

                <Text mt={8} mb={2} fontSize={12} fontWeight={800}>Outras Sugestões (sem link)</Text>

                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>BOMBA EXTRATORA DE LEITE</Td>
                    <Td></Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>BOLSA TÉRMICA DE SEMENTES PARA CÓLICAS</Td>
                    <Td></Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>LIXO PARA FRALDAS (BRANCO)</Td>
                    <Td></Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>BABÁ ELETRÔNICA</Td>
                    <Td></Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>ROUPINHAS (TAMANHO RN)</Td>
                    <Td></Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>MEIAS</Td>
                    <Td></Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>MACACÃO RN</Td>
                    <Td></Td>
                </Tr>
                <Tr h={8}>
                    <Td w={1} pr={4} textAlign="center">
                        <Checkbox borderColor="purple" colorScheme="purple" />
                    </Td>
                    <Td>BODY RN</Td>
                    <Td></Td>
                </Tr>
            </Tbody>
            <Tfoot>
                <Tr>
                    {/* <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th> */}
                </Tr>
            </Tfoot>
        </Table>
    )
}