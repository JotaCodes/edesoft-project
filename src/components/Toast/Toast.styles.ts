import { css } from 'styled-components';

const ToastStyles = css`
  .Toastify__toast {
    border-radius: ${({ theme }) => theme.borders.width.heavy};
    padding-left: 18px;
    font-size: ${({ theme }) => theme.fonts.fontSize.sm};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.white};

    &--error {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &--success {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .Toastify__progress-bar {
    &--success {
      background: ${({ theme }) => theme.colors.secondaryColorMedium};
    }

    &--error {
      background: ${({ theme }) => theme.colors.primaryLightest};
    }
  }

  .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
    svg {
      width: 16px;
      height: 16px;
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  .Toastify__close-button--light {
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default ToastStyles;
export { ToastStyles };
