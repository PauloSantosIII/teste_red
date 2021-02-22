import React from 'react'
import { Container, ContainerUp, Slogan, ContainerLinks, Images, ContainerDown, TextLinks } from '../../styleds/body'
import { AiOutlineArrowRight } from 'react-icons/ai'
import boy_painting from '../../assets/images/boy_painting.png'
import realizados from '../../assets/images/5k.png'
import instalados from '../../assets/images/25k.png'
import protegidos from '../../assets/images/10k.png'

const Body = () => {
    return (
        <Container>
            <ContainerUp>
                <Slogan>
                    <p>Proteção <br/> para <strong>todos</strong></p>
                </Slogan>
                <ContainerLinks style={{ boxShadow: 'none' }}>
                    <Images style={{ backgroundImage: 'url('+boy_painting+')', backgroundSize: 'cover' }}/>
                    <Images style={{ backgroundImage: 'url('+boy_painting+')', backgroundSize: 'cover' }}/>
                    <Images style={{ backgroundImage: 'url('+boy_painting+')', backgroundSize: 'cover' }}/>
                </ContainerLinks>
            </ContainerUp>
            <ContainerDown>
                <ContainerLinks>
                    <TextLinks>
                        <p><strong>Redes de proteção <br/> para crianças</strong></p>
                        <p>Tesla. Inc. (antigamente Tesla Motors <br/>
                         Inc), é uma empresa automotiva e de <br />
                          armazenamento de energia norte</p>
                        <p><a href='./saiba-mais' target='_blank' rel='noopener noreferrer'><strong>SAIBA MAIS </strong><AiOutlineArrowRight /></a></p>
                    </TextLinks>
                    <TextLinks style={{ backgroundColor: '#246ea4' }}>
                        <p style={{ color: '#fff' }}><strong>Redes de proteção <br/> para idosos</strong></p>
                        <p style={{ color: '#fff' }}>Tesla. Inc. (antigamente Tesla Motors <br/>
                         Inc), é uma empresa automotiva e de <br />
                          armazenamento de energia norte</p>
                        <p style={{ color: '#fff' }}>
                            <a href='./saiba-mais' target='_blank' rel='noopener noreferrer' style={{ color: '#fff' }}  >
                                <strong>SAIBA MAIS </strong><AiOutlineArrowRight />
                            </a>
                        </p>
                    </TextLinks>
                    <TextLinks>
                        <p><strong>Redes de proteção <br/> para animais</strong></p>
                        <p>Tesla. Inc. (antigamente Tesla Motors <br/>
                         Inc), é uma empresa automotiva e de <br />
                          armazenamento de energia norte</p>
                        <p><a href='./saiba-mais' target='_blank' rel='noopener noreferrer'><strong>SAIBA MAIS </strong><AiOutlineArrowRight /></a></p>
                    </TextLinks>
                </ContainerLinks>
                <Slogan style={{ height: '140px', marginTop: '20px', marginBottom: '20px' }}>
                    <p style={{ color: '#246ea4' }}>Não basta ter <br/><strong>segurança, </strong> tem <br/> que ter <strong>confiança</strong></p>
                </Slogan>
                <ContainerLinks style={{ marginBottom: '20px', height: '200px', boxShadow: 'none' }}>
                    <TextLinks style={{ backgroundImage: 'url('+realizados+')', backgroundSize: 'cover', height: '200px' }} />
                    <TextLinks style={{ backgroundImage: 'url('+instalados+')', backgroundSize: 'cover', height: '200px' }} />
                    <TextLinks style={{ backgroundImage: 'url('+protegidos+')', backgroundSize: 'cover', height: '200px' }} />
                </ContainerLinks>
            </ContainerDown>
        </Container>
    )   
}

export default Body