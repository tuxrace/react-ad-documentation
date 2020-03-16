import React from 'react';
import AppRoutes from './domain-components/AppRoutes/AppRoutes';
import ThemeWrapper from './domain-components/ThemeWrapper/ThemeWrapper';
import ADHeader from './ui-components/ADHeader/ADHeader';
import ADContainer from './ui-components/ADContainer/ADContainer';

function App() {
  return (
      <ThemeWrapper>
        <ADHeader />
        <ADContainer>
          <AppRoutes />
        </ADContainer>
      </ThemeWrapper>
  );
}

export default App;
