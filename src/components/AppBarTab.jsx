import { Pressable, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: theme.colors.appBarText,
  },
});

export default function AppBarTab({ children, to }) {
  const navigate = useNavigate();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => navigate(to)}
      style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
    >
      <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
        {children}
      </Text>
    </Pressable>
  );
}
