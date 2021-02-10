import styled from 'styled-components'
import family from '../../assets/images/family.png'

export const Head = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    top: 0;
    background-image: url(${family});
`

export const Left = styled.div`
    width: 40vw;
    height: 50px;
    background: #539388;
    display: flex;
`

export const Phone = styled.span`
    display: flex;
    color: white;
    margin-left: 50%;
    width: 25%;
`

export const WApp = styled.span`
    width: 25%;
`

export const Right = styled.div`
    width: 60vw;
    height: 50px;
    background: #246ea4;
    display: flex;
`

export const Social = styled.span`
    width: 100%;
    padding: 15px;
    justify-content: space-around;
`
export const Menu = styled.div`
    width: 100vw;
    height: 70px;
    position: absolute;
    top: 50px;
    border-bottom: 1px solid #fff;
`

export const Links = styled.div`
    width: 60vw;
    height: 70px;
    margin-left: 20vw;
    color: #fff;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    display: flex;

    a {
        text-decoration: none;
        color: #fff;
    }

    a:visited {
        text-decoration: none;
        color: #fff;
    }
`