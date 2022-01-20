import { Box, Button, Divider, Flex, Image, Link, Spacer, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import type { NextPage } from 'next'


const Home: NextPage = () => {

  const [isLessThan375w] = useMediaQuery('(max-width: 375px)')
  const [isLessThan360w] = useMediaQuery('(max-width: 360px)')
  const [isLessThan700h] = useMediaQuery('(max-height: 700px)')

  return (
    <Box
      bg='pink.500'
      h={isLessThan700h && isLessThan375w ? '120vh' : '105vh'}
      bgImage='../images/bgstars.png'
      bgPosition={isLessThan375w ? '-165px -105px' : '-165px -145px'}
      bgSize='200%'
    >
      <Flex>
        <Text color='purple.700' w='100%' align='center' fontSize={isLessThan360w ? '8px' : '10px'} fontWeight='800' pt={6}>
          TEMOS A HONRA EM CONVIDAR VOCÊ PARA CELEBRARMOS
        </Text>
      </Flex>
      <Box mb="35px">
        <Text
          color='purple.700' w='100%' align='justify' fontSize={isLessThan360w ? '9px' : '11px'}
          textShadow='1px 1px #e1e1e1' lineHeight={2} fontWeight='600' px={isLessThan375w ? 8 : 14} pt="52%"
        >
          Nossa amada Vicky está para chegar e nós, papais,
          temos a honra em convidá-lo(a) para celebrar conosco a chegada dela e termos um momento de qualidade em família.
          Para confirmar sua presença, clique no botão abaixo, após será lhe apresentado a listinha de presentes =D.
          <Box px={2} pt={3}>
            <Text fontWeight={800}>* Mimos + fralda (M ou G) Pampers ou Huggies</Text>
            <Text fontWeight={800}>* Levar bebida (não alcoólica)</Text>
            <Text fontWeight={800}>* Levar roupa de banho e esportes</Text>
          </Box>
        </Text>
      </Box>
      <Box>
        <Stack spacing={7} direction='column' align='center' bgImage="../images/cloud.png" bgPosition="center -10px" bgSize='100%' h="20vh" pt="10px" mt="-55px">
          <Button w="90%" border="2px solid" borderRadius={50} borderColor="#FFF" mt={8} pt={1.5} fontWeight="800" fontSize={12}
            _active={{ bg: 'pink.600' }} _hover={{ bg: 'pink.400' }} h="45px" color='pink.700' bg="pink.600">
            <Image boxSize="30px" mr="10px" mb={1} src="../images/check.png" />
            CONFIRMAR PRESENÇA
          </Button>
        </Stack>
      </Box>
      <Flex justifyContent="space-between" px={isLessThan375w ? 8 : 14} mt={isLessThan700h ? 2 : 2} h={isLessThan700h ? 200 : 10}>
        <Box>
          <Text color='pink.800' fontWeight='800' fontSize={isLessThan360w ? 12 : "16px"}>
            DATA
          </Text>
          <Box color='white' textShadow='1px 1px #B40081' textAlign="center" s>
            <Text h="35px" borderBottom="2px solid" fontSize={24} fontWeight='800' >
              29-01
            </Text>
            <Text h="36px" fontSize={26} fontWeight='800' my="-1px">
              2022
            </Text>
            <Text fontSize={22} borderTop="2px solid" fontWeight='800'>
              14h00
            </Text>
          </Box>
        </Box>
        <Box>
          <Text color='pink.800' fontWeight='800' fontSize={isLessThan360w ? 12 : "16px"}>
            LOCALIZAÇÃO
          </Text>
          <Stack spacing="9px" color='purple.700' mt={3} align='justify' fontSize={isLessThan360w ? 8 : "10px"} fontWeight='800' textShadow='1px 1px #e1e1e1'>
            <Text>Chácara ARCO</Text>
            <Text>R. Anivaldo Maria Rodrigues, 337</Text>
            <Text>Jardim Planalto - Chapada</Text>
            <Text>Ponta Grossa - PR</Text>
          </Stack>

        </Box>
      </Flex>


    </Box >
  )
}

export default Home
