import { useState } from 'react';

const MapToast = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className='maptoast'>
      <button>cancel</button>
    </div>
  );
};

export default MapToast;
