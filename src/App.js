import React from 'react';

import 'global/GlobalStyles.css';

import { Header } from 'components';
import { Converter } from 'views';

function App() {
  return (
    <div className="App">
      <Header title="Binary to decimal converter" />
      <Converter />
    </div>
  );
}

export default App;
