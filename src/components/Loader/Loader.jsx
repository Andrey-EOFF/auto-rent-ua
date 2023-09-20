import React from "react";
import { Circles } from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Loader () {
  return (
    <LoaderWrapper>
      <Circles color="#306cce" size={80} loading={true} />
    </LoaderWrapper>
  );
}
