import { Text, TextInputProps } from "react-native";
import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect
} from "react";

import { Container, IContainer, InputText } from "./styles";
import { useField } from '@unform/core'
import { Ionicons } from '@expo/vector-icons'

interface InputRef {
    focus: void
}


interface InpuValuetReference {
    Value: string
}

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons> ["name"]
}


const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = () => {
    return (
        <Container>
            <Text>INput</Text>
        </Container>
    )
}

export { Input }
