import styled from "styled-components";
import { cardSurface } from "../../styles/glass";

export const MetricsContainer = styled.aside`
  ${cardSurface}
  width: min(100%, 340px);
  padding: 1.5rem;
  border-radius: 38px;
  @media (max-width: 900px) {
    width: 100%;
    border-radius: 28px;
  }
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AvatarBox = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
  }
`;

export const ProfileInfo = styled.div`
  h2 {
    margin: 0 0 .3rem;
    font-size: 1rem;
    font-weight: 500;
  }
  span {
    display: block;
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  }
`;

export const StatsGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 0;
  padding: 1rem 0;
  border-block: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;
  dd {
    margin: 0;
    order: -1;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: -.04em;
  }
  dt {
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  }
`;

export const StackSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const StackChips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Chip = styled.li`
  font-size: .875rem;
  padding: .35rem .65rem;
  border-radius: 999px;
  background: rgba(255,255,255,.04);
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
`;
