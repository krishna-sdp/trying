import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  // padding-left: 15px;
  // padding-right: 15px;
  @media (max-width: 576px) {
    max-width: 100%;
    overflow:hidden;
  }
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 2560px) {
    max-width: 2450px;
  }
`;