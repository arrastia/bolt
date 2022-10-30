import styled from 'styled-components';

const Sidebar = styled('aside')<{ isMenuVisible: boolean }>`
  border-right: 1px solid #dbdbe0;
  border-color: ${({ theme: { colors } }) => colors.divider};
  box-shadow: 0 0 0 1px 'rgba(0, 0, 0, 0.1)';
  display: flex;
  flex-basis: 250px;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;
  justify-content: start;
  overflow: auto;
  padding: 1.5rem;
  position: relative;
  transition: left 300ms ease-in-out;

  @media screen and (max-width: 945px) {
    background-color: ${({ theme: { colors } }) => colors.backgroundFallback};
    box-shadow: 0 10px 70px 1px rgba(0, 0, 0, 0.56);
    height: 100%;
    left: ${({ isMenuVisible }) => (isMenuVisible ? '0' : '-300px')};
    position: absolute;
    z-index: 999999;
  }
`;

const SidebarButtons = styled('div')`
  align-items: center;
  background-color: var(--large-title-bg);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const ThemeTools = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Styles = { Sidebar, SidebarButtons, ThemeTools };
