/* eslint-disable max-len,react/jsx-props-no-spreading */
import { FC, SVGProps } from 'react';
import { createIcon } from 'shared/ui/Icons/createIcon';

const Icon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.06 33.834 33.834">
    <path
      d="M15.217 15.309a2.38 2.38 0 01.489-1.434 9.29 9.29 0 011.443-1.482 10.139 10.139 0 001.321-1.372 1.985 1.985 0 00.368-1.2 1.956 1.956 0 00-1.983-2 2.073 2.073 0 00-1.419.543 3.575 3.575 0 00-.954 1.582l-2.152-.939a5.029 5.029 0 011.724-2.656 4.626 4.626 0 012.9-.927 4.968 4.968 0 012.287.531 4.168 4.168 0 011.651 1.495 3.974 3.974 0 01.612 2.175 3.688 3.688 0 01-.538 1.965 8.8 8.8 0 01-1.639 1.865 13.862 13.862 0 00-1.358 1.322 1.536 1.536 0 00-.379 1 2.85 2.85 0 00.1.667h-2.2a2.737 2.737 0 01-.273-1.135zm1.467 6.968a1.851 1.851 0 01-1.357-.543 1.831 1.831 0 01-.551-1.359 1.875 1.875 0 01.551-1.372 1.835 1.835 0 011.357-.556 1.87 1.87 0 011.909 1.928 1.834 1.834 0 01-.55 1.359 1.857 1.857 0 01-1.359.543z"
    />
    <path
      d="M1.474 33.717a1.475 1.475 0 01-.626-.14A1.459 1.459 0 010 32.244V3.572A3.576 3.576 0 013.572 0h26.69a3.576 3.576 0 013.572 3.572v20.416a3.576 3.576 0 01-3.572 3.571H10.29a2.555 2.555 0 00-1.637.594l-6.24 5.22a1.467 1.467 0 01-.939.344zM3.572 2A1.574 1.574 0 002 3.572V31.11l5.37-4.491a4.561 4.561 0 012.92-1.06h19.972a1.573 1.573 0 001.572-1.571V3.572A1.574 1.574 0 0030.262 2z"
    />
  </svg>
);

export const InfoIcon = createIcon(Icon);
