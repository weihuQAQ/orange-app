import { FC, useState } from 'react';

const SvgLine: FC = () => {
  const [sp] = useState({ x: 400, y: 30 });
  const controlPoint = { x: 100, y: 30 };
  const ep = { x: 60, y: 150 };

  const path = `
    M${sp.x},${sp.y} L${(sp.x + controlPoint.x) / 3},${sp.y}
    Q${controlPoint.x},${controlPoint.y} ${(ep.x + controlPoint.x) / 2},${(ep.y + controlPoint.y) / 2}
    L${ep.x},${ep.y}
  `;

  return (
    <div className="svg-container">
      <div>sp: {`${sp.x},${sp.y}`}</div>
      <div>control: {`${controlPoint.x},${controlPoint.y}`}</div>
      <div>control end: {`${(ep.x + controlPoint.x) / 2},${(ep.y + controlPoint.y) / 2}`}</div>
      <div>ep: {`${ep.x},${ep.y}`}</div>

      <hr />

      <svg style={{ overflow: 'visible' }}>
        <defs>
          <marker
            id="triangle"
            markerUnits="strokeWidth"
            markerWidth="8"
            markerHeight="8"
            refX="0"
            refY="4"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L8,4 L0,8 z" />
          </marker>
        </defs>

        <path
          d={path}
          strokeWidth={2}
          stroke="black"
          strokeDasharray=""
          strokeLinecap="round"
          fill="none"
          markerStart={`url(#triangle)`}
          markerEnd={`url(#triangle)`}
        />

        <path
          d="M100,0 C150,0 150,100 200,100"
          stroke="black"
          strokeWidth="2"
          fill="none"
          markerStart="url(#triangle)"
          markerEnd="url(#triangle)"
        />
      </svg>
    </div>
  );
};

export default SvgLine;
