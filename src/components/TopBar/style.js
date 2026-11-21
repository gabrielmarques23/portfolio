import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  min-height: 100px;
  padding: 1.25rem 2rem;

  @media (max-width: 900px) {
    min-height: 90px;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: .75rem;
  }
`;

export const HeaderInset = styled.div`
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 34%;
  min-height: 78px;
  padding: .75rem;
  border-radius: 0 0 36px 36px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  font-size: .75rem;
  span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: .75rem;
    letter-spacing: .22em;
    margin-bottom: .2rem;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 28px;
    height: 28px;
    background: transparent;
  }
  &::before {
    right: 100%;
    border-radius: 0 28px 0 0;
    box-shadow: 7px -7px 0 7px ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
  &::after {
    left: 100%;
    border-radius: 28px 0 0 0;
    box-shadow: -7px -7px 0 7px ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
  @media (max-width: 1100px) {
    width: 28%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .75rem;
  text-decoration: none;
  min-height: 44px;
  font-weight: 500;
  font-size: .875rem;
  small {
    display: block;
    font-size: .75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_02};
  }
  .logo-symbol {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .3);
    border-radius: 50%;
    background: rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .08);
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }
`;

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: .7rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .3);
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: .875rem;
  font-weight: 500;
  text-decoration: none;
  background: rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .12);
  transition: background .2s ease;
  &:hover {
    background: rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .24);
  }
`;
