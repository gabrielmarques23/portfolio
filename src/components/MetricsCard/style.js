import styled from "styled-components";
import { glassEffect } from "../../styles/glass";

export const MetricsContainer = styled.aside`
  width: 100%;
  max-width: 360px;
  border-radius: 26px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${glassEffect}
  background: rgba(22, 22, 28, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(58, 74, 122, 0.5);
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AvatarBox = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(89, 0, 213, 0.3), rgba(255, 122, 26, 0.25));
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    letter-spacing: -0.01em;
  }

  span {
    font-size: 0.76rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
  padding: 0.85rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  strong {
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  span {
    font-size: 0.7rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
    letter-spacing: 0.01em;
  }
`;

export const StackSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  .section-label {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }
`;

export const StackChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Chip = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.3rem 0.65rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_01};
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
`;
