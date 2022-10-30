import styled from 'styled-components';

const Container = styled('div')`
  /* height: 100%; */
  min-width: 0;
  position: unset;
`;

const Grid = styled('div')`
  /* contain: var(--contentscroller_contain);
  contain-intrinsic-size: var(--contentscroller_contain-intrinsic-size);
  content-visibility: var(--contentscroller_content-visibility); */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 16px * (unset - 1)) / unset);
  grid-gap: 16px;
  gap: 16px;
  grid-template-rows: none;
  grid-template-areas: none;
  justify-content: flex-start;
  /* min-height: var(--contentscroller_min-height);
  height: var(--contentscroller_height); */
  overflow: auto hidden;
  overscroll-behavior-inline: contain;
  -webkit-padding-before: unset;
  padding-block-start: unset;
  -webkit-padding-after: unset;
  padding-block-end: unset;
  -webkit-scroll-padding-inline: 32px;
  -moz-scroll-padding-inline: 32px;
  -ms-scroll-padding-inline: 32px;
  scroll-padding-inline: 32px;
  -webkit-scrollbar-width: none;
  -moz-scrollbar-width: none;
  -ms-scrollbar-width: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  /* touch-action: pan-x pan-y pinch-zoom; */

  -moz-scroll-snap-type: inline mandatory;
  scroll-snap-type: inline mandatory;

  margin: 0;
  -webkit-padding-start: 32px;
  padding-inline-start: 32px;
  -webkit-padding-end: 32px;
  padding-inline-end: 32px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Styles = { Container, Grid };
