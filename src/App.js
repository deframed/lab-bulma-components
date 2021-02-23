import React from 'react';
import ReactDOM from 'react-dom'

import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'


const App = () => {
  // return <h1>Bulma</h1>;
  return (
    <React.Fragment>
      <Navbar />
      <FormField />
    </React.Fragment>
  )
};

ReactDOM.render(<App />, document.querySelector('#myApp'))

export default App;
