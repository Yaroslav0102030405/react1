import React from 'react';
import Panel from './components/Panel/Panel';
import CardsList from './components/Card/CardsList';
import cards from './data/data.json';

// тут ми вже получили массив об'ектів і теперь з ними можна працювати
// console.log(dataCardsJson);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Cards data={dataCardsJson} /> */}
        <Panel title="Новини">
          <h2>Пока</h2>
          <p>Прощай</p>
          <p>До зустрічи</p>
        </Panel>
        <Panel>
          <h2>Пока</h2>
          <p>Прощай</p>
          <p>До зустрічи</p>
        </Panel>
        <CardsList cards={cards} />
      </header>
    </div>
  );
}

export default App;
