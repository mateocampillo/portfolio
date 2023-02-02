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

export const SectionAboutImageTheme = styled.img`
    width: 70%;
    margin-left: 10px;
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
`;

export const MainInfoIntroTheme = styled.div`
    h1{
        padding-top: 10px;
        font-size: 2.4rem;
        font-weight: 100;
        text-align: center;
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

    p{
        font-size: 1.1rem;
        padding-bottom: 20px;
    }
    h4, i{
        display: inline;
    }
    svg{
        font-size: 1.5rem;
        padding-right: 10px;
    }
    h4{
        font-size: 1.2rem;
        font-weight: 300;
        padding-left: 10px;
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
    }
`;

export const MainInfoIconsTheme = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    i{
        font-size: 2rem;
    }
    a{
        text-decoration: none;
        color: ${({theme}) => theme.text};
    }
    button{
        background-color: ${({theme}) => theme.bgc};
        border: none;
        font-size: 1rem;
        vertical-align: center;
        color: ${({theme}) => theme.text};
        transition: all 200ms ease-in;
    }
    svg{
        font-size: 1.7rem;
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
    height: 100vh;
    background-color: ${({theme}) => theme.bgc};
`;

export const MainProyectosWrapperTheme = styled.div`
    margin: 0 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2{
        text-align: center;
        font-size: 2rem;
        color: ${({theme}) => theme.color2};
    }
`;

export const MainProyectoImageTheme = styled.img`
    width: 90%;
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 3px;
`; 

export const ProyectoWrapperTheme = styled.div`
    text-align: center;
    color: ${({theme}) => theme.text};

    h3{
        margin: 5px auto;
    }
    a{
        color: ${({theme}) => theme.text};
        text-decoration: underline 1px solid ${({theme}) => theme.color2};
    }
`;

//FIN MAIN PROYECTOS SECTION
// CONTACTO SECTION

export const ContactoContainerTheme = styled.div`
    transition: all 200ms ease-in;
    height: 65vh;
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
    }
    h3{
        text-align: left;
        color: ${({theme}) => theme.color1};
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
    }
    input{
        font-size: 1.1rem;
    }
    textarea{
        width: 100%;
        font-size: 1rem;
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

export const ContactoIconoLinkedin = styled.a`
    text-decoration: none;
    margin-top: 5px;
    text-align: center;
    color: ${({theme}) => theme.bgcLinkedinIcon};
    i{
        font-size: 2rem;
    }
`;

//FIN CONTACTO SECTION
//FOOTER SECTION

export const FooterContainerTheme = styled.footer`
    transition: all 200ms ease-in;
    height: 30vh;
    background-color: ${({theme}) => theme.bgc};
    width: 80%;
    margin: 0px auto;
`;

//FIN FOOTER SECTION