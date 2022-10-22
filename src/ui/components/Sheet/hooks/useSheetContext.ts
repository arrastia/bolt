import { useContext } from 'react';

import { SheetContext } from '../context/SheetContext';

export const useSheetContext = () => {
  const context = useContext(SheetContext);

  if (!context) throw Error('Sheet context error');

  return context;
};
