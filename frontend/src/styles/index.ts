import { createGlobalStyle } from 'styled-components';
import * as theme from './selectors';
import { Theme, defaultTheme } from './default.theme';

export { theme, defaultTheme };
export type { Theme };

export const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: "Jersey";
        src: url("/fonts/Jersey25-Regular.ttf") format('truetype');
    }

    @font-face{
        font-family: "Poppins Regular";
        src: url("/fonts/Poppins-Regular.ttf") format('truetype');
    }

    @font-face{
        font-family: "Poppins Bold";
        src: url("/fonts/Poppins-Bold.ttf") format('truetype');
    }

    @font-face{
        font-family: "Poppins SemiBold";
        src: url("/fonts/Poppins-SemiBold.ttf") format('truetype');
    }

    @font-face{
        font-family: "Poppins Medium";
        src: url("/fonts/Poppins-Medium.ttf") format('truetype');
    }

    @font-face{
        font-family: "Poppins Italic";
        src: url("/fonts/Poppins-MediumItalic.ttf") format('truetype');
    }

    @font-face{
        font-family: "Poppins ExtraLight";
        src: url("/fonts/Poppins-ExtraLight.ttf") format('truetype');
    }

    @font-face{
        font-family: "Poppins ExtraBold";
        src: url("/fonts/Poppins-ExtraBold.ttf") format('truetype');
    }
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-family: 'Poppins Regular'
    }
`;
