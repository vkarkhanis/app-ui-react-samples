import {
  Divider,
  LeftPanel,
  RightPanel,
  SplitView,
  Tree,
  TreeData,
} from '@app-ui-react-samples/Tree';

const StandaloneAppsData: TreeData = {
  label: 'React Examples',
  key: '1',
  icon: '',
  childNodes: [
    {
      label: 'Elevator Simulation',
      key: '2',
      icon: '',
    },
    {
      label: 'Prev Hook',
      key: '3',
      icon: '',
    },
    {
      label: 'HoC demo',
      key: '4',
      icon: '',
    },
  ],
};

const App = () => {
  const onNodeSelect = (data: TreeData) => {
    console.log('data selected: ', data.label);
  };
  return (
    <SplitView>
      <LeftPanel>
        <Tree onNodeSelect={onNodeSelect} data={StandaloneAppsData} />
      </LeftPanel>
      <Divider />
      <RightPanel>Main Content !!</RightPanel>
    </SplitView>
  );
};

export default App;
