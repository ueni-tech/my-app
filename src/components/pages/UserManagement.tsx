import { Box, Center, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, Text, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';
import { memo, FC, useEffect, useCallback } from 'react';
import UserCard from '../organisms/user/UserCard';
import UserDetailModal from '../organisms/user/UserDetailModal';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useSelectUser } from '../../hooks/useSelectUser';

export const UserManagement: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  console.log(selectedUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user, index) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard id={user.id} onClick={onClickUser} imageUrl={`https://source.unsplash.com/random/${index}`} userName={user.username} fullName={user.name} />
            </WrapItem>
          ))}
        </Wrap >
      )}
      <UserDetailModal user={selectedUser ?? null} isOpen={isOpen} onClose={onClose} />
    </>
  );
});