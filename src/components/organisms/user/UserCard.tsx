import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React, { FC, ReactNode, memo } from 'react'

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
}

const UserCard: FC<Props> = memo(({id, imageUrl, userName, fullName, onClick}) => {

  return (
    <Box onClick={() => onClick(id)} w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4}_hover={{cursor:"pointer", opacity: 0.8}}>
    <Stack textAlign="center">
      <Image borderRadius="full" boxSize="160px" src={imageUrl} alt={userName} m="auto" />
      <Text fontSize="lg" fontWeight="bold">{userName}</Text>
      <Text fontSize="sm" color="gray">{fullName}</Text>
    </Stack>
  </Box>
  )
})

export default UserCard