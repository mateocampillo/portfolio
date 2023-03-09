import styled from 'styled-components';

export const BodyTheme = styled.div`
    background-color: ${({theme}) => theme.bcg1};
    height: 100%;
    transition: 200ms all ease-in;
    position: relative;
`;

export const HrTheme = styled.hr`
    background-color: ${({theme}) => theme.bcg1};
	border-top: 2px dashed ${({theme}) => theme.text};
    border-bottom: none;
    width: 80%;
    margin: 10px auto;
    @media (min-width: 769px){
        display: none;
    }
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
    @media (min-width: 1201px){
        margin: 20px auto 0px;
        font-size: 2rem;
        font-weight: 600;
    }

    li {
        a{
            text-decoration: none;
        }
        &:nth-of-type(2n+1){
            padding: 3px;
            border-left: ${({theme}) => theme.color1} 2px solid;
            border-bottom: ${({theme}) => theme.color1} 2px solid;
            @media (min-width: 1201px){
                border-left: ${({theme}) => theme.color1} 3px solid;
                border-bottom: ${({theme}) => theme.color1} 3px solid;
            }
            a{
                color: ${({theme}) => theme.color1};
            }
        }
        &:nth-of-type(2){
            padding: 3px;
            border-left: ${({theme}) => theme.color2} 2px solid;
            border-bottom: ${({theme}) => theme.color2} 2px solid;
            @media (min-width: 1201px){
                border-left: ${({theme}) => theme.color2} 3px solid;
                border-bottom: ${({theme}) => theme.color2} 3px solid;
            }
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
    background-color: ${({theme}) => theme.aboutBcg};
    margin: 10px 20px;
    border-radius: 5px;
    right: 0%;
    max-height: 100vh;
    opacity: 0%;
    z-index: 10;
    visibility: hidden;
    font-family: 'Work Sans', sans-serif;
    @media (min-width: 769px) {
        p{
            font-size: 1.2rem;
        }
    }
    @media (min-width: 992px) {
        margin: 25px 5vw 0px;
    }
    @media (min-width: 1200px) {
        margin: 25px 10vw 0px;
    }
    @media (min-width: 1400px) {
        margin: 28px 13vw 0px;
    }

  div{
      padding: 15px 5px;
  }

  #cerrarAbout{
    width: 25px;
    position: absolute;
    right: 17px;
    top: 5px;
    fill: ${({theme}) => theme.aboutCerrar};
    cursor: pointer;
  }
`;

export const SectionAboutTextoTheme = styled.div`
    div{
        margin: 4px auto;
    }
    p{
        @media (min-width: 1201px){
            font-size: 1.3rem;
        }
    }
`; 

export const SectionAboutImageDivTheme = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (min-width: 769px) {
        display: none;
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
        @media (min-width: 1201px){
            font-size: 4rem;
        }
    }
