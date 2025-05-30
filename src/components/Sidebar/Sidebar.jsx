import Button from '../Shared/Button';
const Sidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-sone-200 hover:bg-stone-800';
          if (project.id === selectedProjectID) {
            cssClasses += ' bg-stone-800 text-stone-200';
          } else {
            cssClasses += ' bg-stone-900 text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-sone-200 hover:bg-stone-800"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
