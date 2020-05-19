import React, { ReactElement, useState, useEffect } from "react";
import { Flex, Heading, Spinner, Box, Button } from "@chakra-ui/core";
import { Spring, config } from "react-spring/renderprops";
import OptionC from "./OptionComponent";

interface Props {
  data: OptionInterface[];
  picked: number;
  winFun: Function;
  playAgaing: Function;
}
interface OptionInterface {
  color: string;
  icons: string;
  type: string;
}
export default function Steps(props: Props): ReactElement {
  const [housePick, setHousePick] = useState(-1);
  const [result, setResult] = useState("");
  const [showS, setShowS] = useState(false);
  useEffect(() => {
    handleHousePick();
  }, []);

  useEffect(() => {
    let userPick = props.data[props.picked].type;
    if (housePick > -1) {
      let houseSelec = props.data[housePick].type;
      if (userPick === "Scissors") {
        if (houseSelec === "Rock" || houseSelec === "Cyan") {
          setResult("LOSE");
        } else if (houseSelec === userPick) {
          setResult("TIED");
        } else {
          setResult("WIN");
          props.winFun();
        }
        setShowS(true);
      } else if (userPick === "Paper") {
        if (houseSelec === "Rock" || houseSelec === "Cyan") {
          setResult("WIN");
          props.winFun();
        } else if (houseSelec === userPick) {
          setResult("TIED");
        } else {
          setResult("LOSE");
        }
        setShowS(true);
      } else if (userPick === "Rock") {
        if (houseSelec === "Lizard" || houseSelec === "Scissors") {
          setResult("WIN");
          props.winFun();
        } else if (houseSelec === userPick) {
          setResult("TIED");
        } else {
          setResult("LOSE");
        }
        setShowS(true);
      } else if (userPick === "Lizard") {
        if (houseSelec === "Cyan" || houseSelec === "Paper") {
          setResult("WIN");
          props.winFun();
        } else if (houseSelec === userPick) {
          setResult("TIED");
        } else {
          setResult("LOSE");
        }
        setShowS(true);
      } else if (userPick === "Cyan") {
        if (houseSelec === "Scissors" || houseSelec === "Rock") {
          setResult("WIN");
          props.winFun();
        } else if (houseSelec === userPick) {
          setResult("TIED");
        } else {
          setResult("LOSE");
        }
        setShowS(true);
      }
    }
  }, [housePick]);

  const handleHousePick = () => {
    let randomNum = -1;
    setTimeout(() => {
      while (randomNum > 4 || randomNum < 0) {
        randomNum = Math.random() * 5;
      }
      setHousePick(Math.round(randomNum));
    }, 2000);
  };

  return (
    <>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.gentle}>
        {(pr) => (
          <Flex
            justifyContent={["space-around", "center"]}
            marginTop="5em"
            style={pr}
          >
            <OptionC
              marginSm="0"
              {...props.data[props.picked]}
              userPicked={() => {}}
              marginMd="0 1em 0 0"
              marginLg="0 2em 0 0"
              width="lg"
            />
            {housePick > -1 ? (
              <OptionC
                marginSm="0"
                {...props.data[housePick]}
                userPicked={() => {}}
                marginMd="0 0 0 1em"
                marginLg="0 0 0 2em"
                width="lg"
              />
            ) : (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                width={["130px", "150px", "230px"]}
                height={["130px", "150px", "230px"]}
                size="xl"
              />
            )}
          </Flex>
        )}
      </Spring>
      {showS && (
        <Box>
          <Flex justifyContent={["space-around", "center"]}>
            <Heading
              fontSize="20px"
              fontWeight="400"
              marginLeft="2.3em"
              margin={["1em", "1em 3em 0 2em"]}
            >
              You Picked
            </Heading>
            <Heading
              fontSize="20px"
              fontWeight="400"
              marginRight="0.8em"
              margin={["1em", "1em 0 0 7em"]}
            >
              The House Picked
            </Heading>
          </Flex>
          <Box>
            <Heading fontSize="40px" marginBottom="0.3em">
              YOU {result}!!
            </Heading>
            <Button
              size="lg"
              color="hsl(229, 25%, 31%)"
              border="none"
              onClick={() => props.playAgaing()}
            >
              PLAY AGAIN
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
