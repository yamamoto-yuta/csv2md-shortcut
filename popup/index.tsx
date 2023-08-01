import { Button, ChakraProvider, Textarea } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { HStack, StackDivider } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { QuestionIcon, RepeatIcon } from '@chakra-ui/icons'
import "./style.scss"

const ConvertComponent = () => {
  return (
    <div>
      <Textarea placeholder="Input CSV table or markdown table to convert..." />
      <Button
        leftIcon={<RepeatIcon />}
        colorScheme='teal'
        variant='solid'
        width='100%'
        marginTop={2}
      >
        Convert
      </Button>
    </div>
  )
};

const Usagecomponent = () => {
  return (
    <div className="popup-content">
      <div className="column">
        <div className="usage-text">
          <div>
            1. Select text
          </div>
        </div>
        <div className="usage-content">
          <div>
            <span className="text-selected">a,b<br />c,d</span>
          </div>
        </div>
        <div className="usage-content">
          <div>
            <span className="text-selected">| a | b |<br />| --- | --- |<br />| c | d |</span>
          </div>
        </div>
        <div className="usage-content">
          <div>
            (Otherwise)
          </div>
        </div>
      </div>

      <div className="column">
        <div className="usage-text">
          <div>
            2. Use shortcut
          </div>
        </div>
        <div className="usage-content">
          <div>
            Win: <Kbd>Alt</Kbd>+<Kbd>j</Kbd><br />
            Mac: <Kbd>Cmd</Kbd>+<Kbd>j</Kbd>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="usage-text">
          <div>
            3. Save conveted text<br />on clipbard
          </div>
        </div>
        <div className="usage-content">
          <HStack
            bg="lightgray"
            divider={<StackDivider borderColor='gray.200' />}
            spacing={1}
            padding={3}
          >
            <Text fontSize="3xl">
              📋
            </Text>
            <Box
              paddingLeft={3}
            >
              | a | b |<br />| --- | --- |<br />| c | d |
            </Box>
          </HStack>
        </div>
        <div className="usage-content">
          <HStack
            bg="lightgray"
            divider={<StackDivider borderColor='gray.200' />}
            spacing={1}
            padding={3}
          >
            <Text fontSize="3xl">
              📋
            </Text>
            <Box
              paddingLeft={3}
            >
              a, b<br />c, d
            </Box>
          </HStack>
        </div>
        <div className="usage-content">
          <HStack
            bg="lightgray"
            divider={<StackDivider borderColor='gray.200' />}
            spacing={1}
            padding={3}
          >
            <Text fontSize="3xl">
              📋
            </Text>
            <Box
              paddingLeft={3}
            >
              | col1 | col2 | col3 |<br />| --- | --- | --- |<br />| | | |
            </Box>
          </HStack>
        </div>
      </div>

      <div className="column">
        <div className="usage-text">
          <div>
            4. Paste
          </div>
        </div>
        <div className="usage-content">
          <div>
            Win: <Kbd>Ctrl</Kbd>+<Kbd>v</Kbd><br />
            Mac: <Kbd>Cmd</Kbd>+<Kbd>v</Kbd>
          </div>
        </div>
      </div>
    </div>
  )
};

const IndexPopup = () => {
  return (
    <div className="popup">
      <ChakraProvider>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            <Tab>
              <RepeatIcon color="green.500" />Convert
            </Tab>
            <Tab>
              <QuestionIcon color="blue.500" />Usage
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div>
                <ConvertComponent />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <Usagecomponent />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </div>
  )
}

export default IndexPopup