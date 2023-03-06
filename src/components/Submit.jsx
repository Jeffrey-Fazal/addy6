import React, { useRef } from 'react';
import handleSubmit from '../handles/handlesubmit';

function Submit() {
  const dataRef = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = '';
  };

  return (
    <div>
    <h2>Submit for to firebase</h2>
    <p>Testing Submissions</p>
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Submit;
