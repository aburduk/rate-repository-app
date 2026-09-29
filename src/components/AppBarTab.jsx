import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.accent,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: theme.colors.appBarText,
  },
});

export default function AppBarTab({ children, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
    >
      <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
        {children}
      </Text>
    </Pressable>
  );
}
