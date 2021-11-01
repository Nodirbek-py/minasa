import styled from "styled-components";

const Div = styled.div`
  border: 1px solid #456;
  padding: 20px;
  display: flex;
  align-items: center;
`;
const Anchor = styled.a`
  color: #fff;
  font-size: 18px;
  margin-right: 20px;
`;

const Table = styled.div`
  margin: 50px auto;
  width: 70%;
  border: 1px solid #fff;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 3px 0;
`;

const Cell = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
export { Div, FlexBox, Anchor, Cell, Table };
