import React, { ReactElement, useState } from "react";
import { ThemeProvider } from "@chakra-ui/core";

//components
import ScoreCard from "./components/ScoreCard";
import OptionsComponents from "./components/Options";
import Rules from "./components/Rules";
import Steps from "./components/Steps";
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
  const [pick, setPick] = useState(false);
  const [picked, setPicked] = useState(0);
  const [results, setResults] = useState(0);
  const userPicked = (i: string) => {
    switch (i) {
      case arrayOptions[0].type:
        setPicked(0);
        break;
      case arrayOptions[1].type:
        setPicked(1);
        break;
      case arrayOptions[2].type:
        setPicked(2);
        break;
      case arrayOptions[3].type:
        setPicked(3);
        break;
      case arrayOptions[4].type:
        setPicked(4);
        break;
      default:
        break;
    }
    setPick(true);
  };

  const winResult = () => {
    setResults(results + 1);
  };

  const playAgaing = () => {
    setPick(false);
  };

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
        <ScoreCard results={results} />
        {pick ? (
          <Steps
            data={arrayOptions}
            picked={picked}
            winFun={winResult}
            playAgaing={playAgaing}
          />
        ) : (
          <OptionsComponents data={arrayOptions} userPicked={userPicked} />
        )}
        <br />
        <Rules />
      </div>
    </ThemeProvider>
  );
}
