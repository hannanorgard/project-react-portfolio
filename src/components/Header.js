import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaStackOverflow } from 'react-icons/fa'
import ProfileImg from './assets/pp.png'

const HeaderContainer = styled.div`
position: relative;
color: white;
width: 92%;
height: 330px;
padding-top: 1px;
margin-top: 20px;
margin: 0px auto;
@media (max-width: 650px) {
  height: 490px;
}
`

const IconContainer = styled.div`
position: absolute;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100px;
top: 45px;
right: 45px;
border: 5px solid;
border-color: #faede8;
padding: 10px;
border-radius: 20px;
background-color: #faede8;
`

const BigHeading = styled.h3`
font-family: 'Roboto';
`

const SmallHeading = styled.h1`
font-family: 'Montserrat', sans-serif;
`

const HeaderText = styled.div`
color: black;
margin: 7.5rem 0 0 4.5rem;

@media (max-width: 1200px) {
  margin-left: 3rem;
}
@media (max-width: 650px) {
  margin: 10rem 0 0 2rem;
}
`

const ProfilePic = styled.img`
position: absolute;
bottom: -35%;
right: 40px;
border-radius: 50%;
border: 5px solid;
border-color: #faede8;
width: 21vw;
@media (max-width: 1200px) {
  right: 3rem;
}
@media (max-width: 650px) {
  width: 150px;
  right: 2rem;
  bottom: -1rem;
}
`

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <a
          href="https://www.linkedin.com/in/hanna-norgard/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedinIn size="25px" />
        </a>
        <a
          href="https://github.com/hannanorgard"
          target="_blank"
          rel="noreferrer">
          <FaGithub size="25px" />
        </a>
        <a
          href="https://stackoverflow.com/users/19433465/norgard"
          target="_blank"
          rel="noreferrer">
          <FaStackOverflow size="25px" />
        </a>
      </IconContainer>
      <HeaderText>
        <BigHeading>portfolio: hanna nörgård</BigHeading>
        <SmallHeading>front-end developer</SmallHeading>
        <SmallHeading>+ strategic communicator</SmallHeading>
      </HeaderText>
      <ProfilePic src={ProfileImg} alt="a picture of me" />
    </HeaderContainer>
  )
}

export default Header;