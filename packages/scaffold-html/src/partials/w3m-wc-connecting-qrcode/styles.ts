import { css } from 'lit'

export default css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: var(--wui-border-radius-m) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 300ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`