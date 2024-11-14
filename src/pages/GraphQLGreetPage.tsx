import GraphQLTime from '../components/GraphQLTime';
import GraphQLGreeting from '../components/GraphQLGreeting';

export default function GraphQLGreetPage() {
  return (
    <div className="container mx-auto max-w-xl p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600">GraphQL Greeting</h1>
      <GraphQLTime />
      <GraphQLGreeting />
    </div>
  );
}
