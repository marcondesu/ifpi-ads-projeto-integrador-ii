import React from 'react'
import { SafeAreaView } from 'react-native'
import { Container, ContentHeader, Title, ViewButton, ContentBody, ContentFooter, Description } from './styles'
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle'
import { ButtonSocial } from '../../components/ButtonSocial/ButtonSocial'
import { Input } from '../../components/input/Input'

const Login: React.FC = () => {
    return (
        <SafeAreaView>

            <Container>

                <ContentHeader>
                    <Title>Seja bem vindo(a){"\n"}ao MoodMinder!</Title>
                    <Description>Entrar com redes sociais</Description>

                    <ViewButton style={{ alignItems: 'center' }}>
                        <ButtonSocialGoogle title={'Google'} />
                        <ButtonSocial title={'Facebook'} iconName={'facebook'} />
                    </ViewButton>

                </ContentHeader>


                <ContentBody>
                    <Input
                        name='email'
                    />
                </ContentBody>


                <ContentFooter>

                </ContentFooter>

            </Container>

        </SafeAreaView>
    )
}
export { Login }
