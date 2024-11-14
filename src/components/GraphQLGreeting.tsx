import useGraphQLGreeting from '../hooks/useGraphQLGreeting';
import useGraphQLGreetStore from '../stores/graphqlGreetStore';

export default function GraphQLGreeting() {
  const { name, greetMsg, setName, setGreetMsg } = useGraphQLGreetStore();
  const { greetWithGraphQL } = useGraphQLGreeting();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = await greetWithGraphQL(name);
    setGreetMsg(message);
  };

  return (
    <>
      <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
        <input
          id="greet-input"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-md bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
        >
          GraphQL Greet
        </button>
      </form>
      <p className="mt-8 text-center text-xl font-semibold">{greetMsg}</p>
    </>
  );
}
