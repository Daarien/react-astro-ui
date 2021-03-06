import React from 'react';
import { css } from 'astroturf';

// const Paper: StyledComponent<'div'> = styled.div`
// const Paper = styled('div')`
//     box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
//         0px 2px 1px -1px rgba(0, 0, 0, 0.12);
//     border-radius: 4px;
//     padding: 1rem;
// `;

// export default Paper;

const styles = css`
  .paper {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 1rem;
  }
`;

export default function Paper({ children }) {
  return <div className={styles.paper}>{children}</div>;
}
