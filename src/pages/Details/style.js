import styled from "styled-components";

export const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const MainContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 0 5.25rem;

  @media (max-width: 1200px) {
    padding: 0 4.5rem;
  }

  @media (max-width: 900px) {
    padding: 0;
  }
`;

export const CenterStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  padding: 1rem 0;
`;

export const CardsFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  gap: 1.5rem;
  margin-top: auto;
  flex-shrink: 0;
  padding-top: 1rem;
  z-index: 10;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
    padding-bottom: 5.5rem;
  }
`;
