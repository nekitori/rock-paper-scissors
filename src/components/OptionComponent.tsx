import React, { ReactElement } from "react";
import { Box, Image } from "@chakra-ui/core";

interface Props {
  color: string;
  icons: string;
  type: string;
  marginSm: string;
  marginMd: string;
  marginLg: string;
  width: string;
  userPicked: Function;
}

export default function OptionComponent(p: Props): ReactElement {
  return (
    <>
      <Box
        key={p.type}
        background={`linear-gradient(${p.color}) fixed`}
        boxShadow="rgba(0,0,0,0.3) inset -3px -3px 3px"
        borderRadius="50%"
        display="inline-block"
        height={p.width === "sm" ? "85px" : ["130px", "150px", "230px"]}
        verticalAlign="top"
        padding="0.5em"
        cursor="pointer"
        userSelect="none"
        onClick={() => p.userPicked(p.type)}
        margin={[p.marginSm, p.marginMd, p.marginLg]}
        textAlign="center"
        width={p.width === "sm" ? "85px" : ["130px", "150px", "230px"]}
      >
        <Box
          background="#fafafa"
          width={p.width === "sm" ? "55px" : ["95px", "120px", "180px"]}
          height={p.width === "sm" ? "55px" : ["95px", "120px", "180px"]}
          padding="0.6em"
          margin="0 auto"
          marginTop={p.width === "sm" ? "5px" : ["8px", "15px", "18px"]}
          borderRadius="50%"
        >
          <Image
            marginTop={p.width === "sm" ? "5px" : "10px"}
            src={p.icons}
            alt={p.type}
            width="70%"
          />
        </Box>
      </Box>
    </>
  );
}
