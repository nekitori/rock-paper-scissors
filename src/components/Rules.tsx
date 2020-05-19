import React, { ReactElement } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Heading,
  useDisclosure,
  Button,
  Image,
  Icon,
  Box,
} from "@chakra-ui/core";
import { Spring, config } from "react-spring/renderprops";

import RulesImg from "../img/image-rules-bonus.svg";

interface Props {}

export default function Rules(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="outline"
        variantColor="teal"
        color="#fff"
        textTransform="uppercase"
        fontWeight="400"
        paddingRight="2em"
        paddingLeft="2em"
        marginTop={["1em", "1em", "0", "-8em"]}
        marginLeft={["0", "0px", "0", "60em"]}
        onClick={() => onOpen()}
      >
        Rules
      </Button>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={config.gentle}
        >
          {(pr) => (
            <ModalContent
              marginTop={["0", "11em"]}
              height={["100vh", "59vh"]}
              width={["100%", "40%"]}
              style={pr}
              textAlign="center"
            >
              <ModalBody>
                <Heading
                  color="hsl(229, 25%, 31%)"
                  marginTop={["30%", "1em"]}
                  textAlign="center"
                >
                  RULES
                </Heading>
                <Image
                  src={RulesImg}
                  marginLeft={["0", "1em"]}
                  marginTop={["5%", 0]}
                  width={["auto", "50%"]}
                />
                <Button
                  background="none"
                  border="none"
                  marginTop={["15%", "0"]}
                  position={["relative", "absolute"]}
                  top={["none", "10"]}
                  right={["none", "10"]}
                  onClick={() => onClose()}
                >
                  <Icon
                    name="close"
                    size="30px"
                    color="hsl(229, 25%, 31%)"
                    style={{ opacity: 0.3 }}
                  />
                </Button>
              </ModalBody>
            </ModalContent>
          )}
        </Spring>
      </Modal>
    </>
  );
}
