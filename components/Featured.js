import styled from "styled-components";
import Center from "./Center";



const Bg = styled.div`
background-color:#222 ;
color:#fff;
padding:50px 0;
`;
const Title = styled.h1`
margin:0;
font-weight: normal;`
const Desc = styled.p`
color: #aaa;
font-size:.8rem;
;`
export default function () {
  return (
    <Bg>
      <Center />
      <Title>Pro Anywhere</Title>
      <Desc>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
      </Desc>
    </Bg>
  );
}
