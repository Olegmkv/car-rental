import { Layout } from './Layout';
import { Catalog } from './components/Catalog/Catalog';
import { ParamsSearch } from './components/ParamsSearch';

function App() {
  return (
    <Layout>
      <header>
        <ParamsSearch />
        <Catalog />
      </header>
    </Layout>
  );
}

export default App;
