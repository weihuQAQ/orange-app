import { Container, Paper, PaperProps, Typography } from '@mui/material';
import React, { DragEvent, FC, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { isFolder, isSupportWebkitGetAsEntry, readDirectoryEntry } from '../../utils/file';

type DropState = 'enter' | 'leave' | 'drop';

interface SimplePaperProps extends PaperProps {
  state: DropState;
}

const SimplePaper = styled(Paper)<SimplePaperProps>(({ theme, state }) => {
  const bgColor = (() => {
    switch (state) {
      case 'enter':
        return 'blue';
      case 'leave':
        return 'yellow';
      case 'drop':
        return 'red';
      default:
        return 'pink';
    }
  })();

  return {
    minHeight: '200px',
    backgroundColor: bgColor,
  };
});

export enum ErrorType {
  Invalid,
}

export interface DropContainerProps {
  recursiveDirectory?: boolean; // only support webkit kernel
  validator?: (dataTransfer: DataTransfer) => boolean;
  onCompleted?: (items: []) => void;
  onError?: (errorType: ErrorType) => void;
}

const DropContainer: FC<DropContainerProps> = ({ recursiveDirectory, validator = () => true, onError }) => {
  const [targetState, setTargetState] = useState<DropState>('leave');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (recursiveDirectory && !isSupportWebkitGetAsEntry()) {
      console.warn('webkitGetAsEntry is not support');
    }
  }, [recursiveDirectory]);

  const onDragEnter = (e: DragEvent) => {
    const valid = validator(e.dataTransfer);
    setValid(valid);
    if (valid) {
      setTargetState('enter');
    } else {
      onError?.(ErrorType.Invalid);
    }
  };

  const onDragLeave = () => {
    setTargetState('leave');
    setValid(false);
  };

  /**
   * Dont use async, readDirectoryEntry will cause the file to be lost
   * @param e
   */
  const onDrop = (e: DragEvent<HTMLElement>) => {
    if (valid) {
      e.preventDefault();
      setTargetState('drop');

      for (const item of e.dataTransfer.items) {
        switch (item.kind) {
          case 'file':
            if (isSupportWebkitGetAsEntry()) {
              const entry = item.webkitGetAsEntry();
              if (entry?.isFile) {
                const file = item.getAsFile();
                console.log(file?.name);
              } else if (entry?.isDirectory) {
                readDirectoryEntry(entry).then((entries) => entries.forEach((file) => console.log(file?.name)));
              }
            }
            break;
          case 'string':
            item.getAsString(console.log);
        }
      }
    }
  };

  return (
    <Container>
      <SimplePaper
        className="drop-container"
        elevation={16}
        state={targetState}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Typography sx={{ pointerEvents: 'none' }}>Drag one or more files to this Drop Zone ...</Typography>
      </SimplePaper>
    </Container>
  );
};

export default DropContainer;
