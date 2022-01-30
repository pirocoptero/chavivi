import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Link, Checkbox, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { db } from "../services/firebase"
import { collection, doc, getDocs } from "firebase/firestore"


export const Products = (props: any) => {

    const { products, setProductsChecked, productsChecked } = props;

    useEffect(() => {

    }, [])


    return (
        <Table size="xs" variant='striped' colorScheme='teal' fontSize={8}>
            <TableCaption py={4} mt={-1} color="purple.700" textAlign="left" fontSize={9} fontWeight={800} placement="top">Selecione o presente que você gostaria de mimar a Vickynha =D</TableCaption>
            <Thead h={0}>
                <Tr color="purple.700">
                    <Th color="pink.600" fontWeight={900} fontSize={7}>SELECIONE </Th>
                    <Th color="pink.600" fontWeight={900} fontSize={7} pl={4}>TOQUE NO LINK ABAIXO PARA ACESSAR </Th>
                    <Th textAlign="right"></Th>
                </Tr>
            </Thead>
            <Tbody>

                {
                    products.map((product: any) => {

                        if (product.link != '') {
                            return (
                                <Tr key={product.id} h={8} opacity={product.quantity > 0 ? 1 : 0.5}>
                                    <Td pl={2} textAlign="left">
                                        <Checkbox h={10} borderColor="purple" colorScheme="purple" isDisabled={product.quantity <= 0 ? true : false}
                                            onChange={(e) => {
                                                if (e.target.checked && !productsChecked.includes(product.id)) {
                                                    setProductsChecked([
                                                        ...productsChecked, product
                                                    ])

                                                } else {
                                                    const filteredItems = productsChecked.filter((item: any) => item.id != product.id)
                                                    setProductsChecked(
                                                        filteredItems
                                                    )
                                                }
                                            }}
                                        />
                                    </Td>
                                    <Td textAlign="left" pl={2} pt={1}>
                                        {
                                            product.link != '' ? <Link noOfLines={1} ml={-3} fontWeight={600} href={product.link} isExternal>{product.name} </Link> : <Text isTruncated ml={-3} fontWeight={600}>{product.name}</Text>
                                        }

                                    </Td>
                                    <Td textAlign="right" pr={2} fontSize={7}>
                                        {
                                            product.link != '' ? 'R$ ' + product.price : 'Quantidade: ' + product.quantity
                                        }
                                    </Td>
                                </Tr>
                            )
                        }

                        if (product.id == 39) {
                            return (
                                <>
                                    <Tr h={12} textAlign="left" pb={4} fontSize={12} fontWeight={800}>
                                        <td></td>
                                        <td>Outras Sugestões (sem link)</td>
                                        <td></td>
                                    </Tr>
                                    <Tr key={product.id} h={10} opacity={product.quantity > 0 ? 1 : 0.5}>
                                        <Td pl={2} textAlign="left">
                                            <Checkbox borderColor="purple" colorScheme="purple" isDisabled={product.quantity <= 0 ? true : false}
                                                onChange={(e) => {
                                                    if (e.target.checked && !productsChecked.includes(product.id)) {
                                                        setProductsChecked([
                                                            ...productsChecked, product
                                                        ])

                                                    } else {
                                                        const filteredItems = productsChecked.filter((item: any) => item.id != product.id)
                                                        setProductsChecked(
                                                            filteredItems
                                                        )
                                                    }
                                                }}
                                            />
                                        </Td>
                                        <Td textAlign="left" pl={2} pt={1}>
                                            {
                                                product.link != '' ? <Link noOfLines={1} ml={-3} fontWeight={600} href={product.link} isExternal>{product.name} </Link> : <Text isTruncated ml={-3} fontWeight={600}>{product.name}</Text>
                                            }

                                        </Td>
                                        <Td textAlign="right" pr={2} fontSize={7}>
                                            {
                                                product.link != '' ? 'R$ ' + product.price : 'Quantidade: ' + product.quantity
                                            }
                                        </Td>
                                    </Tr>
                                </>
                            )
                        }

                        if (product.link == '') {
                            return (
                                <Tr key={product.id} h={10} opacity={product.quantity > 0 ? 1 : 0.5}>
                                    <Td pl={2} textAlign="left">
                                        <Checkbox borderColor="purple" colorScheme="purple" isDisabled={product.quantity <= 0 ? true : false}
                                            onChange={(e) => {
                                                if (e.target.checked && !productsChecked.includes(product.id)) {
                                                    setProductsChecked([
                                                        ...productsChecked, product
                                                    ])

                                                } else {
                                                    const filteredItems = productsChecked.filter((item: any) => item.id != product.id)
                                                    setProductsChecked(
                                                        filteredItems
                                                    )
                                                }
                                            }}
                                        />
                                    </Td>
                                    <Td textAlign="left" pl={2}>
                                        {
                                            product.link != '' ? <Link noOfLines={1} ml={-3} fontWeight={600} href={product.link} isExternal>{product.name} </Link> : <Text isTruncated ml={-3} fontWeight={600}>{product.name}</Text>
                                        }

                                    </Td>
                                    <Td textAlign="right" pr={2} fontSize={7}>
                                        {
                                            product.link != '' ? 'R$ ' + product.price : 'Quantidade: ' + product.quantity
                                        }
                                    </Td>
                                </Tr>
                            )
                        }




                    })
                }


                {/* <Text mt={8} mb={2} fontSize={12} fontWeight={800}>Outras Sugestões (sem link)</Text> */}


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