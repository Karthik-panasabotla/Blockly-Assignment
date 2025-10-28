import React from 'react';

function Controls({
  currentPosition,
  currentIndex,
  routeData,
  isPlaying,
  togglePlay,
  resetSimulation,
  calculateSpeedKmH
}) {
  return (
    <div className="absolute top-4 right-4 z-[1000] p-4 bg-white shadow-xl rounded-lg w-full max-w-xs md:max-w-sm">
      <h2 className="text-lg font-bold mb-3">Vehicle Status</h2>
      <div className="space-y-1 text-sm">
        <p>
          Coordinate:{" "}
          <span className="font-mono text-blue-600">
            {currentPosition.lat?.toFixed(6)}, {currentPosition.lng?.toFixed(6)}
          </span>
        </p>
        <p>
          Timestamp:{" "}
          <span className="font-medium text-gray-700">
            {currentPosition.timestamp
              ? new Date(currentPosition.timestamp).toLocaleTimeString()
              : "N/A"}
          </span>
        </p>
        <p>
          Speed:{" "}
          <span className="font-medium text-gray-700">
            {calculateSpeedKmH(currentIndex, routeData)} km/h
          </span>
        </p>
      </div>
      <div className="flex gap-4 justify-center mt-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4 rounded-2xl shadow-lg">
        <button
          onClick={togglePlay}
          className={`flex-1 px-6 py-3 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 ${
            isPlaying
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          onClick={resetSimulation}
          className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transform transition-all duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Controls;
