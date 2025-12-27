import { useState } from "react";

// This is TypeScript: We are defining what a "Project" looks like 
// based on your schema!
interface Project {
  id: number;
  name: string;
  parentId: number | null;
}

function App() {
  // This is React: "State" is the memory of your app.
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "Master Project", parentId: null },
    { id: 2, name: "Sub-Project A", parentId: 1 },
    { id: 3, name: "Sub-Project B", parentId: 2 },
  ]);

  return (
    <div className="p-8 bg-slate-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Task Timer Engine</h1>
      
      {/* This is where your logic will go */}
      <div className="space-y-2">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`p-4 bg-slate-800 rounded shadow ${project.parentId ? 'ml-8 border-l-2 border-blue-500' : 'bg-white text-black'}`}
          >
            {project.id} {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;