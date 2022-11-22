import React, { useState } from 'react'
import { mockdata } from '../Mock/mockData.js';
import { Mockdatas } from '../Mock/Mockdatas.js';

import { Answer, Box, BtnContainer, Container, Hero, HeroPuroele, ImgBox, PurpleCon } from "./style.js"



const Navbar = () => {
    const [son, setSon] = useState();
    const [bir, birSon] = useState();

    const [datasa, setDatas] = useState(Mockdatas);
    const [data, setData] = useState(mockdata);

    const handelNumber = (newSon) => {
        setSon(newSon)
     
    }
    const handelBir = (newSon) => {
        birSon(newSon)
    }
  
    const handelClear = () => {
        setSon([])
        birSon([])    
    }
  return (
      <Container>
          <Box> 
          <Hero>
              {data?.map((val) => {
                  return (<PurpleCon  key={val.id}>
                      <img src={val.img} alt="" />
                         </PurpleCon>)
              })}
               
              </Hero>
              <HeroPuroele> 
              {datasa.map((value => {
                  return (
                      <ImgBox key={value.id}>
                          <img src={value.img} alt="" />
                      </ImgBox>)
              }))}
              </HeroPuroele>
          </Box>
          <Answer>
              <p>  {bir} {son} </p>
         </Answer>
          <BtnContainer>
              <button onClick={() => handelNumber(0)}>0</button>
              <button onClick={() => handelBir(1)}>1</button>
              <button onClick={() => handelNumber(2)}>2</button>
              <button onClick={() => handelNumber(3)}>3</button>
              <button onClick={() => handelNumber(4)}>4</button>
              <button onClick={() => handelNumber(5)}>5</button>
              <button onClick={() => handelNumber(6)}>6</button>
              <button onClick={() => handelNumber(7)}>7</button>
              <button onClick={() => handelNumber(8)}>8</button>
              <button onClick={() => handelNumber(9)}>9</button>
              <button className='btnClear' onClick={() => handelClear()}> Clear</button>
        </BtnContainer>
    </Container>
    )
}


export default Navbar