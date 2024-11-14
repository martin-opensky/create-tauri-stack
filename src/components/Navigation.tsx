import { Link } from '@tanstack/react-router';

export default function Navigation() {
  return (
    <nav className="mb-8 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link
          to="/"
          className="rounded-md px-4 py-2 text-white transition-colors hover:bg-gray-700"
          activeProps={{ className: 'px-4 py-2 rounded-md text-white bg-gray-600' }}
        >
          Home
        </Link>
        <Link
          to="/tauri-greet"
          className="rounded-md px-4 py-2 text-white transition-colors hover:bg-gray-700"
          activeProps={{ className: 'px-4 py-2 rounded-md text-white bg-gray-600' }}
        >
          Tauri Greet
        </Link>
        <Link
          to="/graphql-greet"
          className="rounded-md px-4 py-2 text-white transition-colors hover:bg-gray-700"
          activeProps={{ className: 'px-4 py-2 rounded-md text-white bg-gray-600' }}
        >
          GraphQL Greet
        </Link>
      </div>
    </nav>
  );
}
