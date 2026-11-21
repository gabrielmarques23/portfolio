import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_LIGHT};
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .75rem;
  text-decoration: none;
  min-height: 44px;
  font-weight: 600;
  font-size: 1rem;
  small {
    display: block;
    font-size: .875rem;
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
    border-radius: 14px;
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
  border-radius: ${({ theme }) => theme.RADII.control};
  border: 1px solid rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .4);
  color: ${({ theme }) => theme.COLORS.ACCENT};
  font-size: .875rem;
  font-weight: 500;
  text-decoration: none;
  background: rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .06);
  transition: background .2s ease;
  &:hover {
    color: ${({ theme }) => theme.COLORS.ACCENT_HOVER};
    background: rgba(${({ theme }) => theme.COLORS.ACCENT_RGB}, .16);
  }
`;
