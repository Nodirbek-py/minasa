import React from "react";
import { Cell, FlexBox, Table } from "../components/content";
import { Header, Anchor } from "../components/header";

const Home = () => {
  return (
    <>
      <Header>
        <Anchor href="/">home</Anchor>
        <Anchor href="/characters">characters</Anchor>
        <Anchor href="/episodes">episodes</Anchor>
        <Anchor href="/locations">locations</Anchor>
        <Anchor href="/watchList">watch list</Anchor>
      </Header>
      <Table>
        <FlexBox>
          <Cell>Home</Cell>
        </FlexBox>
      </Table>
    </>
  );
};

export default Home;
