import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect,
} from 'react'
import { Container, IContainer, InputText } from './styles'
import { useField } from '@unform/core'
import { Text, TextInputProps } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';

interface InputRef {
    focus: void;
}

interface InputValueReference {
    Value: string;
}

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    containerStyle?: { [key: string]: string | number };
}


const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { iconName,
        name,
        value,
        containerStyle,
        ...rest }
) => {

    const theme = useTheme

    const [hasError, setHasError] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setisFilled] = useState(false)

    const {
        reisterField,
        fieldName,
        defaultValue = "",
        error
    } = useField(name)

    return (
        <Container style={containerStyle}>

            <IContainer
                isFilled={isFilled}
                isFocused={isFocused}
                hasError={hasError}
            >
                <Ionicons
                    name={iconName}
                    size={25}
                    color={
                        isFocused || hasError || isFilled
                        ? '#2F80ED'
                        :'#333333' }
                />
            </IContainer>

            <InputText
                isFilled={isFilled}
                isFocused={isFocused}
                hasError={hasError}
                placeholderTextColor={'#333333'}
            />
        </Container>
    )
}

export { Input }
