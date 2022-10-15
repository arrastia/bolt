import styled from 'styled-components';

const Flex = styled('div')`
  display: flex;
`;

const Island = styled('div')`
  align-items: stretch;
  background: white;
  border-radius: 1000px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  color: black;
  display: flex;
  min-height: 56px;
  min-width: 285px;
  transform: translate3d(0, 0, 0);
`;

const Content = styled(Flex)`
  align-items: center;
  display: flex;
  min-width: 100px;
  width: 100%;
`;

const ActionButtons = styled('button')`
  -webkit-box-align: center !important;
  cursor: pointer !important;
  position: relative !important;
  touch-action: manipulation !important;
  font-family: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important;
  font-weight: inherit !important;
  border-radius: 0px !important;
  outline: none !important;
  transition: none 0s ease 0s !important;
  -webkit-tap-highlight-color: transparent !important;
  background: transparent !important;
  border: none !important;
  color: inherit !important;
  display: flex !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: inherit !important;
  text-decoration: none !important;
  height: 100% !important;
  width: 100% !important;
  align-items: center !important;
  min-width: 0px !important;
  user-select: none !important;
`;

const ActionButton = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 36px;
  justify-content: center;
  width: 36px;
  border: 1px solid #dddddd;
  border-radius: 25px;
  margin: 0 10px;
`;

const Text = styled('span')`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
const Text2 = styled('span')`
  color: #717171;

  display: flex;
  font-size: 12px;
  line-height: 16px;
`;

const Search = styled('div')`
  padding: 0 16px 0 20px;
`;

const Button = styled('button')`
  -webkit-box-align: center !important;
  cursor: pointer !important;
  position: relative !important;
  touch-action: manipulation !important;
  font-family: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important;
  font-weight: inherit !important;
  border-radius: 0px !important;
  outline: none !important;
  transition: none 0s ease 0s !important;
  -webkit-tap-highlight-color: transparent !important;
  background: transparent !important;
  border: none !important;
  color: inherit !important;
  display: flex !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: inherit !important;
  text-decoration: none !important;
  height: 100% !important;
  width: 100% !important;
  align-items: center !important;
  min-width: 0px !important;
  user-select: none !important;
`;

export const Styles = {
  ActionButton,
  Content,
  Flex,
  Island,
  ActionButtons,
  Text,
  Text2,
  Search,
  Button
};
