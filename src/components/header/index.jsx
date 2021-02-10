import React from 'react'
import { Head, Left, Right, Phone, WApp, Social, Menu, Links } from '../../styleds/head'
import { FaPhoneAlt, FaWhatsapp, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <Head>
            <Left>
                <Phone>
                    <p><FaPhoneAlt style={{ color: '#000'}} /> 41 9983929</p>
                </Phone>
                <WApp>
                    <p><FaWhatsapp /> 41 9983929</p>
                </WApp>
            </Left>
            <Right>
                <Social>
                    <FaTwitter />  <FaInstagram />  <FaFacebookF style={{ color: '#fff'}} />  <FaLinkedinIn />
                </Social>
            </Right>
            <Menu>
                <Links>
                    <img src={logo} alt='logo' />
                    <span><a href='../'><ImHome3 style={{ color: '#000'}} /></a></span>
                    <span><a href='../sobre'>SOBRE NÓS</a></span>
                    <span><a href='../redes'>REDES DE PROTEÇÃO</a></span>
                    <span><a href='../servicos'>SERVIÇOS</a></span>
                    <span><a href='../blog'>BLOG</a></span>
                    <span><a href='../contato'>CONTATO</a></span>
                </Links>
            </Menu>
        </Head>
    )
}

export default Header