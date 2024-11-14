import { useQuery } from '@apollo/client';
import { GET_TIME } from '../graphql/queries';

export default function GraphQLTime() {
  const { loading, error, data } = useQuery(GET_TIME, {
    pollInterval: 1000,
  });

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="mb-3 text-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="mb-8 rounded-lg bg-gray-100 p-4">
      <p className="text-center">Server Time: {data.currentTime}</p>
    </div>
  );
}
