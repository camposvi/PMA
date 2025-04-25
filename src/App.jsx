import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: null,
    }));
  };

  let content =
    projectsState.selectedProjectID === null ? (
      <NewProject />
    ) : (
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
};

export default App;
