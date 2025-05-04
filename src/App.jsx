import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import SelectedProject from './components/SelectedProject/SelectedProject';
const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  const handleSelectProject = (projectID) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: projectID,
    }));
  };
  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: null,
    }));
  };
  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: undefined,
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
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };
  const handleDeleteProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectID
      ),
    }));
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID
  );
  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
};

export default App;
