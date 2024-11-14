import TauriGreeting from '../components/TauriGreeting';

export default function TauriGreetPage() {
  return (
    <div className="container mx-auto max-w-xl p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600">Tauri Greeting</h1>
      <TauriGreeting />
    </div>
  );
}
