import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ComposeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M10.7,24a2.69,2.69,0,0,1-2.62-2A3,3,0,0,1,8,21.25V10.73A2.63,2.63,0,0,1,9,8.64,2.71,2.71,0,0,1,10.76,8H16a.55.55,0,0,1,.51.59.54.54,0,0,1-.55.51H10.82a1.67,1.67,0,0,0-1.22.48,1.61,1.61,0,0,0-.49,1.15V21.22a1.66,1.66,0,0,0,1.55,1.67H21.24a1.67,1.67,0,0,0,1.64-1.47,2,2,0,0,0,0-.25V16a.56.56,0,0,1,.53-.57h0A.56.56,0,0,1,24,16v5.26a2.68,2.68,0,0,1-1.93,2.6,2.87,2.87,0,0,1-.77.11H10.7Zm.85-3.9a1.3,1.3,0,0,1,0-.44,29.83,29.83,0,0,1,.85-3.25,1.16,1.16,0,0,1,.29-.46L19.8,8.81a2.38,2.38,0,0,1,1.71-.74A2.27,2.27,0,0,1,23,8.62a2.38,2.38,0,0,1,.86,1.53c0,.11,0,.22,0,.3a2.45,2.45,0,0,1-.74,1.75L17,18.39c-.34.35-.68.7-1,1a.72.72,0,0,1-.25.16L14.41,20c-.72.21-1.45.38-2.19.52H12.1a.54.54,0,0,1-.55-.44ZM20.63,9.55,13.5,16.72a.31.31,0,0,0-.06.13l-.33,1.28c-.09.36-.18.71-.27,1.08h.07l2.3-.58a.42.42,0,0,0,.12-.08c1.39-1.4,2.79-2.8,4.18-4.21l2.9-2.91a1.26,1.26,0,0,0,.39-1.13,1.19,1.19,0,0,0-.85-1,1.44,1.44,0,0,0-.46-.08,1.23,1.23,0,0,0-.86.37Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M10.7,24a2.69,2.69,0,0,1-2.62-2A3,3,0,0,1,8,21.25V10.73A2.63,2.63,0,0,1,9,8.64,2.71,2.71,0,0,1,10.76,8H16a.55.55,0,0,1,.51.59.54.54,0,0,1-.55.51H10.82a1.67,1.67,0,0,0-1.22.48,1.61,1.61,0,0,0-.49,1.15V21.22a1.66,1.66,0,0,0,1.55,1.67H21.24a1.67,1.67,0,0,0,1.64-1.47,2,2,0,0,0,0-.25V16a.56.56,0,0,1,.53-.57h0A.56.56,0,0,1,24,16v5.26a2.68,2.68,0,0,1-1.93,2.6,2.87,2.87,0,0,1-.77.11H10.7Zm.85-3.9a1.3,1.3,0,0,1,0-.44,29.83,29.83,0,0,1,.85-3.25,1.16,1.16,0,0,1,.29-.46L19.8,8.81a2.38,2.38,0,0,1,1.71-.74A2.27,2.27,0,0,1,23,8.62a2.38,2.38,0,0,1,.86,1.53c0,.11,0,.22,0,.3a2.45,2.45,0,0,1-.74,1.75L17,18.39c-.34.35-.68.7-1,1a.72.72,0,0,1-.25.16L14.41,20c-.72.21-1.45.38-2.19.52H12.1a.54.54,0,0,1-.55-.44Z"
      />
    </svg>
  ),
  displayName: 'ComposeIcon',
});
