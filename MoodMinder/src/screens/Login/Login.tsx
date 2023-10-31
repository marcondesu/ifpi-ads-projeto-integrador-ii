import React from 'react'
import { SafeAreaView } from 'react-native'
import { Container, ContentHeader, Title, ViewButton, ContentBody, ContentFooter, Description } from './styles'
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle'

const Login: React.FC = () => {
    return (
        <SafeAreaView>

            <Container>

                <ContentHeader>
                    <Title>Seja bem vindo(a){"\n"}ao MoodMinder!</Title>
                    <Description>Entrar com redes sociais</Description>
                    <ViewButton>
                        <ButtonSocialGoogle />
                    </ViewButton>
                </ContentHeader>


                <ContentBody>

                </ContentBody>


                <ContentFooter>

                </ContentFooter>

            </Container>

        </SafeAreaView>
    )
}
export { Login }
