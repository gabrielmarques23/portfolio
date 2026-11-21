import styled from "styled-components";

export const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: clamp(.75rem, 3vw, 3rem);
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  .skip-link {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 100;
    padding: 1rem;
    border-radius: 12px;
    background: #18181c;
    transform: translateY(-200%);
  }
  .skip-link:focus {
    transform: translateY(0);
  }
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}) {
    padding-bottom: calc(7rem + env(safe-area-inset-bottom));
  }
`;

export const MainContent = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
`;

export const CenterStage = styled.div`
  position: relative;
  width: 100%;
`;

export const CardsFooter = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin-top: -190px;
  padding: 0 1.5rem 1.5rem 6rem;

  @media (max-width: 1100px) {
    gap: 1.5rem;
    padding-left: 5.5rem;
    margin-top: -120px;
  }
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}) {
    flex-direction: column;
    align-items: stretch;
    margin-top: -35px;
    padding: 0 1rem 1rem;
    gap: 1rem;
  }
`;
