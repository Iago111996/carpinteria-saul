import styled from "styled-components";

export const Container = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        li a {
            font-family: ${({theme}) => theme.fonts.regular};
            font-size: 1.1rem;

            color: ${({theme}) => theme.colors.primary};

            text-decoration: none;

            &:hover {
                color: ${({theme}) => theme.colors.hover_color};
            }
        }
    }
`;
