import {extendTheme, ThemeConfig} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

let theme = extendTheme({config});

export default theme;
