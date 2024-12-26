import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleSelectProject(projectId){
    setProjectState((preState)=>{
      return {
        ...preState,
        selectedProjectId:projectId,
      };
    });
  }

  function handleStartAddProject(){
    setProjectState((preState)=>{
      return {
        ...preState,
        selectedProjectId:null,
      };
    });
  }

  function handleCancleAddProject(){
    setProjectState((preState)=>{
      return {
        ...preState,
        selectedProjectId:undefined,
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
        selectedProjectId: undefined,
        project: [...prevState.project,newProject],
      };
    });
  }

  // console.log(projectState);
  console.log(projectState.selectedProjectId);

  function handleDeleteProject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        project: prevState.project.filter((project)=>project.id !== prevState.selectedProjectId),
      };
    });
  }


  const selectedProject = projectState.project.find((project)=>project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject}/>;

  if(projectState.selectedProjectId === null){
    content = <NewProject onSave={handleAddProject} onCancle={handleCancleAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="flex gap-8 h-screen my-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.project} 
      onSelectProject={handleSelectProject}
      selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
