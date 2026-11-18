import styled from "styled-components";
import { glassEffect } from "../../styles/glass";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-shrink: 0;
  padding-bottom: clamp(0.75rem, 1.8vh, 1.25rem);
  z-index: 20;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.COLORS.WHITE};

  .logo-symbol {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(255, 122, 26, 0.9), rgba(89, 0, 213, 0.9));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 800;
    color: #fff;
    box-shadow: 0 4px 12px rgba(255, 122, 26, 0.25);
  }
`;

export const FilterPill = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.45rem;
  border-radius: 9999px;

  ${glassEffect}
  background: rgba(22, 22, 28, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);

  @media (max-width: 900px) {
    order: 3;
    width: 100%;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0.35rem 0.5rem;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FilterButton = styled.button`
  border: none;
  background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.14)" : "transparent")};
  color: ${({ $active, theme }) => ($active ? theme.COLORS.WHITE : "rgba(244, 244, 246, 0.65)")};
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.15rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  ${glassEffect}
  background: rgba(255, 122, 26, 0.18);
  border: 1px solid rgba(255, 122, 26, 0.45);
  box-shadow: 0 4px 16px rgba(255, 122, 26, 0.2);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: rgba(255, 122, 26, 0.3);
    border-color: rgba(255, 122, 26, 0.7);
    box-shadow: 0 6px 20px rgba(255, 122, 26, 0.35);
    transform: translateY(-1px);

    svg {
      transform: translate(2px, -2px);
    }
  }
`;
