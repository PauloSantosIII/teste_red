import React from 'react'
import { Container, ContainerUp, ContainerDown, Button, Slogan, ContainerLinks, Images } from '../../styleds/expert'

const Expert = () => {
    return (
        <Container>
            <ContainerUp>
                <p  style={{ marginBottom: '0px' }} >Fale com um <br/><strong>especialista</strong></p>
                <p style={{ fontSize: '12px' }} >
                    E descubra as melhores opções <br/>
                    para a sua necessidade
                </p>
                <Button><a href='./experts'>FALAR AGORA</a></Button>
            </ContainerUp>
            <ContainerDown>
                <Slogan>
                    <p>Por que <br/> nos <strong>escolher</strong></p>
                </Slogan>
                <ContainerLinks>
                    <Images>
                        <p>Garantia</p>
                    </Images>
                    <Images>
                        <p>Garantia</p>
                    </Images>
                    <Images>
                        <p>Profissionais</p>
                    </Images>
                    <Images>
                        <p>Experiência</p>
                    </Images>
                    <Images>
                        <p>Experiência</p>
                    </Images>
                </ContainerLinks>
            </ContainerDown>
        </Container>
    )   
}

export default Expert