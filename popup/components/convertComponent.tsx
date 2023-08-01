import { RepeatIcon } from "@chakra-ui/icons";
import { Textarea, Button } from "@chakra-ui/react";

export const ConvertComponent = () => {
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