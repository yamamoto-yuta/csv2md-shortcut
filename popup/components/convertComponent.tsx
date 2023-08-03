import { RepeatIcon, CheckIcon } from "@chakra-ui/icons";
import { Text, Textarea, Kbd, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { executeConvert } from "../../background";
import "../style.scss";

export const ConvertComponent = () => {
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    executeConvert(text);

    const convertStatusElement = document.getElementsByClassName("convert-status")[0] as HTMLElement;
    convertStatusElement.style.opacity = '1';
    setTimeout(() => {
      convertStatusElement.style.opacity = '0'
    }, 5000)
  };

  return (
    <div>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Input CSV table or markdown table to convert..."
      />
      <Button
        leftIcon={<RepeatIcon />}
        colorScheme='teal'
        variant='solid'
        width='100%'
        marginTop={2}
        onClick={handleClick}
      >
        Convert
      </Button>
      <Box
        className="convert-status"
        marginTop={3}
      >
        <Text fontSize="md">
          <CheckIcon /> Finish conversion! <Kbd>Ctrl</Kbd>/<Kbd>Cmd</Kbd>+<Kbd>v</Kbd> to paste converted text.
        </Text>
      </Box>
    </div>
  )
};