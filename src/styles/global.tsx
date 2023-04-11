import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *:focus {
        outline: 0;
    }
    
    :root{        
        --failure: #E52e54;
        --success: #40AA60;
        --dark-grey: #333333;
        --light-grey: #999999;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background-color: #F3F5F8;

        color: var(--dark-grey);
        margin: 0;
    }

    a {        
        text-decoration: none;
    }

    button {
        cursor: pointer;        
        transition: filter 0.3s;        
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

        &:hover {
            filter: brightness(90%);
        }

        :disabled {
            opacity: 0.4;
        }
    }
`;
