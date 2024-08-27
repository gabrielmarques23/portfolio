import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    height: 80px;
    width: 100%;
`;