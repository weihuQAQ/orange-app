export const isFolder = (file: File | null) => {
  return new Promise<boolean>((resolve) => {
    if (!file) return resolve(false);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onerror = () => resolve(true);
    reader.onload = () => resolve(false);
  });
};

export const isSupportWebkitGetAsEntry = () => {
  const dataTransfer = new DataTransfer();
  dataTransfer.setData('file', '0');

  return typeof dataTransfer.items[0].webkitGetAsEntry === 'function';
};

const warpReadFile = (file: FileSystemFileEntry) => {
  return new Promise<File>((resolve) => {
    file.file(resolve);
  });
};

const wrapReadDirectory = (directory: FileSystemDirectoryEntry) => {
  return new Promise<FileSystemEntry[]>((resolve) => {
    const reader = directory.createReader();
    reader.readEntries(resolve);
  });
};

export const readDirectoryEntry = async (item: FileSystemEntry, container: File[] = []) => {
  if (item.isFile) {
    const file = await warpReadFile(item as FileSystemFileEntry);
    container.push(file);
  } else if (item.isDirectory) {
    const entries = await wrapReadDirectory(item as FileSystemDirectoryEntry);
    for (const entry of entries) {
      await readDirectoryEntry(entry, container);
    }
  }
  return container;
};
