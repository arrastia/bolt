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

  @media (min-width: 768px) {
    background: ${({ theme: { colors } }) => colors.background};
    background: rgb(255 255 255 / 31%);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 35px 1px;
    border-radius: 10px;
    min-width: 400px;
    margin: auto;
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
