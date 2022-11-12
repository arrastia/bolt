import styled from 'styled-components';

const ActionButtons = styled('div')`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

const Header = styled('header')`
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding: 14px 16px 0 16px;
  position: fixed;
  width: 100%;
  z-index: 9999999999;

  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 14px 24px 14px 24px;
    width: 100%;
  }
`;

export const Styles = { ActionButtons, Header };
