import styled from 'styled-components';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  margin-top: 1rem;
  overflow: auto;
  padding-top: 0px;
  padding: 16px;
  background: ${({ theme: { colors } }) => colors.background};

  @media (min-width: 768px) {
    backdrop-filter: saturate(180%) blur(20px);
    background: ${({ theme: { colors } }) => colors.background};
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 35px 1px;
    height: fit-content;
    margin: auto;
    min-width: 400px;
  }
`;

const Title = styled('h2')`
  display: none;

  @media (min-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const Styles = { Form, Title };
