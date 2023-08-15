import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBooks } from './../../services/books';
import { Link } from 'react-router-dom';

const FormContainer = styled.form`
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const InputContainer = styled.input`
    background: transparent;
    border: 1px solid #CCC;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #CCC;
    font-size: 16px;
    margin: 30px 0;
    flex-basis: 100%;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`

const ListContainer = styled.ul`
    display: flex;
    flex-wrap: column;
    flex-basis: 100%;
`

const ItemContainer = styled.li`
    flex-basis: 25%;
    label {
        display: inline-block;
        width: 100%;
        text-align: center;
    }

    img {
        width: 100%;
    }
`

function Search() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        const books = await getBooks();
        setBooks(books);
    }

    return (
        <FormContainer>
            <InputContainer
                type='text'
                placeholder='search'
                onBlur={ event => {
                    let searchedBooks = books.filter( book => {
                        return book.name.includes(event.target.value);
                    })
                    setBooks(searchedBooks);
                }}
                />
            <ListContainer>
                {books.map( book => (
                    <ItemContainer key={book.id}>
                         <Link key={book.id} to={`book/${book.id}`} >
                            <label>{book.name}</label>
                            <img src={book.src} />
                        </Link>
                    </ItemContainer>
                ))}
            </ListContainer>
        </FormContainer>
    )
}

export default Search;