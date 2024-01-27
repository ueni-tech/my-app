import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
  onOpen: () => void
}

const MenuIconButton: FC<Props> = ({onOpen}) => {
  return (
    <IconButton aria-label='メニューボタン' icon={<HamburgerIcon />} size="sm" variant="unstyled" display={{base: "block", md: "none"}} onClick={onOpen} />
  )
}

export default MenuIconButton