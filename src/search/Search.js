import React, {useState} from 'react'
import styled from 'styled-components'
import search from '../assets/search.svg'
import ListItem from '../dashboardPage/ListItem'

export default function Search() {
  const [isToggled, setIsToggled] = useState(false)
  const [searchIsActive, setSearchisAcitve] = useState(true)

  return (  
    <>
      <Image src={search} onClick={toggleSearchBar} alt="search icon" width="30" height="30" ></Image>
      {isToggled && <Input placeholder="Fahrt suchen" ></Input>
        
         }

    </>
    ) 

    function hideList(){
      setSearchisAcitve(!searchIsActive)
    }

  function toggleSearchBar() {
    setIsToggled(!isToggled)
    hideList()
    } 

  
  
}

const Image = styled.img`
margin: 10px;
display: inline;
`

const Input = styled.input`
margin-bottom: 10px;
width: 100vw;
`
