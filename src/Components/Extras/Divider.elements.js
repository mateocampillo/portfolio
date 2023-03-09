import styled from 'styled-components';

export const DividerCloudStyles = styled.div`
    display: none;
    @media (min-width: 769px){
        display: block;
    }
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
        height: 120px;
    }
    path{
        fill: ${({theme}) => theme.bcg1};
    }
`;

export const DividerTiltStyles = styled.div`
    display: none;
    @media (min-width: 769px){
        display: block;
    }
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