import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleStartAddProject(){
    setProjectState((preState)=>{
      return {
        ...preState,
        selectedProjectId:null,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState((prevState)=>{
      const newProject = {
        ...projectData,
        id: prevState.project.length + 1,
      };
      return {
        ...prevState,
        project: [...prevState.project,newProject],
      };
    });
  }

  console.log(projectState);

  let content;

  if(projectState.selectedProjectId === null){
    content = <NewProject onSave={handleAddProject}/>
  }else{
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="flex gap-8 h-screen my-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
