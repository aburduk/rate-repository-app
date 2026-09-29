import { Text, View } from 'react-native';

export default function RepositoryItem({ repository }) {
  return (
    <View>
      <Text>{repository.fullName}</Text>
      <Text>{repository.description}</Text>
      <Text>{repository.language}</Text>
      <Text>Stars: {repository.stargazersCount}</Text>
      <Text>Forks: {repository.forksCount}</Text>
      <Text>Reviews: {repository.reviewCount}</Text>
      <Text>Rating: {repository.ratingAverage}</Text>
    </View>
  );
}
