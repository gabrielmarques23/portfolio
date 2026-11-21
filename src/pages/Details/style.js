import styled from "styled-components";

export const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
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
    padding: .75rem .75rem calc(7rem + env(safe-area-inset-bottom));
  }
`;

export const MainContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 0 1rem 0 5.5rem;
  flex-wrap: wrap;
  align-content: center;
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}) {
    padding: 0;
  }
`;

export const CenterStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: clamp(2.5rem, 5vw, 5rem) 0;
`;

export const CardsFooter = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  gap: ${({ theme }) => theme.SPACE.large};
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}) {
    flex-direction: column;
  }
`;
