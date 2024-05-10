import { AddCompanyButton } from './components/add-company-button';
import { ClientComponents } from './components/client-components';
import { ServerComponents } from './components/server-components';
import { ServerComponentsCopy } from './components/server-components copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <ServerComponents />
      <ClientComponents>
        <ServerComponentsCopy />
      </ClientComponents>
    </main>
  );
}
