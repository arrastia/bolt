import styled from 'styled-components';

export const MenuContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  position: absolute;
  z-index: 9999999;
  margin-top: 1rem;
`;

export const MenuTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const MenuItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
`;

export const Styles = {};
