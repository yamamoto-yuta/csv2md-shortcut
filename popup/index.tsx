import howToUseImage from "data-base64:~assets/csv2md-how-to-use.png"
import { Center, Box, Image, Heading } from "@chakra-ui/react"
import { useState } from "react"

function IndexPopup() {
    const [data, setData] = useState("")

    return (
        <div
            style={{
                width: "600px",
            }}
        >
            <Center bg="#276749">
                <Heading color="white">How To Use</Heading>
            </Center>
            <Center>
                <Box>
                    <Image src={howToUseImage} alt="Dan Abramov" />
                </Box>
            </Center>
        </div>
    )
}

export default IndexPopup