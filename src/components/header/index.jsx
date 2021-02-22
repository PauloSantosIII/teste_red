import React from 'react'
import { Head, Left, Right, Phone, WApp, Social, Menu, Links, Slogan, WAppSide } from '../../styleds/head'
import { FaPhoneAlt, FaWhatsapp, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <Head>
            <Left>  
                <Phone>
                    <p><a href='tel:+41984154262'><FaPhoneAlt style={{ color: '#000'}} /> 41 9983929</a></p>
                </Phone>
                <WApp>
                    <p><a href='https://api.whatsapp.com/send?phone=55419983929'><FaWhatsapp /> 41 9983929 </a></p>
                </WApp>
            </Left>
            <Right>
                <Social>
                    <a href='https://twitter.com/confiancaseguros' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
                    <a href='https://instagram.com/confiancaseguros' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                    <a href='https://facebook.com/confiancaseguros' target='_blank' rel='noopener noreferrer'><FaFacebookF style={{ color: '#fff'}} /></a>
                    <a href='https://linkedin.com/in/confiancaseguros' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
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
            <Slogan>
                <p>A segurança <br/>
                da sua família <br/>
                é <strong>nossa prioridade</strong></p>
            </Slogan>
            <WAppSide>
                <a href='https://api.whatsapp.com/send?phone=55419983929'><FaWhatsapp /></a>
            </WAppSide>
        </Head>
    )
}

export default Header