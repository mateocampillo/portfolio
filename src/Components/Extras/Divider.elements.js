import styled from 'styled-components';

export const DividerCloudStyles = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg{
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 60px;
        @media (min-width: 769px){
            height: 120px;
        }
    }
    path{
        fill: ${({theme}) => theme.bcg1};
    }
`;

export const DividerTiltStyles = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg{
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 72px;
    }
    path{
        fill: ${({theme}) => theme.bcg2};
    }
`;

export const LoadingStyle = styled.div`
    background-color: #FFE1E1;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 4rem;
        color: #000;
    }
`;