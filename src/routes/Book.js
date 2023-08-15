import styled from 'styled-components';
import {getBook} from './../services/books';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const AppContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  flex-wrap: wrap;
`

const Title = styled.h2`
   color: #000;
   font-size: 36px;
   text-align: left;
   width: 100%;
   display: inline-block;
`

function Book() {
    const [ book, setBook ] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        fetchBook()
    }, []);

    async function fetchBook() {
        const book = await getBook(id);
        setBook(book);
    }

    return (
        <AppContainer>
            <Title>
                {book.name}
            </Title>
            <img src={book.src}/>
        </AppContainer>
    );
}

export default Book;
