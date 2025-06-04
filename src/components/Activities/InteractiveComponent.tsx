
import React from 'react';
import {
  FlowDiagramData,
  MemoryPyramidData,
  IOSimulatorData,
  ArchitectureData,
  TerminalsData,
  DiagramBuilderData,
  ProcessorTimelineProps,
  FlashcardExplorerProps,
  ActivityDetailSection,
} from '../../interfaces/Actividades';


import EvaluationComponent from './Actividad 1/Evaluation';
import FlowDiagramComponent from './Actividad 1/FlowDiagramComponent';
import IOClassifierComponent from './Actividad 1/IOClassifierComponent';
import MemoryPyramidComponent from './Actividad 1/MemoryPyramidComponent';

import ArchitectureViewer from './Actividad 2/ArchitectureViewer';
import MicroprocessorTerminals from './Actividad 2/MicroprocessorTerminals';
import BlockDiagramBuilder from './Actividad 2/BlockDiagramBuilder';
import BlockDiagramQuiz from './Actividad 2/BlockDiagramQuiz';


import ProcessorTimeline from './Actividad 3/ProcessorTimeline';
import FlashcardExplorer from './Actividad 3/FlashcardExplorer';
import EvaluationAct3 from './Actividad 3/EvaluationAct3';


interface InteractiveComponentRendererProps {
  section: ActivityDetailSection;
}

const InteractiveComponentRenderer: React.FC<InteractiveComponentRendererProps> = ({ section }) => {

  if (!section.interactiveComponent || !section.data) {

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


    case 'processorTimeline':

      return <ProcessorTimeline {...(section.data as ProcessorTimelineProps)} />;

    case 'flashcardExplorer':

      return <FlashcardExplorer {...(section.data as FlashcardExplorerProps)} />;

    case 'evaluationAct3':

      return <EvaluationAct3 />;

    default:

      return <p className="text-red-500">Error: Componente interactivo "{section.interactiveComponent}" no reconocido.</p>;
  }
};

export default InteractiveComponentRenderer;