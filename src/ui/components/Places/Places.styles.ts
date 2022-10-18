import styled from 'styled-components';

const Container = styled('div')`
  height: 100%;
  min-width: 0;
  position: unset;
`;

const Grid = styled('div')`
  contain: var(--contentscroller_contain);
  contain-intrinsic-size: var(--contentscroller_contain-intrinsic-size);
  content-visibility: var(--contentscroller_content-visibility);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(
    --contentscroller_auto-columns,
    calc((100% - var(--contentscroller_gap, 16px) * (var(--contentscroller_visible-items, unset) - 1)) / var(--contentscroller_visible-items, unset))
  );
  grid-gap: var(--contentscroller_gap, 16px);
  gap: var(--contentscroller_gap, 16px);
  grid-template-rows: var(--contentscroller_rows, none);
  grid-template-areas: var(--contentscroller_areas, none);
  justify-content: flex-start;
  min-height: var(--contentscroller_min-height);
  height: var(--contentscroller_height);
  overflow: var(--contentscroller_overflow, auto hidden);
  overscroll-behavior-inline: contain;
  -webkit-padding-before: var(--contentscroller_padding-block-start, unset);
  padding-block-start: var(--contentscroller_padding-block-start, unset);
  -webkit-padding-after: var(--contentscroller_padding-block-end, unset);
  padding-block-end: var(--contentscroller_padding-block-end, unset);
  -webkit-scroll-padding-inline: var(--contentscroller_peek, 32px);
  -moz-scroll-padding-inline: var(--contentscroller_peek, 32px);
  -ms-scroll-padding-inline: var(--contentscroller_peek, 32px);
  scroll-padding-inline: var(--contentscroller_peek, 32px);
  -webkit-scrollbar-width: none;
  -moz-scrollbar-width: none;
  -ms-scrollbar-width: none;
  scrollbar-width: none;
  touch-action: var(--contentscroller_touch-action, pan-x pan-y pinch-zoom);

  -moz-scroll-snap-type: var(--contentscroller_scrollsnaptype, inline mandatory);
  scroll-snap-type: var(--contentscroller_scrollsnaptype, inline mandatory);

  margin: 0;
  -webkit-padding-start: var(--contentscroller_padding-inline-start, var(--contentscroller_peek, 32px));
  padding-inline-start: var(--contentscroller_padding-inline-start, var(--contentscroller_peek, 32px));
  -webkit-padding-end: var(--contentscroller_padding-inline-end, var(--contentscroller_peek, 32px));
  padding-inline-end: var(--contentscroller_padding-inline-end, var(--contentscroller_peek, 32px));

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Styles = { Container, Grid };
