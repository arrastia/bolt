import { createContext } from 'react';

import type { SheetContextType } from '../@types/Sheet.types';

export const SheetContext = createContext<SheetContextType | undefined>(undefined);
