import { useState } from 'react';

const files = {
  children: [
    {
      name: 'public',
      children: [{ name: 'vite.svg' }],
    },
    {
      name: 'src',
      children: [
        { name: 'assets', children: [{ name: 'react.svg' }] },
        { name: 'App.css' },
      ],
    },
  ],
};

const Entry = ({ file, depth }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div style={{ paddingLeft: `${depth * 10}px` }}>
      {file.children ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? ' - ' : ' + '}
          {file.name}
        </button>
      ) : (
        <div>{file.name}</div>
      )}

      {isExpanded &&
        file.children?.map((file) => <Entry file={file} depth={depth + 1} />)}
    </div>
  );
};

function App() {
  return files.children?.map((file) => <Entry file={file} depth={1} />);
}

export default App;
