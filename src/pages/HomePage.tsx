import Logos from '../components/Logos';

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-xl p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600">Welcome to Tauri!</h1>
      <Logos />
      <p className="mb-8 text-center text-lg">
        Click on the Tauri, Vite, and React logos to learn more.
      </p>
    </div>
  );
}
