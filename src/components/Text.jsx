import { StyleSheet, Text as NativeText } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  secondary: { color: theme.colors.textSecondary },
  primary: { color: theme.colors.primary },
  subheading: { fontSize: theme.fontSizes.subheading },
  bold: { fontWeight: theme.fontWeights.bold },
});

export default function Text({ color, fontSize, fontWeight, style, ...props }) {
  return (
    <NativeText
      {...props}
      style={[
        styles.text,
        color === 'textSecondary' && styles.secondary,
        color === 'primary' && styles.primary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style,
      ]}
    />
  );
}
