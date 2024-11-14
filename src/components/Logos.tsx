import reactLogo from '../assets/react.svg';

export default function Logos() {
  return (
    <div className="mb-8 flex justify-center space-x-8">
      <a href="https://vitejs.dev" target="_blank" className="transition-opacity hover:opacity-80">
        <img src="/vite.svg" className="h-24 rounded-full bg-white p-6 shadow-lg" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank" className="transition-opacity hover:opacity-80">
        <img
          src="/tauri.svg"
          className="h-24 rounded-full bg-white p-6 shadow-lg"
          alt="Tauri logo"
        />
      </a>
      <a href="https://reactjs.org" target="_blank" className="transition-opacity hover:opacity-80">
        <img
          src={reactLogo}
          className="h-24 rounded-full bg-white p-6 shadow-lg"
          alt="React logo"
        />
      </a>
    </div>
  );
}
