import React, { ReactElement, useState } from "react";
import { Box, List, ListItem, Text, Heading, Flex } from "@chakra-ui/core";

interface Props {
  results: Number;
}

export default function ScoreCard(p: Props): ReactElement {
  const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  return (
    <>
      <Flex
        border="solid 2px hsl(217, 16%, 45%)"
        margin="0 auto"
        marginTop="2em"
        marginBottom="2em"
        padding="0.1em"
        justifyContent="space-between"
        borderRadius="0.5em"
        userSelect="none"
        width={["90%", "50%"]}
      >
        <List paddingTop="5px" textAlign="left">
          {options.map((p, i) => (
            <ListItem key={i} margin="-5px" fontWeight="600">
              {p}
            </ListItem>
          ))}
        </List>
        <Box
          background="#fafafa"
          width={["90px", "90px", "90px", "150px"]}
          height="90px"
          margin="10px"
          borderRadius="0.5em"
          textAlign="center"
        >
          <Text
            color="hsl(229, 64%, 46%)"
            fontWeight="bold"
            margin="0"
            marginTop="10px"
          >
            Score
          </Text>
          <Heading
            as="h2"
            fontSize="40px"
            fontWeight="800"
            margin="0"
            color="hsl(229, 25%, 31%)"
          >
            {p.results}
          </Heading>
        </Box>
      </Flex>
    </>
  );
}
