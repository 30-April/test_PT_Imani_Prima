import { Box, Center, Grid, GridItem, Input, InputGroup, VStack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import UserProfile from "../UserProfile"

const UserList = () => {
    const [ userData, setUserData ] = useState()
    const [ search, setSearch ] = useState("")

    const fetchDataUser = async() => {
        try {
            const res = await fetch("https://reqres.in/api/users/").then(res => res.json())
            setUserData(res.data)
            console.log(userData)
        } catch (error) {
            console.log(error)
        }
    }

    const renderUserCard = () => {
        return (
            <Grid w='full' templateColumns={'repeat(3, 1fr)'} gap={6}>
                {
                    userData?.map((val) => {
                        if(search){
                            return search === val.first_name || search === val.email || search === val.last_name  ? (
                            <GridItem w='70%'>
                                <UserProfile
                                    firstName = {val.first_name}
                                    lastName = {val.last_name}
                                    avatar = {val.avatar}
                                    email = {val.email}
                                />
                            </GridItem>
                            ) : <></>
                        }
        
                        return( 
                            <GridItem w='70%'>
                                <UserProfile
                                    firstName = {val.first_name}
                                    lastName = {val.last_name}
                                    avatar = {val.avatar}
                                    email = {val.email}
                                />
                            </GridItem>
                        )
                    })
                }
            </Grid>
        )
    }

    console.log(search)

    useEffect(() => {
        fetchDataUser()
    }, [search])
    

    return (
        <>
            <VStack p={2} spacing={10}>
                <Box w='full' p={2} border='1px solid black' fontSize={20}>
                    Users List
                </Box>

                <VStack w='80%' spacing={12}>
                    <Input 
                        defaultValue='' 
                        alignSelf='center' 
                        w='60%' 
                        borderColor='black' 
                        color='black' 
                        type='text' 
                        placeholder="Enter the username/email" 
                        onChange={(event) => {setSearch(event.target.value)}}
                        disabled = {userData ? false : true}
                    />
                    
                    {renderUserCard()}
                </VStack>
            </VStack>
        </>
    )
}

export default UserList