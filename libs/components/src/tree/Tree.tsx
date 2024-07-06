/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * {
 *  label:  "top-level",
 *  key: 0
 *  icon: "",
 *  children: [
 *   {
 *     label:  "nested-level-1",
 *     key: 1
 *     icon: "",
 *     children: [...]
 *   },
 *   {
 *     label:  "nested-level-2",
 *     key: 2
 *     icon: "",
 *     children: [... ]
 *   }
 * ]
 * }
 */

import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

export type TreeData = {
  label: string;
  key: string;
  icon?: string;
  childNodes?: Array<TreeData>;
};

export type TreeProps = {
  data: TreeData;
  onNodeSelect: (data: TreeData) => void | undefined;
};

const TreeStructureList = styled.div`
  padding-left: 10px;
`;

const IconContainer = styled.div`
  width: 15px;
  cursor: pointer;
`;

const TreeStructureContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TreeNodeLabel = styled.a`
  cursor: pointer;
  width: 100%;
  margin-bottom: 1px;
  border-bottom: 1px groove #694207;
  &:hover {
    background-color: #bd4f13;
    color: #ffffff;
  }
`;

const Icon: React.FC<{
  hasChildNodes: boolean;
  // eslint-disable-next-line no-unused-vars
  onParentToggled?: (iconState: boolean) => void;
}> = ({ hasChildNodes, onParentToggled }) => {
  const [isIconOpen, setIsIconOpen] = React.useState<boolean>(false);
  const handleIconClick = () => {
    setIsIconOpen(!isIconOpen);
  };

  React.useEffect(() => {
    onParentToggled?.(isIconOpen);
  }, [isIconOpen, onParentToggled]);

  return hasChildNodes ? (
    <FontAwesomeIcon
      icon={isIconOpen ? faCaretDown : faCaretRight}
      onClick={handleIconClick}
    />
  ) : null;
};

const TreeStructure: React.FC<TreeProps> = ({ data, onNodeSelect }) => {
  const hasChildNodes = data?.childNodes && data.childNodes?.length > 0;

  const [parentToggled, setParentToggled] = React.useState<boolean>(false);

  const handleNodeSelect = (e: any, selectedNode: TreeData) => {
    onNodeSelect?.(selectedNode);
  };

  return (
    <TreeStructureList>
      <TreeStructureContainer>
        <IconContainer>
          <Icon
            hasChildNodes={hasChildNodes ?? false}
            onParentToggled={setParentToggled}
          />
        </IconContainer>
        <TreeNodeLabel onClick={(e: any) => handleNodeSelect(e, data)}>
          {data.label}
        </TreeNodeLabel>
      </TreeStructureContainer>
      {parentToggled && <TreeNode data={data} onNodeSelect={onNodeSelect} />}
    </TreeStructureList>
  );
};

export const Tree: React.FC<TreeProps> = (props) => {
  return <TreeStructure {...props} />;
};

const TreeNode: React.FC<TreeProps> = ({ data: nodeData, onNodeSelect }) => {
  const { childNodes } = nodeData;

  const hasChildNodes = childNodes && childNodes.length > 0;

  return hasChildNodes ? (
    <>
      {childNodes.map((e: TreeData) => (
        <TreeStructure data={e} onNodeSelect={onNodeSelect} key={e.key} />
      ))}
    </>
  ) : null;
};
