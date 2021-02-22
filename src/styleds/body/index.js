import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    top: 0;
`

export const ContainerUp = styled.div`
    width: 100vw;
    height: 40vh;
    background-image: linear-gradient(to right, #539388 , #246ea4);
    display: flex;
    flex-direction: column;
`

export const Slogan = styled.span`
    width: 60vw;
    height: 15vh;
    margin-left: 20vw;
    margin-top: 5vh;

    p {
        color: #fff;
        font-size: 40px;
        text-align: left;
        width: 30vw;
        margin: -10px 50px;

    }
`

export const ContainerLinks = styled.div`
    width: 60vw;
    height: 20vh;
    margin-left: 20vw;
    background-image: linear-gradient(to right, #539388 , #246ea4);
    display: flex;
    box-shadow: -1px 1px 5px lightgrey;
`

export const Images = styled.div`
    width: 20vw;
    height: 20vh;
    background: #fff;
`

export const ContainerDown = styled.div`
    width: 100vw;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
`

export const TextLinks = styled.div`
    width: 20vw;
    height: 20vh;
    background: #fff;

    p {
        text-align: left;
        margin-left: 5px;
        font-size: 12px;

        a {
            text-decoration: none;
            color: #000;
        }

        a:visited {
            text-decoration: none;
            color: #000;
        }  
    }
`