import React from 'react';
import {
  FlowDiagramData,
  MemoryPyramidData,
  IOSimulatorData,
  ArchitectureData,
  TerminalsData,
  DiagramBuilderData,
  ActivityDetailSection,
} from '../../interfaces/Actividades'; 



import EvaluationComponent from './Actividad 1/Evaluation'; 
import ArchitectureViewer from './Actividad 2/ArchitectureViewer';
import MicroprocessorTerminals from './Actividad 2/MicroprocessorTerminals'; 
import BlockDiagramBuilder from './Actividad 2/BlockDiagramBuilder';
import BlockDiagramQuiz from './Actividad 2/BlockDiagramQuiz'; 
import FlowDiagramComponent from './Actividad 1/FlowDiagramComponent';
import IOClassifierComponent from './Actividad 1/IOClassifierComponent';
import MemoryPyramidComponent from './Actividad 1/MemoryPyramidComponent';

interface InteractiveComponentRendererProps {
  section: ActivityDetailSection; 
}

const InteractiveComponentRenderer: React.FC<InteractiveComponentRendererProps> = ({ section }) => {
  if (!section.interactiveComponent) {
    return null; 
  }

  switch (section.interactiveComponent) {
    case 'flowDiagram':
      return <FlowDiagramComponent data={section.data as FlowDiagramData} />;
    case 'memoryPyramid':
      return <MemoryPyramidComponent data={section.data as MemoryPyramidData} />;
    case 'ioClassifier':
      return <IOClassifierComponent data={section.data as IOSimulatorData} />;
    case 'evaluation':
    
      return <EvaluationComponent />;
    case 'architectureViewer':
      return <ArchitectureViewer data={section.data as ArchitectureData} />;
    case 'terminalsViewer': 
      return <MicroprocessorTerminals data={section.data as TerminalsData} />;
    case 'blockDiagramBuilder':
      return <BlockDiagramBuilder data={section.data as DiagramBuilderData} />;
    case 'blockDiagramQuiz':
      return <BlockDiagramQuiz />;
    default:
      
      return <p className="text-red-500">Error: Componente interactivo no reconocido.</p>;
  }
};

export default InteractiveComponentRenderer;