import { Button } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
  loading?: boolean;
}

const PrimaryButton: FC<Props> = ({children, onClick, isDisabled = false, loading = false}) => {

  return (
    <Button colorScheme='teal' onClick={onClick} isLoading={loading} isDisabled={isDisabled || loading}>
      {children}
    </Button>
  )
}

export default PrimaryButton