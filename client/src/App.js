import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SearchBooks from '../src/pages/SearchBooks';
import SavedBooks from '../src/pages/SavedBooks';
import Navbar from '../src/components/Navbar';


//add apollo client 
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
      <ApolloProvider client={client}>  
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch> 
      </div>
  </Router>
  </ApolloProvider>
);
}


export default App;
