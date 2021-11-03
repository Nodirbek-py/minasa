import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Cell, FlexBox, Table } from "../components/content";
import { Anchor, Header } from "../components/header";
import { getLocations } from "../store/locationsSlice";

const Locations = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  return (
    <div>
      <Header>
        <Anchor href="/">home</Anchor>
        <Anchor to="/characters">characters</Anchor>
        <Anchor href="/episodes">episodes</Anchor>
        <Anchor href="/locations">locations</Anchor>
        <Anchor href="/watchList">watch list</Anchor>
      </Header>
      <Table>
        <FlexBox>
          <Cell>
            {state.locations.map((location) => (
              <h1>{location.results.name}</h1>
            ))}
            <h1>locations</h1>
          </Cell>
        </FlexBox>
      </Table>
    </div>
  );
};

export default Locations;
