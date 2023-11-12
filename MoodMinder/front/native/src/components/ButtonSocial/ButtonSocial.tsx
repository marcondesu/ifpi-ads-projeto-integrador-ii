import { Fontisto } from '@expo/vector-icons'
import { Button, IconeFacebook, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

interface Props extends RectButtonProps {
    title: string
    iconName: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonSocial: React.FC<Props> = ({ title, iconName, ...rest}) => {
    return (
        <Button { ...rest}>
            <IconeFacebook name={iconName} />
            <Title>{title}</Title>
        </Button>
    )
}
export { ButtonSocial }
