import {
  Divider,
  LeftPanel,
  RightPanel,
  SplitView,
  Tree,
  TreeData,
} from '@app-ui-react-samples/shared-components';
import * as React from 'react';
import styled from 'styled-components';
import ViewFactory, { ViewName } from './components/ViewFactory';
import { StandaloneAppsData } from './utils/OptionsData';

const RightPanelContainer = styled.div`
  background-color: #d2d7c7;
  flex: 1;
  border-radius: 2%;
  border: 5px solid #2f454b;
`;

const App = () => {
  const [viewName, setViewName] = React.useState<ViewName>(
    'ELEVATOR-SIMULATION'
  );

  const onNodeSelect = (data: TreeData) => {
    setViewName(data.key as ViewName);
  };

  return (
    <SplitView>
      <LeftPanel>
        <Tree onNodeSelect={onNodeSelect} data={StandaloneAppsData} />
      </LeftPanel>
      <Divider />
      <RightPanelContainer>
        <RightPanel>
          <ViewFactory viewName={viewName} />
        </RightPanel>
      </RightPanelContainer>
    </SplitView>
  );
};

export default App;
