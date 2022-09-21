declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const url: string;

  export { ReactComponent }

  export default url;
}
