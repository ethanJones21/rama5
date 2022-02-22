import { useState } from 'react';
import QrReader from 'react-qr-reader-es6';
import { useHistory } from 'react-router-dom';

function Qr() {
  const history = useHistory();
  const [resultQr, setResultQr] = useState('sin data...');

  const handleScanQr = (data) => {
    console.log(data);
    if (data) history.push(data);
    setResultQr(data);
  };

  const handleErrorScanQr = (error) => {
    console.log(error);
  };

  return (
    <QrReader
      onScan={handleScanQr}
      onError={handleErrorScanQr}
      style={{ width: '100%', background: '#051B34' }}
    />
  );
}

export default Qr;
