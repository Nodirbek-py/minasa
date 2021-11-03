import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Cell, FlexBox, Table } from "../components/content";
import { Anchor, Header } from "../components/header";
import { getEpisodes } from "../store/episodesSlice";

const Episodes = () => {
  const state = useSelector((state) => state.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  return (
    <>
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
            {state.status}
            {state.status === "success" ? (
              state.episodes.results.map((episode) => {
                return (
                  <div>
                    <h5>{episode.name}</h5>
                    <p>{episode.id}</p>
                  </div>
                );
              })
            ) : (
              <h1>Heeey</h1>
            )}
            <h1>episodes</h1>
          </Cell>
        </FlexBox>
      </Table>
    </>
  );
};

export default Episodes;
