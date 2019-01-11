import React from 'react';

import Header from './components/header';
import ScanTable from './components/table';

const App = (props) => (
  <div>
    <Header scan={props.scan} />
    <ScanTable data={props.data} />
  </div>
);

export default App;