import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import { envConfig } from './constants';

const App = () => {
  React.useEffect(()=> {
    const appName = 'MyAirtelAppReact';
    console.log('window', window[appName]);
    if (window[appName] !== undefined) {
      if (window[appName] && window[appName].getParameters) {
        const deviceInfoString = window[appName].getParameters();
        const deviceInfo = JSON.parse(deviceInfoString);
        console.log('deviceInfo is->', deviceInfo);
      }
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      // console.log('ios calling');
      const osName = 'webkit';
      window[osName].messageHandlers.getParameters.postMessage('');
      console.log('iosapp Appdata', data);
    } else {
      const deviceInfo = {
        actionBarHeight: 56,
        appVersion: 5201,
        channel: 'ANDROID',
        dateFormat: 'MMM d, y',
        deviceId: 'c5c16148-5e6c-4f43-8c1e-70ef400b7b7f',
        feSessionId: 'AN46038315310',
        imei: '3cb8b9646733af80',
        ver: '1'
      }
      console.log('deviceInfo-->else part hardcoded', deviceInfo)
    }
  }, [])
  

  const history = useHistory();
  const submit = () => {
    console.log('submit');
    history.push('/about', { data: {} });
  };

  return (

    <div className='app'>
      <div className='card'>
        <h1 className='title'>Our React is working :)</h1>
        Base URL:- {envConfig.url.BASE_URL}
        <button className="proceed-btn" onClick={submit}>
      Proceed
    </button>
      </div>
    </div>
  )
};

export default App;