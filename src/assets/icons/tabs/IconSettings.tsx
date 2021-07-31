import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIconProps {
  sizeX?: number;
  sizeY?: number;
  color?: string;
}

export const IconSettings = ({sizeX, sizeY, color}: IIconProps) => {
  return (
    <Svg
      width={sizeX || 32}
      height={sizeY || 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M16 10.435c-1.13 0-2.235.326-3.175.938a5.6 5.6 0 00-2.105 2.497 5.43 5.43 0 00-.325 3.216 5.522 5.522 0 001.564 2.85 5.765 5.765 0 002.926 1.522 5.858 5.858 0 003.302-.316 5.685 5.685 0 002.565-2.05A5.463 5.463 0 0021.715 16a5.51 5.51 0 00-1.679-3.93A5.81 5.81 0 0016 10.435zM28.338 16a11.23 11.23 0 01-.117 1.554l3.478 2.652a.789.789 0 01.188 1.028l-3.29 5.532a.827.827 0 01-.441.35.853.853 0 01-.57-.007l-4.089-1.6a12.697 12.697 0 01-2.773 1.577l-.611 4.228a.825.825 0 01-.285.486.866.866 0 01-.538.2h-6.58a.871.871 0 01-.53-.192.832.832 0 01-.293-.471l-.611-4.228a12.175 12.175 0 01-2.773-1.579l-4.09 1.6a.852.852 0 01-.569.008.827.827 0 01-.44-.35L.112 21.257A.788.788 0 01.3 20.229l3.478-2.652A11.83 11.83 0 013.662 16c.003-.52.042-1.04.117-1.554L.3 11.794a.788.788 0 01-.188-1.028l3.29-5.532a.827.827 0 01.441-.35.852.852 0 01.57.007l4.089 1.6a12.695 12.695 0 012.773-1.577l.611-4.228a.825.825 0 01.285-.487A.866.866 0 0112.71 0h6.58c.194.004.381.071.53.192.15.12.253.286.293.471l.611 4.228c.994.404 1.927.934 2.777 1.579l4.086-1.6a.853.853 0 01.569-.008c.184.062.34.186.44.35l3.291 5.532a.789.789 0 01-.188 1.028l-3.478 2.652c.074.522.113 1.049.117 1.576z"
        fill={color || '#000'}
      />
    </Svg>
  );
};
