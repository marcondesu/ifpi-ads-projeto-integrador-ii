import React from 'react';
import AppLoading from 'expo-app-loading';

// configuração de estilos
import theme from './styles/theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// importação de fontes
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"

import { Login } from './screens/Login/Login';

export default function App() {
    const [fontsLoaded] = useFonts ({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    })

    if ( !fontsLoaded ) {
        AppLoading
    }

    return (
        <ThemeProvider theme={theme}>
        <NavigationContainer>
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <View>
                <Login></Login>
            </View>
        </NavigationContainer>
    </ThemeProvider>
    );
}
