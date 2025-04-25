import Sidebar from './components/Sidebar/Sidebar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
const App = () => {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <NoProjectSelected />
      </main>
    </>
  );
};

export default App;
