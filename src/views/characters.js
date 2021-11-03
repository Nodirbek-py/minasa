import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell, FlexBox, Table } from "../components/content";
import { Anchor, Header } from "../components/header";
import { characterActions, getCharacters } from "../store/charactersSlice";

const Characters = () => {
  const state = useSelector((state) => state.characterSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(state.page));
  }, [dispatch, state.page]);

  return (
    <>
      <Header>
        <Anchor href="/">home</Anchor>
        <Anchor to="/characters">characters</Anchor>
        <Anchor href="/episodes">episodes</Anchor>
        <Anchor href="/locations">locations</Anchor>
        <Anchor href="/watchList">watch list</Anchor>
      </Header>
      {state.page}
      <Table>
        {state.status === "fulfilled"
          ? state.character.results.map((post) => {
              return (
                <FlexBox>
                  <Cell>
                    <>
                      <h1 style={{ color: "#000" }}>{post.name}</h1>
                      <p>{post.status}</p>
                    </>
                  </Cell>
                </FlexBox>
              );
            })
          : null}

        <button onClick={() => dispatch(characterActions.filter())}>
          filter
        </button>
        <button onClick={() => dispatch(characterActions.filterDead())}>
          dead
        </button>
        <button onClick={() => dispatch(characterActions.filterUnknown())}>
          unknown
        </button>
        <button onClick={() => dispatch(characterActions.reset())}>
          reset
        </button>
        {state.status === "fulfilled" ? (
          state.character.info.prev === null ? (
            <button disabled>prev</button>
          ) : (
            <button onClick={() => dispatch(characterActions.prev())}>
              prev
            </button>
          )
        ) : null}
        {state.status === "fulfilled" ? (
          state.character.info.next === null ? (
            <button disabled>next</button>
          ) : (
            <button onClick={() => dispatch(characterActions.next())}>
              next
            </button>
          )
        ) : null}
      </Table>
    </>
  );
};

export default Characters;
