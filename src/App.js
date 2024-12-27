import React from 'react';
// import Panel from './components/Panel/Panel';
import CardsList from './components/Card/CardsList';
import cards from './data/data.json';
// import Container from './components/Container/Container';
import Layout from './components/Layout/Layout';
import { Counter } from './components/Counter/Counter';

// тут ми вже получили массив об'ектів і теперь з ними можна працювати
// console.log(dataCardsJson);

function App() {
  return (
    <>
      <Layout>
        <CardsList cards={cards} />
        <Counter initialValue={2} />
      </Layout>
    </>
  );
}

export default App;
