import styled from 'styled-components';
import { useState } from 'react';

const AppContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`

const ResultContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favorites() {
  const [likedBooks, setLikedBooks] = useState([])

  return (
    <AppContainer>
      <Title>Favorites:</Title>
       <ResultContainer>
         {
           likedBooks.length !== 0 ? likedBooks.map(book => (
             <Result>
               <p>{book.nome}</p>
               <img src={book.src}/>
             </Result>
           )) : null
         }
       </ResultContainer>
    </AppContainer>
  );
}

export default Favorites;
