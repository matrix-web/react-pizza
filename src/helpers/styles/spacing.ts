import { css } from 'styled-components';

export const spacingStyles = css`
  :root {
    --spacing-coefficient: 4;

    --space-xxs: calc(4px * var(--spacing-coefficient));
    --space-xs: calc(6px * var(--spacing-coefficient));
    --space-s: calc(8px * var(--spacing-coefficient));
    --space-m: calc(12px * var(--spacing-coefficient));
    --space-l: calc(16px * var(--spacing-coefficient));
    --space-xl: calc(24px * var(--spacing-coefficient));
    --space-xxl: calc(30px * var(--spacing-coefficient));
  }
`;
