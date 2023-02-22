import styled from "styled-components";

const Navigation = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #c52e1d;
    padding: 1rem;
    ul {
        margin: 0;
        padding: 1rem;
        background: #c52e1d;
        list-style:none;
        li{
            display : inline-block;
            margin: 0 0.5rem; padding : 0 0.4rem;
            text-align : center;
            span { font-size : 0.9rem ;}
        }   
    }
    a {
        font-size: 2rem;
        text-transform: uppercase;
        display:block;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0D0C1D;
        text-decoration: none;
        transition: color 0.3s linear;
    
    
        &:hover {
          color: #343078;
        }
      }
    @media(max-width: 450px) {
        flex-flow: column wrap; /*4*/
    }
`;

export default Navigation;