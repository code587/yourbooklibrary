import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from '../src/pages/SearchBooks';
import SavedBooks from '../src/pages/SavedBooks';
import Navbar from '../src/components/Navbar';


//add apollo client 



function App() {
  return (
 <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch> 
      </>
  </Router>
);
}


export default App;
