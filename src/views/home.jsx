import { Button, ButtonGroup, Typography } from "@material-ui/core";
import React from "react";
import { FlexBox, Div, Anchor, Cell, Table } from "../components/style";

const Home = () => {
  return (
    <>
      <Div>
        <Anchor href="">characters</Anchor>
        <Anchor href="">episodes</Anchor>
        <Anchor href="">locations</Anchor>
        <Anchor href="">watch list</Anchor>
      </Div>
      <Table>
        <FlexBox>
          <Cell>
            <Typography variant="p" gutterBottom component="div">
              Name
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="p" gutterBottom component="div">
              Nmae
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="p" gutterBottom component="div">
              Name
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="p" gutterBottom component="div">
              Name
            </Typography>
          </Cell>
        </FlexBox>
      </Table>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ButtonGroup
          color="secondary"
          aria-label="medium secondary button group"
        >
          <Button>Hey</Button>
          <Button>Heeey</Button>
        </ButtonGroup>
      </div>
    </>
  );
};
export default Home;
