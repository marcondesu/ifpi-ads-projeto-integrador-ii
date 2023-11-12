import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";

export const Button = styled(RectButton)`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;

    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin-bottom: 16px;

    background-color: #4368C7;
    border-radius: ${RFValue(5)}px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
    `;

export const IconeFacebook = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: white;
    `;

export const Title = styled.Text`
    color: white;
    font-size: ${RFValue(15)}px;
    font-family: 'Poppins_300Light';
    margin-left: ${RFValue(10)}px;
`;

