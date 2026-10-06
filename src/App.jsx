import { useState } from 'react';
import ControlPanel from './components/controlPanel';
import { showMassage } from './components/alertsMassage';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  const [currentState, setCurrentState] = useState('default');

  const handleStateChange = (newState) => {
    setCurrentState(newState);
    showMassage(newState); 
  };

  const getIconColor = () => {
    switch (currentState) {
      case 'turnOn': return 'text-red-400';
      case 'night': return 'text-blue-400';
      case 'alarm': return 'text-red-500 animate-pulse';
      default: return 'text-green-300';
    }
  };

  const getStatusText = () => {
    switch (currentState) {
      case 'turnOn': return 'Під охороною';
      case 'night': return 'Нічний режим';
      case 'alarm': return 'ТРИВОГА!';
      default: return 'Знято з охорони';
    }
  };

  return (
    <div className='flex flex-col w-screen min-h-screen bg-black items-center justify-center'>
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className={getIconColor()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.9} stroke="currentColor" className="size-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </div>
      <h1 className='text-white mt-2'>ESP32</h1>
      <h3 className={getIconColor()}>
        {getStatusText()}
      </h3>
      
      <ControlPanel onStateChange={handleStateChange} />
    </div>
  );
}

export default App;