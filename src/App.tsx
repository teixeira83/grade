import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Grade } from './pages';

import { theme } from './settings/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grade />
    </ThemeProvider>
  );
}

export default App;
