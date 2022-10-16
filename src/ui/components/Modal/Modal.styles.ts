import styled from 'styled-components';

import type { AnimationStatus } from './@types/Modal.types';

const Container = styled('div')<{ animationStatus: AnimationStatus }>`
  --vh: 8.44px;

  align-items: flex-end;
  display: flex;
  flex-direction: row;
  inset: 0px;
  justify-content: center;
  max-height: calc(var(--vh, 1vh) * 100);
  padding-top: 12px;
  position: fixed;
  z-index: 2000;
  -webkit-box-direction: normal;
  -webkit-box-align: end;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;

  @supports (max-height: -webkit-fill-available) {
    max-height: max(-webkit-fill-available, calc(var(--vh, 1vh) * 100)) !important;
  }
`;

const Dialog = styled('div')`
  animation-duration: 400ms !important;
  animation-fill-mode: both !important;
  animation-iteration-count: 1 !important;
  animation-name: keyframe_d37zz3 !important;
  background: rgb(255, 255, 255) !important;
  border-top-left-radius: 12px !important;
  border-top-right-radius: 12px !important;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  display: flex !important;
  flex-direction: column !important;
  max-height: 100% !important;
  max-width: 100vw !important;
  position: relative !important;
  width: 100vw !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
`;

const Header = styled('header')`
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0px !important;
  min-height: 48px !important;
  border-bottom: 0px !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
`;

export const Styles = { Container, Dialog, Header };
