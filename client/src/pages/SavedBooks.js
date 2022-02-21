import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { REMOVE_BOOK } from '../utils/Mutations';
import {QUERY_GET_ME} from '../utils/queries';
import Auth from '../utils/auth';
import {removeBookId} from '../utils/localStorage';


const SavedBooks = () => {

  // determines if useEffect hook needs to run
  const { loading, data } = useQuery(QUERY_GET_ME); 
    // pass URL parameter
    const userData = data?.me || [];


  // function to remove books 
  const [removeBook] = useMutation(REMOVE_BOOK);

  const handleRemoveBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeBook({
        variables: {bookId}
      })

      // removes book if no issues
     removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // Indicate if info is not here yet
  if (!loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleRemoveBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
