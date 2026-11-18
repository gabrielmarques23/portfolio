import styled from "styled-components";
import { glassEffect } from "../../styles/glass";

export const DockContainer = styled.nav`
  ${glassEffect}
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 0.75rem 0.55rem;
  border-radius: 24px;
  z-index: 30;
  background: rgba(22, 22, 28, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15);

  @media (max-width: 900px) {
    position: fixed;
    bottom: 1.25rem;
    left: 50%;
    top: auto;
    transform: translateX(-50%);
    flex-direction: row;
    padding: 0.65rem 1.15rem;
    border-radius: 30px;
    z-index: 50;
    backdrop-filter: blur(16px);
  }
`;

export const DockItem = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  color: ${({ $active, theme }) => ($active ? theme.COLORS.WHITE : "rgba(244, 244, 246, 0.65)")};
  background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.12)" : "transparent")};
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.08);

    span {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    &:hover span {
      display: none;
    }
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  left: calc(100% + 14px);
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  background: rgba(18, 18, 22, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-6px);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;
