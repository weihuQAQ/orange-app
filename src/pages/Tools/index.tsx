import { FC } from 'react';
import DropContainer from '@components/DropContainer';

const Tools: FC = () => {
  return (
    <div className="tools">
      <DropContainer
        validator={(dataTransfer) => {
          for (let item of dataTransfer.items) {
            if (item.kind === 'string') return true;
            if (item.kind === 'file') return true;
          }
          return false;
        }}
        recursiveDirectory
      />
    </div>
  );
};

export default Tools;
