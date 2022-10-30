import styled from 'styled-components';

const Location = styled('button')`
  background-color: unset;
  border: unset;
  border-radius: 8px;
  cursor: pointer;
  margin: 12px 0 0;
  padding: 4px 0 14px;
  text-align: center;
  transition: box-shadow 0.2s ease, color 0.2s ease, transform 0.2s;

  &:active {
    transform: scale(0.95);
    transition: transform 0.2s;
  }
`;

const Container = styled('div')`
  display: flex;

  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: revert;
`;

const Icon = styled('img')`
  aspect-ratio: auto 24 / 24;
  height: auto;
  max-width: 100%;
  width: 24px;

  filter: contrast(1);
  transition: filter 200ms ease, transform 200ms ease;
`;

const Text = styled('div')`
  position: relative;
  white-space: nowrap;
`;

const TextIndicator = styled('span')<{ isActive: boolean }>`
  display: inline-block;
  transition: transform 200ms ease;

  &:after {
    content: '';
    height: 2px;
    position: absolute;
    top: calc(100% + 12px);

    inset-inline: 0;
    transition: opacity 0.2s ease;

    background-color: black;

    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }
`;

export const Styles = { Container, Icon, Location, Text, TextIndicator };
