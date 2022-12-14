import type { ComponentPropsWithoutRef } from 'react';

export const ArrowIcon = ({ isCollapsed, ...props }: ComponentPropsWithoutRef<'svg'> & { isCollapsed: boolean }) => {
  return (
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M112 184l144 144 144-144" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48"></path>
    </svg>
  );
};
