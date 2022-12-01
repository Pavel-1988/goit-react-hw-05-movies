import styled from 'styled-components';

export const MovieBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  
`

export const MovieImg = styled.img`
  /* max-height: 100%;
  max-width: 100%; */
  height: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px orangered;

  margin-right: 30px;

  :hover {
    transform: scale(1.05);
  }
`
export const MovieInfo = styled.div`
& > p {
  margin-bottom:20px;
}
& > h2,h3 {
  margin-bottom:5px;
}
`

export const AdditionalDiv = styled.div`
margin-top:20px;

  & > ul  {
    display: flex;
  }
  

  & > ul li {
    margin:20px;
  }
  
`