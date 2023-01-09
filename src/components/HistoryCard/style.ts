import styled from "styled-components";

export const StyledHistoryCard = styled.li`

    cursor:pointer;

    width: 100%;
    height: 42px;

    padding: 8px;

    border: 1px solid var(--color-gray-0);

    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-secundary-100);

    & > div{

        display: flex;
        align-items: center;
        justify-content: center;

        width: fit-content;
        gap: 16px;

        & > img {
        height: 36px;
        width: 36px;

        border-radius: 50%;

        background-color: white;
    }
    }
    
    span{
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
        color: var(--color-gray-0);
    }
    
`