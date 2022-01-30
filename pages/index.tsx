import { Box, Button, Divider, Flex, FormControl, FormHelperText, FormLabel, Image, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, useDisclosure, useMediaQuery, useToast } from '@chakra-ui/react'
import { collection, doc, getDocs, onSnapshot, orderBy, query, QuerySnapshot, updateDoc, where } from 'firebase/firestore';
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { getSystemErrorName } from 'util';
import { MyModal } from '../src/components/MyModal';
import { Products } from '../src/components/Products';
import { db } from "../src/services/firebase";


const Home: NextPage = () => {

  const [isLessThan375w] = useMediaQuery('(max-width: 375px)')
  const [isLessThan360w] = useMediaQuery('(max-width: 360px)')
  const [isLessThan736h] = useMediaQuery('(max-height: 736px)')
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState<any[]>([])
  const [productsChecked, setProductsChecked] = useState<any[]>([])
  const productsRef = collection(db, 'products');

  const [name, setName] = useState('');

  const q = query(collection(db, "products"))


  useEffect(() => {
    getProducts();

    // // REALTIME LISTENER - REAJE AS MUDANÇAS NO FIRESTORE DATABASE
    // const unsubscribe = onSnapshot(doc(db, "products", "disponible"), (doc) => {
    //   setProducts(
    //     [doc]
    //   )
    // })
    // return () => {
    //   unsubscribe()
    // }
  }, [])


  const getProducts = async () => {
    setProducts([])
    setProductsChecked([])
    const q = query(productsRef, orderBy('link', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setProducts(querySnapshot.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    })
  }

  const updateProduct = async ([...productsChecked], name: string) => {
    setIsLoading(true);
    productsChecked.map((product: any) => {
      const productRef = doc(db, 'products', product.id)
      updateDoc(productRef, {
        owner: name + '-' + product.owner,
        quantity: product.quantity - 1,
      }).then(() => {
        console.log('ATUALIZADO COM SUCESSO: ');
        setIsLoading(false);
      }).catch(function (error) {
        console.error("ERRO AO CONFIRMAR: ", error);
      });
    }
    )
  }

  return (
    <>

      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Box
        bg='pink.500'
        h={isLessThan736h && isLessThan375w ? '125vh' : '115vh'}
        bgImage='../images/bgstars.png'
        bgPosition={isLessThan375w ? '-165px -115px' : '-165px -145px'}
        bgSize='200%'
      >
        <Flex>
          <Text color='purple.700' w='100%' align='center' fontSize={isLessThan375w ? '0.52rem' : '0.6rem'} fontWeight='800' pt={6}>
            TEMOS A HONRA EM CONVIDAR VOCÊ PARA CELEBRARMOS
          </Text>
        </Flex>
        <Flex mb="35px">
          <Box
            color='purple.700' w='100%' align='justify' fontSize={isLessThan360w ? '9px' : '11px'}
            textShadow='1px 1px #e1e1e1' lineHeight={2} fontWeight='600' px={isLessThan375w ? 8 : 12} pt="52%"
          >
            Nossa amada Vicky está para chegar e nós, papais,
            temos a honra em convidá-lo(a) para celebrar conosco a chegada dela e termos um momento de qualidade em família.
            O chá será no estilo CHARREATA, então durante duas horas (15h - 17h) estaremos recebendo cada um. Optamos por esse modelo para zelar pela segurança da mamãe e de todos os envolvidos.
            Para confirmar sua presença, clique no botão abaixo, após será apresentado a listinha de presentes =D.
            <Box px={2} pt={6}>
              <Text fontSize={10} fontWeight={800}>* Mimos + fralda (M ou G) Pampers ou Huggies</Text>
            </Box>
          </Box>
        </Flex>
        <Box>
          <Stack direction='column' align='center' bgImage="../images/cloud.png" bgPosition="center -10px" bgSize='100%' h="21vh" mt="-45px">
            <Button
              onClick={() => {
                onOpen()
              }}
              w="90%" border="2px solid" borderRadius={50} borderColor="#FFF" mt={12} pt={1.5} fontWeight="800" fontSize={12}
              _active={{ bg: 'pink.600' }} _hover={{ bg: 'pink.400' }} h="45px" color='pink.700' bg="pink.600">
              <Image boxSize="30px" mr="10px" mb={1} src="../images/check.png" />
              CONFIRMAR PRESENÇA
            </Button>
          </Stack>
        </Box>
        <Flex justifyContent="space-between"
          px={isLessThan375w ? 8 : 12}
        >
          <Box>
            <Text color='pink.800' fontWeight='800' fontSize={isLessThan375w ? 14 : "16px"}>
              DATA
            </Text>
            <Box color='white' textShadow='1px 1px #B40081' textAlign="center" mt={2}>
              <Text h="2rem" borderBottom="2px solid" fontSize={24} fontWeight='800' >
                13-02
              </Text>
              <Text h="2rem" fontSize={26} fontWeight='800'>
                2022
              </Text>
              <Text fontSize={22} borderTop="2px solid" fontWeight='800'>
                15h00
              </Text>
            </Box>
          </Box>
          <Box>
            <Text color='pink.800' fontWeight='800' fontSize={isLessThan375w ? 14 : "16px"}>
              LOCALIZAÇÃO
            </Text>
            <Stack spacing="8px" color='purple.700' mt={3} align='justify' fontSize={isLessThan375w ? "0.58rem" : "10px"} fontWeight='800' textShadow='1px 1px #e1e1e1'>
              <Text>Cond. Maresia</Text>
              <Text>R. Anivaldo Maria Rodrigues, 337</Text>
              <Text>Jardim Planalto - Chapada</Text>
              <Text>Ponta Grossa - PR</Text>
            </Stack>

          </Box>
        </Flex>

        <Modal size="sm" isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent color="purple.700">
            <ModalHeader textAlign="center" fontSize={14} mt={1} fontWeight={800}>CONFIRMAÇÃO DE PRESENÇA</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <Input id='name' type='name' fontWeight={600} mt={-2} placeholder="Seu nome e sobrenome" value={name} onChange={(e) => {
                  setName(e.target.value)
                }} />
              </FormControl>



              <Box mt={2}>
                <Products products={products} setProducts={setProducts} productsChecked={productsChecked} setProductsChecked={setProductsChecked} name={name} />
              </Box>


            </ModalBody>

            <ModalFooter mb={0}>
              <Button isFullWidth
                onClick={(e) => {
                  e.preventDefault();
                  if (name.trim().indexOf(' ') == -1 && !toast.isActive('name')) {
                    toast({
                      id: 'name',
                      title: `Informe seu nome e sobrenome`,
                      status: "error",
                      position: "top",
                    })
                    return
                  }
                  if (productsChecked.length == 0 && !toast.isActive('productsChecked')) {
                    toast({
                      id: 'productsChecked',
                      title: `Selecione uma das opções da lista`,
                      status: "error",
                      position: "top",
                    })
                    return
                  }
                  else {
                    if (name.trim().indexOf(' ') != -1 &&  productsChecked.length > 0 && !toast.isActive('success')) {
                      const updateResult = updateProduct(productsChecked, name)
                      updateResult.finally(() => {
                        toast({
                          id: 'success',
                          title: `Presença confirmada`,
                          description: "Obrigado por confirmar sua presença",
                          status: "success",
                          position: "bottom",
                        })
                        setName('')
                        getProducts()
                      })
                    }
                  }
                }}
                // isDisabled={name == ''}
                isLoading={isLoading}
                border="2px solid" borderRadius={50} borderColor="#FFF" pt={1} fontWeight="800" fontSize={12}
                _active={{ bg: 'pink.600' }} _hover={{ bg: 'pink.400' }} h="45px" color='pink.700' bg="pink.600">
                CONFIRMAR PRESENÇA
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Box >
    </>
  )
}

export default Home
