import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, Link as ChakraLink, useDisclosure } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import MenuIconButton from '../../atoms/buttton/MenuIconButton'
import MenuDrawer from '../../molecules/MenuDrawer'

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex as={ReactRouterLink} to="/home" align="center" mr={8} cursor="pointer" >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>ユーザー管理アプリ</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <ChakraLink as={ReactRouterLink} to='/home/user_management'>ユーザー一覧</ChakraLink>
          </Box>
          <ChakraLink as={ReactRouterLink} to='/home/setting'>設定</ChakraLink>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default Header