import React from 'react';

import type { YKAnchorContext } from './interface';

export const AnchorContext = React.createContext<YKAnchorContext>({} as YKAnchorContext);

export const AnchorProvider = AnchorContext.Provider;

export const AnchorConsumer = AnchorContext.Consumer;

export default AnchorContext;
