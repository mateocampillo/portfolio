import styled from 'styled-components';

export const BodyTheme = styled.div`
    background-color: ${({theme}) => theme.bgc};
    height: 100%;
    transition: 200ms all ease-in;
    position: relative;
`;

export const HrTheme = styled.hr`
    background-color: ${({theme}) => theme.bgc};
	border-top: 2px dashed ${({theme}) => theme.text};
    border-bottom: none;
    width: 80%;
    margin: 10px auto;
`;

// HEADER SECTION
export const HeaderTheme = styled.header`
    padding-top: 1px;
`;

export const HeaderUlTheme = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px auto 15px;
    font-size: 1.4rem;
    list-style-type: none;
    font-family: 'Work Sans', sans-serif;

    li {
        a{
            text-decoration: none;
        }
        &:nth-of-type(2n+1){
            padding: 3px;
            border-left: ${({theme}) => theme.color1} 2px solid;
            border-bottom: ${({theme}) => theme.color1} 2px solid;
            a{
                color: ${({theme}) => theme.color1};
            }
        }
        &:nth-of-type(2){
            padding: 3px;
            border-left: ${({theme}) => theme.color2} 2px solid;
            border-bottom: ${({theme}) => theme.color2} 2px solid;
            a{
                color: ${({theme}) => theme.color2};
            }
            
        }
    }

`;

// FIN HEADER SECTION
// MAIN CONTAINER SECTION

export const SectionAboutTheme = styled.div`
    color: #fff;
    position: absolute;
    background-color: ${({theme}) => theme.bgcAbout};
    margin: 10px 20px;
    border-radius: 5px;
    right: 0%;
    opacity: 0%;
    visibility: hidden;
    font-family: 'Work Sans', sans-serif;
    @media (min-width: 769px) {
        display: flex;
        flex-direction: row;
        p{
            font-size: 1.2rem;
        }
    }

  div{
      padding: 15px 5px;
  }

  #cerrarAbout{
    width: 25px;
    position: absolute;
    right: 17px;
    top: 5px;
    fill: ${({theme}) => theme.cerrarAbout}
  }
`;

export const SectionAboutImageDivTheme = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (min-width: 769px) {
        margin: 30px 30px;
        width: 65%;
    }
`; 

export const SectionAboutImageTheme = styled.img`
    width: 70%;
    @media (min-width: 381px) {
        width: 50%;
    }
    @media (min-width: 769px) {
        width: 100%;
    }
`; 

export const SectionAboutStackTheme = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    i{
        font-size: 2.5rem;
        padding: 10px 15px;
    }
`;

export const MainInfoTheme = styled.div`
    color: ${({theme}) => theme.text};
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 769px){
        height: 50vh;
        flex-direction: row;
        padding: 0 50px;
    }
`;

export const MainInfoIntroTheme = styled.div`
    h1{
        padding-top: 10px;
        font-size: 2.4rem;
        font-weight: 100;
        text-align: center;
        @media (min-width: 381px) {
            font-size: 2.8rem;
            margin-top: 15px;
        }
    }
    h2{
        padding-top: 45px;
        color: ${({theme}) => theme.color1};
        font-size: 2rem;
        font-weight: 500;
    }
`;

export const MainInfoDescTheme = styled.div`
    width: 80vw;
    text-align: left;
    @media (min-width: 769px){
            width: 50%;
            text-align: center;
        }

    p{
        font-size: 1.1rem;
        padding-bottom: 20px;
        @media (min-width: 381px) {
            font-size: 1.4rem;
        }
    }
    h4, i{
        display: inline;
    }
    svg{
        font-size: 1.5rem;
        padding-right: 10px;
        @media (min-width: 381px) {
            font-size: 1.7rem;
        }
    }
    h4{
        font-size: 1.2rem;
        font-weight: 300;
        padding-left: 10px;
        @media (min-width: 381px) {
            font-size: 1.4rem;
        }
    }
    button{
        background-color: ${({theme}) => theme.bgc};
        border: none;
        color: ${({theme}) => theme.color2};
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 30px;
        border-bottom: 1px solid ${({theme}) => theme.color2};
        transition: all 200ms ease-in;
        @media (min-width: 769px) {
            font-size: 1.5rem;
        }
    }
`;

export const MainInfoIconsTheme = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    @media (min-width: 769px){
        flex-direction: column;
        height: 80%;
        width: 20%;
    }

    i{
        font-size: 2rem;
        @media (min-width: 381px) {
            font-size: 2.5rem;
        }
    }
    a{
        text-decoration: none;
        color: ${({theme}) => theme.text};
        @media (min-width: 769px){
            text-align: center;
        }
    }
    button{
        background-color: ${({theme}) => theme.bgc};
        border: none;
        font-size: 1rem;
        vertical-align: center;
        color: ${({theme}) => theme.text};
        transition: all 200ms ease-in;
        @media (min-width: 381px) {
            font-size: 1.3rem;
        }
    }
    svg{
        font-size: 1.7rem;
        @media (min-width: 381px) {
            font-size: 2.3rem;
        }
    }
`;

