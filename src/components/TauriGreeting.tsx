import useTauriGreeting from '../hooks/useTauriGreeting';
import useTauriGreetStore from '../stores/tauriGreetStore';
import useIsTauriApp from '../hooks/useIsTauriApp';

export default function TauriGreeting() {
  const { name, greetMsg, setName, setGreetMsg } = useTauriGreetStore();
  const { greetWithTauri } = useTauriGreeting();
  const isTauri = useIsTauriApp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const msg = await greetWithTauri(name);
    setGreetMsg(msg);
  };

  if (isTauri === false) {
    return (
      <div className="rounded-lg bg-yellow-100 p-4 text-center">
        <p className="text-yellow-700">
          This feature requires the Tauri desktop app. You are currently running in a web browser.
        </p>
      </div>
    );
  }

  if (isTauri) {
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
            className="rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
          >
            Tauri Greet
          </button>
        </form>
        <p className="mt-8 text-center text-xl font-semibold">{greetMsg}</p>
      </>
    );
  }
}
