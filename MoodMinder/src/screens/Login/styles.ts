import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View`
    align-items: 'center';
    justify-content: 'center';
    padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size:  ${RFValue(25)}px;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size:  ${RFValue(17)}px;
`;

export const ViewButton = styled.View``;
export const ContentBody = styled.View``;
export const ContentFooter = styled.View``;
