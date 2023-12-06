import { useEffect, useState } from 'react';
import './App.css'; // Add later

const DomTreeWidget = () => {
  const [domTree, setDomTree] = useState<any>(null);

  useEffect(() => {
    // Fetch and set the DOM tree
    // You can use a library like dom-tree-parser to parse the DOM
    // For simplicity, let's just use document.body for now
    setDomTree(document.body);
  }, []);

  const handleNodeClick = (nodeId: any) => {
    // Send a message to the parent window with the clicked node id
    window.parent.postMessage({ type: 'highlightNode', nodeId }, '*');
  };

  const renderDomTree = (node: any) => {
    if (!node) {
      return null;
    }

    return (
      <div key={node.id} className="dom-node" onClick={() => handleNodeClick(node.id)}>
        {node.tagName}
        {node.children && node.children.length > 0 && (
          <div className="dom-children">
            {node?.children?.map(renderDomTree)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="dom-tree-widget">
      <h2>DOM Tree Widget</h2>
      {renderDomTree(domTree)}
    </div>
  );
};

export default DomTreeWidget;
