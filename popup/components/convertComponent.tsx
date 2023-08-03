import { RepeatIcon } from "@chakra-ui/icons";
import { Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";
import { executeConvert } from "../../background";

export const ConvertComponent = () => {
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    executeConvert(text);
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
    </div>
  )
};