`;

export const MainInfoTheme = styled.div`
    color: ${({theme}) => theme.text};
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 769px){
        height: 60vh;
        flex-direction: row;
        padding: 0 50px;
    }
    @media (min-width: 1201px){
        padding: 0px 100px;
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
        @media (min-width: 1201px){
            font-size: 5rem;
            font-weight: 400;
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
    @media (min-width: 1200px){
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    p{
        .underlined{
            position: relative;
        }
        .underline-clip:after {
            content: '';
            position: absolute;
            top: 95%;
            width: 150%;
            aspect-ratio: 3 / 1;
            left: 50%;
            transform: translate(-50%, 0);
            border-radius: 50%;
            border: 6px solid ${({theme}) => theme.mainInfo};
            /* Use a clip-path to hide and show the bits you want */
            clip-path: polygon(0 0, 50% 50%, 100% 0);
        }
        .multicolor{
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(35deg, red, blue);
        }
        font-size: 1.2rem;
        line-height: 40px;
        padding-bottom: 20px;
        @media (min-width: 381px) {
            font-size: 1.4rem;
        }
        @media (min-width: 1201px) {
            font-size: 1.6rem;
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
        @media (min-width: 1201px) {
            font-size: 1.9rem;
        }
    }
    h4{
        font-size: 1.2rem;
        font-weight: 300;
        padding-left: 10px;
        @media (min-width: 381px) {
            font-size: 1.4rem;
        }
        @media (min-width: 1201px) {
            font-size: 1.6rem;
        }
    }
    button{
        background-color: ${({theme}) => theme.bcg1};
        border: none;
        color: ${({theme}) => theme.color2};
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 30px;
        border-bottom: 1px solid ${({theme}) => theme.color2};
        transition: all 200ms ease-in;
        cursor: pointer;
        @media (min-width: 769px) {
            font-size: 1.5rem;
        }
        @media (min-width: 1200px) {
            width: 120px;
        }
    }
`;

export const MainInfoIconsTheme = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 40px;
    @media (min-width: 769px){
        margin-bottom: 60px;
    }
    i{
        font-size: 2rem;
        @media (min-width: 381px) {
            font-size: 2.5rem;
        }
        @media (min-width: 769px) {
            font-size: 3rem;
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
        background-color: ${({theme}) => theme.bcg1};
        border: none;
        cursor: pointer;
        font-size: 1rem;
        vertical-align: center;
        color: ${({theme}) => theme.text};
        transition: all 200ms ease-in;
        @media (min-width: 1201px) {
            font-size: 1.7rem;
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
    }
    @media (min-width: 768px) {
        left: 85%;
    }
    @media (min-width: 1201px) {
        left: 95%;
    }
`;

export const SwitchModeButton = styled.button`
    padding: 4px;
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 3px;
    background-color: ${({theme}) => theme.switchBcg};
    cursor: pointer;

    svg{
        font-size: 2rem;
        fill: ${({theme}) => theme.switchColor};
        @media (min-width: 1201px) {
            font-size: 3rem;
        }
    }
`;

// FIN SWITCHMODE SECTION
// MAIN PROYECTOS SECTION

export const MainProyectosContainerTheme = styled.div`
    transition: all 200ms ease-in;
    height: 100vh;
    background-color: ${({theme}) => theme.bcg1};
    position: relative;
    @media (min-width: 769px) {
        padding-top: 140px;
        height: 70vh;
        background-color: ${({theme}) => theme.bcg2};
    }
    @media (min-width: 992px) {
        height: 80vh;
    }
    @media (min-width: 1201px) {
        height: 90vh;
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
    @media (min-width: 769px) {
        color: ${({theme}) => theme.proyecto_679px_text};
    }
    @media (min-width: 1201px) {
        font-size: 2.3rem;
        padding-top: 20px;
    }
`;

export const MainProyectoImageTheme = styled.img`
    width: 90%;
    border: 1px solid ${({theme}) => theme.bcg1};
    border-radius: 3px;
    @media (min-width: 500px) {
        width: 65%;
    }
    @media (min-width: 769px) {
        width: 80%;
        :hover{
            filter: blur(2px);
        }
    }
    @media (min-width: 1500px) {
        width: 70%;
    }
`; 

export const ProyectoWrapperTheme = styled.div`
    text-align: center;
    color: ${({theme}) => theme.text};
    position: relative;
    height: 80%;
    @media (min-width: 381px) {
        margin: 10px auto;
    }

    h3{
        margin: 5px auto;
        @media (min-width: 1201px) {
            font-size: 1.7rem;
        }
    }
    a{
        color: ${({theme}) => theme.color2};
        text-decoration: underline 1px solid ${({theme}) => theme.text};
        @media (min-width: 769px) {
            color: ${({theme}) => theme.proyecto_679px_text};
            text-decoration: underline 1px solid ${({theme}) => theme.whiteOrBlack};
        }
    }
    p{
        @media (min-width: 769px) {
            width: 80%;
            margin: 0px auto;
            color: ${({theme}) => theme.whiteOrBlack};
        }
        @media (min-width: 1201px) {
            font-size: 1.2rem;
        }
    }
`;

//FIN MAIN PROYECTOS SECTION
// CONTACTO SECTION

export const ContactoContainerTheme = styled.div`
    transition: all 200ms ease-in;
    height: 65vh;
    background-color: ${({theme}) => theme.bcg1};
    width: 80%;
    margin: 0px auto;
    position: relative;
    @media (min-width: 769px) {
        padding: 100px 0px 0px;
        height: 80vh;
        width: 100%;
    }
    @media (min-width: 1201px) {
        padding: 100px 200px 0px;
        height: 85vh;
    }
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
        background-color: ${({theme}) => theme.white};
        border: 1px solid ${({theme}) => theme.text};
        @media (min-width: 381px) {
            width: 50%;
        }
        @media (min-width: 769px) {
            font-size: 1.2rem;
            width: 40%;
        }
        @media (min-width: 1201px) {
            font-size: 1.4rem;
            width: 36%;
        }
    }
    textarea{
        width: 100%;
        font-size: 1.2rem;
        padding: 4px;
        font-family: "Times New Roman", Times, serif;
        background-color: ${({theme}) => theme.white};
        border: 1px solid ${({theme}) => theme.text};
        @media (min-width: 381px) {
            width: 80%;
            font-size: 1.3rem;
        }
        @media (min-width: 1201px) {
            width: 70%;
            font-size: 1.4rem;
        }
    }
    button{
        color: ${({theme}) => theme.color1};
        background-color: ${({theme}) => theme.bcg1};
        padding: 5px;
        font-size: 1.3rem;
        font-weight: 600;
        border: 1px solid ${({theme}) => theme.text};
        border-radius: 3px;
        cursor: pointer;
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
    color: ${({theme}) => theme.linkedInBcg};
    @media (min-width: 769px) {
            margin: 0px auto;
            width: 60%;
        }
    @media (min-width: 1201px) {
        width: 70%;
    }
    @media (min-width: 1600px) {
        width: 40%;
    }
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
    background-color: ${({theme}) => theme.bcg1};
    width: 80%;
    margin: 0px auto;

    h2{
        margin: 15px 0 0;
        font-size: 1rem;
        color: ${({theme}) => theme.text};
    }
`;

//FIN FOOTER SECTION