import { Home } from './screens/Home';
import { theme } from './styles/theme';
import { GlobaStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobaStyle />
    </ThemeProvider>
  );
}

export default App;
