Erros
<code>
npx create-react-app my-react-app
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\cibelle.costa\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\cibelle.costa\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent
</code>

Solução
Verifique se o Node.js e o npm estão instalados corretamente em seu sistema.
<code>
node -v
npm -v
</code>

1. Pasta npm não existia, criar manual

2. template bare não tem typescript, necessário instalar dependências e mudar App.js para App.tsx

3. CLI expo para instalar as fontes
<code></ccode>
npm install -g expo-cli
npx expo install expo-font @expo-google-fonts/dm-sans
npx expo install expo-font @expo-google-fonts/dm-serif-display
npx expo install expo-font @expo-google-fonts/poppins

Atalho
No Visual Studio, o atalho padrão para comentar linhas é o CTRL + K CTRL + C

5. expo-app-loading depreciado

Erro com extensão vscode-styled-components
Property 'View' does not exist on type '(<Target extends WebTarget>(tag: Target) =>....)


Could not find a declaration file for module 'styled-components/native'
<code>
import styled from 'styled-components/native`;

export const Container = styled.View`
  ...
`;
</code>
Para resolver
* npm install --save-dev @types/styled-components-react-native
* add the types to tsconfig.json file:

{
  "compilerOptions": {
    // ...
    "types": [
      "@types/styled-components-react-native"
    ]
  },
  // ...
}

Cannot find module 'react-native-gesture-handler' or its corresponding type declarations.
npm install react-native-gesture-handler
