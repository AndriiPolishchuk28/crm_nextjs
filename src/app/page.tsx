import MagicButton from './components/magic-button';
import { ServerComponents } from './components/server-components';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ServerComponents />
      <MagicButton />
    </main>
  );
}
