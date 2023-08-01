import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { QuestionIcon, RepeatIcon } from '@chakra-ui/icons'
import "./style.scss"
import { ConvertComponent } from './components/convertComponent'
import { UsageComponent } from './components/usageComponent'

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
                <UsageComponent />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </div>
  )
}

export default IndexPopup