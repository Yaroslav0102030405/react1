import React from 'react';
import Container from '../Container/Container';
import Panel from '../Panel/Panel';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Panel title="Новини" backgroundColor="error">
          <h2>Пока</h2>
          <p>Прощай</p>
          <p>До зустрічи</p>
        </Panel>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer>
        <Panel backgroundColor="success">
          <h2>Пока</h2>
          <p>Прощай</p>
          <p>До зустрічи</p>
        </Panel>
      </footer>
    </>
  );
};

export default Layout;
