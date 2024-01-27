import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

const MenuDrawer: FC<Props> = ({onClose, isOpen}) => {
  return (
    <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button as={ReactRouterLink} to="/home" w="100%" onClick={onClose}>TOP</Button>
          <Button as={ReactRouterLink} to="/home/user_management" w="100%" onClick={onClose}>ユーザー一覧</Button>
          <Button as={ReactRouterLink} to="/home/setting" w="100%" onClick={onClose}>設定</Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>

  )
}

export default MenuDrawer