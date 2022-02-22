import Echo from 'laravel-echo';
import io from 'socket.io-client';

const connectToSocket = (token) => {
  const echo = new Echo({
    broadcaster: 'socket.io',
   // host: 'wss://api.wuay.com.co',
    //key: '6189b6d6e187880c',
    host: 'ws://127.0.0.1:6001',
    // key: '6189b6d6e187880c',
    key: '6c73b25ab2d1daa0',
    client: io,
    auth: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return new Promise((resolve) => {
    resolve(echo);
  });
};

export default connectToSocket;
