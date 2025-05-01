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

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };
  console.log(projectsState);
  let content =
    projectsState.selectedProjectID === null ? (
      <NewProject onAdd={handleAddProject} />
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
