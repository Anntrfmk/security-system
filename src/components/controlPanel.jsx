export default function ControlPanel({ onStateChange }) {
  return (
    <div className="grid grid-cols-2 w-80 h-60 bg-gray-800/60 border rounded-3xl mt-10 px-4 py-8 text-white">
      <div>
        <button onClick={() => onStateChange('turnOn')} className="hover:text-red-400">Під охорону</button>
      </div>
      <div className="border-l  border-gray-600">
        <button onClick={() => onStateChange('default')} className="hover:text-green-300 ml-3">З охорони</button> 
      </div>
      <div>
        <hr className="my-2 border-gray-600" />
        <button onClick={() => onStateChange('night')} className="hover:text-blue-400">Нічний режим</button>
      </div>
      <div className="border-l  border-gray-600">
        <hr className="my-2 border-gray-600" />
        <button onClick={() => onStateChange('alarm')} className="hover:text-red-400 ml-3">Тривога</button>
      </div>
    </div>
  );
}