import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.cardBackground,
    gap: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  header: {
    flexDirection: 'row',
    gap: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    gap: 8,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    color: theme.colors.onPrimary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statistics: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: 16,
  },
  statistic: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
});

function RepositoryStatistic({ label, value }) {
  const displayValue = value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;

  return (
    <View style={styles.statistic}>
      <Text fontWeight="bold">{displayValue}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
}

export default function RepositoryItem({ repository }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: repository.ownerAvatarUrl }}
          style={styles.avatar}
          accessibilityLabel={`${repository.fullName} owner avatar`}
        />
        <View style={styles.details}>
          <Text fontSize="subheading" fontWeight="bold">{repository.fullName}</Text>
          <Text color="textSecondary">{repository.description}</Text>
          <Text style={styles.language}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.statistics}>
        <RepositoryStatistic label="Stars" value={repository.stargazersCount} />
        <RepositoryStatistic label="Forks" value={repository.forksCount} />
        <RepositoryStatistic label="Reviews" value={repository.reviewCount} />
        <RepositoryStatistic label="Rating" value={repository.ratingAverage} />
      </View>
    </View>
  );
}
