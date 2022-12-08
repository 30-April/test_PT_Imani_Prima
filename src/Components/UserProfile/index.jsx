import { Avatar, Box, Text, VStack } from "@chakra-ui/react"

const UserProfile = (props) => {
    const { firstName, lastName, email, avatar } = props
    return (
        <VStack spacing={5} boxShadow='dark-lg' border='1px solid darkGrey' p={2}>
            <Avatar
                name = {firstName}
                src = {avatar}
                size = 'xl'
                mt={5}
            />

            <VStack textAlign='center'>
                <Text>{firstName} {lastName}</Text>
                <Text>{email}</Text>
            </VStack>
        </VStack>
    )
}

export default UserProfile