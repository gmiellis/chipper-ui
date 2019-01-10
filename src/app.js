import React from 'react';

import Header from './components/header';
import Table from './components/table';

const App = (props) => (
  <div>
    <Header scan={props.scan} />
    <Table data={props.data} />
  </div>
);

export default App;