import React, { useEffect,useState } from 'react';
import MatchListItem from './MatchListItem';
import styled from 'styled-components';
import axios from 'axios';

const ListContainer = styled.div`
padding: 8px;
`


function MatchListPage() {
  const [matches, setMatches] = useState([]); 
  


  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luciana/matches')
    .then((res) => {
    
    setMatches(res.data.matches)
  })
 
  /*}, []);*/
  .catch((error) => {
    console.log(error)
}) 
}, []);
   return (
<ListContainer>
{matches.map((profile) => {
    return <MatchListItem profile={profile}/>
})}
</ListContainer>
 );
  }
export default MatchListPage;

