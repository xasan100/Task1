import styled from "styled-components";

export const Container = styled.div`
width:100% ;
width: 100% ;
height:50vh ;
display: flex ;
align-items: center ;
justify-content: center ;
flex-direction: column ;
gap: 30px 0px ;
`

export const Answer = styled.div`
border: 1px solid black ;
width: 30px ;
height: 30px ;
display: flex ;
align-items: center;
justify-content: center ;
border-radius: 8px ;
`

export const BtnContainer = styled.div`
display:  flex;
gap: 0px 10px ;
>button{
    background: #59C2E2 ;
    border: none ;
    color: white ;
    width: 35px ;
    height: 35px ;
    border-radius:  9px;
    :active{
        border: 1px solid black ;
    }
}
.btnClear{
   width: 45px ;
}
`
export const Hero = styled.div`
display: grid  ;
grid-template-columns: auto auto auto auto auto ;
gap :5px;
`
 
export const PurpleCon = styled.div`
display: flex ;
display: grid ;


width: 100% ;
>img{
    border-radius: 40% ;
    width: 40px ;
    height: 40px;
}
   
    

`
export const ImgBox = styled.div`
display:  flex;
>img{
border-radius: 40% ;
width: 45px ;
height: 45px ;
}
`
export const HeroPuroele = styled.div`
display: grid ;
grid-template-columns: auto auto  ;
`
export const Box = styled.div`
display: flex ;
gap: 0px 50px;
` 
