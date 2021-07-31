import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIconProps {
  sizeX?: number;
  sizeY?: number;
  color?: string;
}

export const IconHome = ({sizeX, sizeY, color}: IIconProps) => {
  return (
    <Svg
      width={sizeX || 32}
      height={sizeY || 28}
      viewBox="0 0 32 28"
      fill="none">
      <Path
        d="M26 8.921V1h-5v3.653L16 0 0 15h4v13h9V18h6v10h9V15h4l-6-6.079z"
        fill={color || '#000'}
      />
    </Svg>
  );
};
