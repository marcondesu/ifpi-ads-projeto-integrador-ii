import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    justify-content: center;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    /* box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2); */
    `;

    // background-color: ${({ theme }) => theme.COLORS.GRAY4};
