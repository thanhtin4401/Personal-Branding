import { styled } from "styled-components";

export const SkillsAndToolsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 0px 64px;
`;

export const Title = styled.div`
  color: #fff;
  row-gap: 16px;
  display: flex;
  flex-direction: column;
  margin: 16px 0px 32px 0px;
  text-align: center;

  .title {
    font-size: 20px;
  }
  .message {
    font-size: 30px;
    color: #4ccbfc;
    font-weight: 700;
  }
  .decription {
    font-size: 16px;
  }
`;
