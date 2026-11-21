import styled from "styled-components";
import { glassEffect } from "../../styles/glass";

export const DockContainer = styled.nav`
  ${glassEffect}
  --dock-item-size: 44px;
  --dock-gap: 0.85rem;
  --dock-padding-x: 0.55rem;
  --dock-padding-y: 0.75rem;

  position: absolute;
  left: 1.25rem;
  top: 46%;
  transform: translateY(-50%);
  width: fit-content;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--dock-gap);
  padding: var(--dock-padding-y) var(--dock-padding-x);
  border-radius: 999px;
  z-index: 30;
  background: rgba(12, 24, 37, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15);

  @media (max-width: 900px) {
    --dock-padding-x: 1.15rem;
    --dock-padding-y: 0.65rem;

    position: fixed;
    bottom: calc(1rem + env(safe-area-inset-bottom));
    left: 50%;
    top: auto;
    transform: translateX(-50%);
    flex-direction: row;
    border-radius: 30px;
    z-index: 50;
    backdrop-filter: blur(16px);
  }
`;

export const ActiveIndicator = styled.span`
  position: absolute;
  top: calc(
    var(--dock-padding-y) +
    var(--active-index) * (var(--dock-item-size) + var(--dock-gap))
  );
  left: var(--dock-padding-x);
  width: var(--dock-item-size);
  height: var(--dock-item-size);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition:
    top 0.32s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;

  @media (max-width: 900px) {
    top: var(--dock-padding-y);
    left: calc(
      var(--dock-padding-x) +
      var(--active-index) * (var(--dock-item-size) + var(--dock-gap))
    );
    transition:
      left 0.32s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.2s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const DockItem = styled.a`
  position: relative;
  z-index: 1;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: var(--dock-item-size);
  height: var(--dock-item-size);
  border-radius: 14px;
  color: ${({ $active, theme }) => ($active ? theme.COLORS.WHITE : "#b8b8c2")};
  background: transparent;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;

  &:focus-visible {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: rgba(255, 255, 255, 0.08);

    span {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: rgba(255, 255, 255, 0.08);

      span {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
    }
  }

  @media (max-width: 900px) {
    &:hover span,
    &:focus-visible span {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
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
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-6px);
  transition:
    transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease,
    visibility 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;
