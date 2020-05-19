import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/core";
import { Spring, config } from "react-spring/renderprops";
import pentagon from "../img/bg-pentagon.svg";
import OptionC from "./OptionComponent";

interface PropsIn {
  data: OptionInterface[];
  userPicked: Function;
}

interface OptionInterface {
  color: string;
  icons: string;
  type: string;
}

export default function Options(props: PropsIn): ReactElement {
  return (
    <>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.gentle}>
        {(pr) => (
          <Box style={pr}>
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
                userPicked={props.userPicked}
                marginMd="75px 0px 0px -18px"
                marginLg="100px 0px 0px -50px"
                width="sm"
              />
              <OptionC
                marginSm="-25px 0px 0 35px"
                {...props.data[0]}
                marginMd="-25px 0px 0 35px"
                userPicked={props.userPicked}
                marginLg="-25px 0px 0 66px"
                width="sm"
              />
              <OptionC
                marginSm="75px 0 0 12px"
                {...props.data[1]}
                marginMd="75px 0 0 12px"
                userPicked={props.userPicked}
                marginLg="100px 0 0 40px"
                width="sm"
              />
              <OptionC
                marginSm="50px 25px 25px 15px"
                {...props.data[3]}
                marginMd="50px 25px 25px 15px"
                userPicked={props.userPicked}
                marginLg="100px 25px 25px 0px"
                width="sm"
              />
              <OptionC
                marginSm="50px 25px 25px 20px"
                {...props.data[2]}
                marginMd="50px 25px 25px 20px"
                marginLg="100px 25px 25px 40px"
                userPicked={props.userPicked}
                width="sm"
              />
            </Box>
          </Box>
        )}
      </Spring>
    </>
  );
}
