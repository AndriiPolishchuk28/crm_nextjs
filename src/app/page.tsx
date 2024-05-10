import { AddCompanyButton } from './components/add-company-button';
import { Status, StatusLabel } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
