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
const Wraper = styled.div`
display: grid;
grid-template-columns: .8fr 0.8fr;
gap: 60px;
img{
  max-width: 100%;
}
;`

export default function () {
  return (
    <Bg>
      <Center />
      <Wraper>
        <div>
      <Title>Pro Anywhere</Title>
      <Desc>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
      </Desc>
      </div>
      <div>
        <img src="https://tse1.mm.bing.net/th?id=OIP.ZoXzPxcoAq_ImyX1O14PFAHaIq&pid=Api&P=0&h=180" alt=""/>
      </div>
      </Wraper>
    </Bg>
  );
}
