import { useMutation } from '@apollo/client';
import { GREET_MUTATION } from '../graphql/queries';

export default function useGraphQLGreeting() {
  const [greetMutation] = useMutation(GREET_MUTATION);

  const greetWithGraphQL = async (name: string): Promise<string> => {
    try {
      const result = await greetMutation({
        variables: { name },
      });
      return result.data.greet;
    } catch (err) {
      console.error('GraphQL Error:', err);
      return 'Error calling GraphQL';
    }
  };

  return { greetWithGraphQL };
}
