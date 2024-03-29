import { Box, Button, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { memo, FC, useState, ChangeEvent } from 'react';
import PrimaryButton from '../atoms/buttton/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] =useState('');

  const onchangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }

  const onclickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder='ユーザーID' value={userId} onChange={onchangeUserId} />
          <PrimaryButton isDisabled={userId === ""} loading={loading} onClick={onclickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
});