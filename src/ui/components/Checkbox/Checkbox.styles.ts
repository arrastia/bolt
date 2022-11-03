import styled from 'styled-components';

const Animation = styled('svg')`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const ToDoList = styled('div')`
  font-size: 14px;
  // disable click
  pointer-events: none;
`;

const ToDo = styled('label')`
  align-items: center;
  border-bottom: solid 1px #ddd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem 7%;
  position: relative;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

const Icon = styled('svg')`
  bottom: 0;
  fill: none;
  height: auto;
  left: 0;
  margin: auto;
  position: absolute;
  stroke: #249e64;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  top: 0;
  width: 50%;
`;

const Use = styled('use')`
  transition: stroke-dashoffset 0.8s cubic-bezier(0.9, 0, 0.5, 1);
`;

const Box = styled(Use)`
  stroke-dasharray: 56.1053, 56.1053;
  stroke-dashoffset: 0;
  transition-delay: 0.16s;
`;

const Check = styled(Use)`
  stroke: #249e64;
  stroke-dasharray: 9.8995, 9.8995;
  stroke-dashoffset: 9.8995;
  transition-duration: 0.32s;
`;

const Line = styled(Use)`
  stroke-dasharray: 168, 1684;
  stroke-dashoffset: 168;
`;

const Circle = styled('use')`
  -webkit-animation: none 0.8s linear;
  animation: none 0.8s linear;
  stroke: #249e64;
  stroke-dasharray: 1 6;
  stroke-width: 0;
  transform-origin: 13.5px 12.5px;
  transform: scale(0.4) rotate(0deg);

  -webkit-animation-delay: 0.56s;
  animation-delay: 0.56s;
  -webkit-animation-duration: 0.56s;
  animation-duration: 0.56s;
`;

const Text = styled('div')`
  color: ${({ theme: { colors } }) => colors.text};
  transition: all 0.4s linear 0.4s;
  font-weight: bold;
`;

const Checkbox = styled('input')`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;

  &:checked ~ ${Text} {
    transition-delay: 0s;
    color: #34d186;
    opacity: 0.6;
  }
  &:checked ~ ${Icon} ${Box} {
    stroke-dashoffset: 56.1053;
    transition-delay: 0s;
  }
  &:checked ~ ${Icon} ${Line} {
    stroke-dashoffset: -8;
  }
  &:checked ~ ${Icon} ${Check} {
    stroke-dashoffset: 0;
    transition-delay: 0.48s;
  }
  &:checked ~ ${Icon} ${Circle} {
    -webkit-animation-name: explode;
    animation-name: explode;
  }

  @keyframes explode {
    30% {
      stroke-width: 3;
      stroke-opacity: 1;
      transform: scale(0.8) rotate(40deg);
    }
    100% {
      stroke-width: 0;
      stroke-opacity: 0;
      transform: scale(1.1) rotate(60deg);
    }
  }
`;

export const Styles = { Animation, Box, Check, Checkbox, Circle, Icon, Line, Text, ToDo, ToDoList };
