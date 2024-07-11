import { TreeData } from '@app-ui-react-samples/shared-components';
import { ViewDefs, ViewName } from '../components/ViewFactory';

const standaloneAppConfig = Object.keys(ViewDefs).map((eachKey: string) => {
  const eachViewDef = ViewDefs[eachKey as ViewName];
  return {
    label: eachViewDef.label,
    key: eachKey,
    icon: '',
  };
});

export const StandaloneAppsData: TreeData = {
  label: 'React Examples',
  key: '1',
  icon: '',
  childNodes: standaloneAppConfig,
};
