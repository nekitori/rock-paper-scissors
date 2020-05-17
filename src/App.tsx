import React, { ReactElement } from "react";
import { ThemeProvider, Button } from "@chakra-ui/core";

//components
import ScoreCard from "./components/ScoreCard";
import OptionsComponents from "./components/Options";
//icons
import Scissors from "./img/icon-scissors.svg";
import Paper from "./img/icon-paper.svg";
import Rock from "./img/icon-rock.svg";
import Lizard from "./img/icon-lizard.svg";
import Cyan from "./img/icon-spock.svg";

interface optionsInterface {
  color: string;
  icons: string;
  type: string;
}

export default function App(): ReactElement {
  const arrayOptions: optionsInterface[] = [
    {
      color: "hsl(39, 89%, 49%), hsl(40, 84%, 53%)",
      icons: Scissors,
      type: "Scissors",
    },
    {
      color: "hsl(230, 89%, 62%), hsl(230, 89%, 65%)",
      icons: Paper,
      type: "Paper",
    },
    {
      color: "hsl(349, 71%, 52%), hsl(349, 70%, 56%)",
      icons: Rock,
      type: "Rock",
    },
    {
      color: "hsl(261, 73%, 60%), hsl(261, 72%, 63%)",
      icons: Lizard,
      type: "Lizard",
    },
    {
      color: "hsl(189, 59%, 53%), hsl(189, 58%, 57%)",
      icons: Cyan,
      type: "Cyan",
    },
  ];
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center" }}>
        <ScoreCard />
        <OptionsComponents data={arrayOptions} />
        <Button
          variant="outline"
          variantColor="teal"
          color="#fff"
          textTransform="uppercase"
          fontWeight="400"
          paddingRight="2em"
          paddingLeft="2em"
          marginTop={["1em", "1em", "0", "-5em"]}
          marginLeft={["0", "0px", "0", "70em"]}
        >
          Rules
        </Button>
      </div>
    </ThemeProvider>
  );
}
