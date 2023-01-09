import styled from "styled-components";

export const StyledUserDash = styled.main`

    header{
        width: 100%;
        height: 50px;
        background-color: grey;
    }

    .bg-blue{
        width: 100%;
        height: 60vh;
        background-color: var(--color-primary-100);

        position: relative;
        z-index: 0;

        & > img {
            display: none;
        }
    }

    .container{
        width: 100%;
        position: absolute;
        z-index: 1;
        top: 65px;
        
        padding: 16px;

        min-height: 85vh;

        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
    }

    .donations-history{
        width: 100%;
        height: fit-content;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        border: 1px solid var(--color-gray-0);
               

        & > h2 {
            border-bottom: 1px solid var(--color-gray-0);
            width: 100%;
            text-align: center;
            text-justify: center;
            padding: 8px;
        }
    }

    .ul-mobile {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            gap: 16px;

            padding: 16px;
        }

    .ul-desktop {
        display: none;
    }

    .render-buttons{
        background-color: white;
        width: 100%;
        height: 30vh;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        border-radius: 16px;
    }

    .sidebar{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        & > ul {
            width: 100%;
            overflow-x: hidden;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;

            background-color: var(--color-gray-0);

            & > li{
               scale: 0.7;
            }
        }
    }

    @media (min-width: 750px) {
        
        .bg-blue{
            height: 70vh;  
        }

        .container{
            height: fit-content;
        }

        .donations-history{
            width: 700px;
            height: 320px;
            border-radius: 8px;
        }
        
        .ul-mobile {
            display: none;
        }

        .ul-desktop{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;

            height: 280px;

            & > li {
                scale: 0.8;
                width: 180px;
                border: 1px solid var(--color-gray-0);
            }
        }

    .render-buttons{
        width: 700px;
        height: 350px;
    }

    .sidebar{
        position: absolute;
        right: 450px;
        bottom: 150px;

        & > ul {
            width: 170px;
            height: fit-content;
            flex-wrap: wrap;
            justify-content: center;
            background-color: white;

            & > li {
                min-width: 50px;
            }
        }

    }
}

    
`
