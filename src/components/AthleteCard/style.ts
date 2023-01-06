import styled from "styled-components";

export const StyledAthleteCard = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 2px solid var(--color-primary);
    border-radius: 8px;

    width: 240px;
    height: 300px;

    cursor: pointer;

    :hover{
        transition: 0.3s;
        border: 2px solid var(--color-secundary);
        
        box-shadow: rgba(242, 68, 5, 0.25) 0px 54px 55px, rgba(242, 68, 5, 0.12) 0px -12px 30px, rgba(242, 68, 5, 0.12) 0px 4px 6px, rgba(242, 68, 5, 0.17) 0px 12px 13px, rgba(242, 68, 5, 0.09) 0px -3px 5px;
        transform: translateY(-10px);

        & > .div-inf {
            transition: 0.2s;
                background-color: var(--color-secundary);
        }

        & > .div-img > img{            
                transition: 5s;
                transform: scale(1.2);
        }
    }

    

    .div-img {
        width: 100%;
        height: 70%;

        overflow: hidden;

        border-radius: 6px 6px 0 0;

        & > img {
            width: 100%;
            height: 100%;
        }
    }

    .div-inf {
        width: 100%;
        height: 30%;

        padding: 16px;

        background-color: var(--color-primary);

        border-radius: 0 0 6px 6px;

        

        & > h3{
            color: var(--color-gray-0);
        }

        .div-local{
            display: flex;
            

            & > span{
                color: var(--color-gray-0);
            }
        }
    }


    

`