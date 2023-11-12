import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    text-align: center;
    padding: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View`
    align-items: 'center';
    justify-content: 'center';
    padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-size:  ${RFValue(25)}px;
`;

export const Description = styled.Text`
    text-align: center;

    margin-top: ${RFValue(60)}px;
    margin-bottom: ${RFValue(10)}px;
    font-size:  ${RFValue(17)}px;
`;

export const ViewButton = styled.View``;
export const ContentBody = styled.View``;
export const ContentFooter = styled.View``;
