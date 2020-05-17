import React, { ReactElement } from "react";
import { Box, Image } from "@chakra-ui/core";
import pentagon from "../img/bg-pentagon.svg";

interface PropsIn {
  data: OptionInterface[];
}

interface OptionInterface {
  color: string;
  icons: string;
  type: string;
}

type AddStyle = {
  marginSm: string;
  marginMd: string;
  marginLg: string;
};

type OptionStyles = OptionInterface & AddStyle;

export default function Options(props: PropsIn): ReactElement {
  const OptionC = (p: OptionStyles) => (
    <Box
      key={p.type}
      background={`linear-gradient(${p.color}) fixed`}
      boxShadow="rgba(0,0,0,0.3) inset -3px -3px 3px"
      borderRadius="50%"
      display="inline-block"
      height="85px"
      verticalAlign="top"
      padding="0.5em"
      margin={[p.marginSm, p.marginMd, p.marginLg]}
      textAlign="center"
      width="85px"
    >
      <Box
        background="#fafafa"
        width="55px"
        height="55px"
        padding="0.6em"
        margin="0 auto"
        marginTop="5px"
        borderRadius="50%"
      >
        <Image marginTop="5px" src={p.icons} alt={p.type} width="70%" />
      </Box>
    </Box>
  );
  return (
    <>
      <Box
        background={`url(${pentagon}) no-repeat`}
        backgroundSize="90%"
        margin="0 auto"
        marginTop="50px"
        width={["90%", "60%", "45%", "30%"]}
      >
        <OptionC
          marginSm="75px 0px 0px -18px"
          {...props.data[4]}
          marginMd="75px 0px 0px -18px"
          marginLg="100px 0px 0px -50px"
        />
        <OptionC
          marginSm="-25px 0px 0 35px"
          {...props.data[0]}
          marginMd="-25px 0px 0 35px"
          marginLg="-25px 0px 0 66px"
        />
        <OptionC
          marginSm="75px 0 0 12px"
          {...props.data[1]}
          marginMd="75px 0 0 12px"
          marginLg="100px 0 0 40px"
        />
        <OptionC
          marginSm="50px 25px 25px 15px"
          {...props.data[3]}
          marginMd="50px 25px 25px 15px"
          marginLg="100px 25px 25px 0px"
        />
        <OptionC
          marginSm="50px 25px 25px 20px"
          {...props.data[2]}
          marginMd="50px 25px 25px 20px"
          marginLg="100px 25px 25px 40px"
        />
      </Box>
    </>
  );
}
