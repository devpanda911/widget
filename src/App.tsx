import { useEffect } from 'react';

const Widget = () => {


  return (
    <div>
      <h2>Embedded Widget</h2>
      { JSON.stringify(window.parent.document)}
    </div>
  );
};

export default Widget;
