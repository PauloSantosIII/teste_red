import styled from 'styled-components'
import expert from '../../assets/images/expert.png'

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
    background-image: url(${expert});
    background-size: cover;
    display: flex;
    flex-direction: column;

    p {
        color: #fff;
        text-align: right;
        font-size: 40px;
        margin-right: 30vw;
    }
`

export const Button = styled.button`
    width: 8vw;
    height: 6vh;
    border: none;
    border-radius: 50px;
    background-image: linear-gradient(to right, #246ea4, #539388);
    margin-left: 62vw;
    align-items: center;
    font-size: 10px;

    a {
        text-decoration: none;
        color: #fff;
    }

    a:visited {
        text-decoration: none;
        color: #fff;
    }
`

export const ContainerDown = styled.div`
    width: 100vw;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
`
export const Slogan = styled.span`
    width: 60vw;
    height: 15vh;
    margin-left: 20vw;
    margin-top: 5vh;

    p {
        color: #246ea4;
        font-size: 40px;
        text-align: left;
        width: 30vw;
        margin: -10px 50px;

    }
`
export const ContainerLinks = styled.div`
    width: 100vw;
    height: 35vh;
    background: #fff;
    display: flex;
    flex-wrap: space-between;
    margin-bottom: 10vh;
`

export const Images = styled.div`
    width: 18vw;
    height: 35vh;
    background: #000;
    background-image: url(${expert});
    background-size: cover;
    background-position: left top;
    background-repeat: no-repeat;
    margin: 1vw;

    p {
        color: #fff;
        width: 18vw;
        text-align: center;
        font-size: 18px;
        margin-top: 25vh;
    }
`
