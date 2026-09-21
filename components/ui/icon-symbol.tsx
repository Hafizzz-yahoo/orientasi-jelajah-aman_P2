import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { type ComponentProps } from 'react';
import { type ColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconSymbolName =
  | 'house.fill'
  | 'paperplane.fill'
  | 'chevron.left.forwardslash.chevron.right'
  | 'chevron.right';

type IconSymbolProps = {
  name: IconSymbolName;
  size?: number;
  color?: ColorValue;
  weight?: string;
  style?: StyleProp<TextStyle>;
};

const MAPPING: Record<
  IconSymbolName,
  ComponentProps<typeof MaterialIcons>['name']
> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: IconSymbolProps) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}