import {
  ElevatorSimulation,
  HoC,
  PrevHook,
} from '@app-ui-react-samples/shared-components';

export type ViewName = 'ELEVATOR-SIMULATION' | 'PREV-HOOK' | 'HOC-DEMO';

export type ViewFactoryProps = {
  viewName: ViewName;
};

export interface ViewDef {
  label: string;
  component: React.ReactNode;
}

export const ViewDefs: Record<ViewName, ViewDef> = {
  'ELEVATOR-SIMULATION': {
    label: 'Elevator Simulation',
    component: <ElevatorSimulation />,
  },
  'PREV-HOOK': {
    label: 'Prev Hook',
    component: <PrevHook />,
  },
  'HOC-DEMO': {
    label: 'HoC Demo',
    component: <HoC />,
  },
};

const getViewDef = (viewName: ViewName) => {
  return ViewDefs[viewName];
};

const ViewFactory = ({ viewName }: ViewFactoryProps) => {
  const viewDef = getViewDef(viewName);
  return viewDef?.component ?? null;
};

export default ViewFactory;