// FIN MAIN CONTAINER SECTION
// SWITCHMODE SECTION

export const SwitchModeContainer = styled.div`
    position: sticky;
    width: 60px;
    text-align: center;
    bottom: 10%;
    left: 80%;
    @media (min-width: 381px) {
        bottom: 5%;
        left: 88%;
    }
`;

export const SwitchModeButton = styled.button`
    padding: 4px;
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 3px;
    background-color: ${({theme}) => theme.bgc};

    svg{
        font-size: 2rem;
        fill: ${({theme}) => theme.text};
    }
`;

// FIN SWITCHMODE SECTION
// MAIN PROYECTOS SECTION

export const MainProyectosContainerTheme = styled.div`
    transition: all 200ms ease-in;
    height: 110vh;
    background-color: ${({theme}) => theme.bgc};
    @media (min-width: 769px) {
        height: 55vh;
    }
`;

export const MainProyectosWrapperTheme = styled.div`
    margin: 0 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 769px) {
        flex-direction: row;
    }
`;

export const MainProyectoTituloH2Theme = styled.h2`
    text-align: center;
    font-size: 2rem;
    color: ${({theme}) => theme.color2};
`;

export const MainProyectoImageTheme = styled.img`
    width: 90%;
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 3px;
    @media (min-width: 381px) {
        width: 50%;
    }
    @media (min-width: 769px) {
        width: 50%;
        :hover{
            filter: blur(2px);
        }
    }
`; 

export const ProyectoWrapperTheme = styled.div`
    text-align: center;
    color: ${({theme}) => theme.text};
    position: relative;
    @media (min-width: 381px) {
        margin: 10px auto;
    }

    h3{
        margin: 5px auto;
    }
    a{
        color: ${({theme}) => theme.text};
        text-decoration: underline 1px solid ${({theme}) => theme.color2};
    }
    p{
        @media (min-width: 769px) {
            width: 80%;
            margin: 0px auto;
        }
    }
`;

//FIN MAIN PROYECTOS SECTION
// CONTACTO SECTION

export const ContactoContainerTheme = styled.div`
    transition: all 200ms ease-in;
    height: 74vh;
    background-color: ${({theme}) => theme.bgc};
    width: 80%;
    margin: 0px auto;
`;

export const ContactoWrapperTheme = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        color: ${({theme}) => theme.color1};
        margin: 5px auto;
        @media (min-width: 381px) {
            font-size: 2rem;
        }
    }
    h3{
        text-align: left;
        color: ${({theme}) => theme.color1};
        @media (min-width: 769px) {
            font-size: 1.5rem;
        }
    }
`;

export const ContactoDivInsideTheme = styled.div`
    text-align: center;
    margin: 20px auto;

    label{
        display: block;
        margin: 10px auto;
        text-align: center;
        color: ${({theme}) => theme.text};
        font-weight: 600;
        @media (min-width: 381px) {
            font-size: 1.1rem;
        }
    }
    input{
        font-size: 1.1rem;
        padding: 5px;
        @media (min-width: 381px) {
            width: 50%;
        }
        @media (min-width: 381px) {
            width: 40%;
        }
    }
    textarea{
        width: 100%;
        font-size: 1.2rem;
        padding: 4px;
        font-family: "Times New Roman", Times, serif;
        @media (min-width: 381px) {
            width: 80%;
            font-size: 1.3rem;
        }
    }
    button{
        color: ${({theme}) => theme.color1};
        background-color: ${({theme}) => theme.bgc};
        padding: 5px;
        font-size: 1.3rem;
        font-weight: 600;
        border: 1px solid ${({theme}) => theme.text};
        border-radius: 3px;
    }

`;

export const ContactoH3IconoLinkedin = styled.h3`
    @media (min-width: 381px) {
        display: inline;
    }
`;

export const ContactoIconoLinkedin = styled.a`
    text-decoration: none;
    margin-top: 5px;
    text-align: center;
    color: ${({theme}) => theme.bgcLinkedinIcon};
    i{
        font-size: 2rem;
        @media (min-width: 381px) {
            display: inline;
            margin-left: 10px;
        }
    }
`;

//FIN CONTACTO SECTION
//FOOTER SECTION

export const FooterContainerTheme = styled.footer`
    transition: all 200ms ease-in;
    background-color: ${({theme}) => theme.bgc};
    width: 80%;
    margin: 0px auto;

    h2{
        margin: 15px 0 0;
        font-size: 1rem;
        color: ${({theme}) => theme.text};
    }
`;

//FIN FOOTER SECTION