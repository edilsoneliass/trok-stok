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
        font-family: 'Poppins Regular';
        ::-webkit-scrollbar {
            width: 12px; /* Width of the scrollbar */
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1; /* Track background */
        }

        ::-webkit-scrollbar-thumb {
            background-color: #888; /* Thumb color */
            border-radius: 10px; /* Rounded corners */
            border: 3px solid #f1f1f1; /* Adds padding with track color */
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* Thumb color on hover */
        }
    }
`;
