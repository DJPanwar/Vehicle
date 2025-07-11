import Truck from '../assets/truck-removebg-preview.png';
import { Battery, Plug, Sun } from 'lucide-react';

function VehicleCard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 mt-4 flex items-center space-x-4 bg-[#f7f7f2]">
        <h1 className="text-2xl font-bold text-gray-900">Vehicle Detail</h1>
        <p className="text-gray-500 text-sm">Last Active 28 Nov 2024 10:39</p>
      </div>

      <div className="px-10 py-6 bg-[#f7f7f2]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 w-full lg:w-[400px] h-[550px] flex flex-col justify-between flex-shrink-0">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">3กบ4890</h2>
                <p className="text-gray-500 text-lg font-bold">CP FOTON iBlue45</p>
              </div>

              <div className="flex justify-center mb-4">
                <img
                  src={Truck}
                  alt="Vehicle"
                  className="w-68 h-45 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">VIN</span>
                  <span className="font-medium">LJCPCBLCX11000237</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Driver Name</span>
                  <span className="font-medium">Jane Cooper</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Maintenance Date</span>
                  <span className="font-medium">01 June 2024</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <Plug className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Charging Port CCS2</span>
              </div>
              <p className="text-sm text-gray-500">Max DC rate : 110 kW</p>
            </div>
          </div>

          <div className="space-y-6 flex-1">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Battery Info</h3>
              <div className="flex gap-4">
                <div className="bg-white rounded-xl shadow-sm p-6 flex-shrink-0 w-[228px]">
                  <p className="text-sm text-gray-900 mb-4 font-bold text-center">Current Battery</p>
                  <div className="flex flex-col items-center justify-center mb-4">
                    <div className="flex items-center">
                      <svg className="w-12 h-24" viewBox="0 0 50 100" fill="none">
                        <rect x="5" y="10" width="40" height="80" rx="8" stroke="#d8d9db" strokeWidth="4" fill="white" />
                        <rect x="20" y="0" width="10" height="10" rx="2" fill="#d8d9db" />
                        <defs>
                          <linearGradient id="batteryGradient" x1="0" y1="100" x2="0" y2="0">
                            <stop offset="0%" stopColor="#85ec95" />
                            <stop offset="33%" stopColor="#6ce880" />
                            <stop offset="66%" stopColor="#61e676" />
                            <stop offset="100%" stopColor="#aaf570" />
                          </linearGradient>
                        </defs>
                        <rect
                          x="9"
                          y="20"
                          width="32"
                          height="68"
                          rx="4"
                          fill="url(#batteryGradient)"
                        />
                      </svg>
                      <p className="text-3xl font-bold text-gray-900 ml-4">85%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 text-center">SOH 100%</p>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="grid grid-cols-4 gap-4 h-full">
                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Nominal Capacity</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        423 <span className="font-normal text-gray-500 text-base">kWh</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Remaining Capacity</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        360 <span className="font-normal text-gray-500 text-base">kWh</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Predicted Range</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        2 <span className="font-normal text-gray-500 text-base">kW/h</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Historical Range</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        2 <span className="font-normal text-gray-500 text-base">kW/h</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Max Volt</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        3.33 <span className="font-normal text-gray-500 text-base">V</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Min Volt</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        3.30 <span className="font-normal text-gray-500 text-base">V</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Battery Voltage</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        639 <span className="font-normal text-gray-500 text-base">V</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Actual Energy Use</p>
                      <p className="text-2xl text-teal-600 inline font-bold">
                        2.07 <span className="font-normal text-gray-500 text-base">KW/h</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Speed Info</h3>
              <div className="flex gap-4">
                <div className="bg-white rounded-xl shadow-sm p-6 flex-shrink-0 w-[228px]">
                  <p className="text-sm text-gray-900 mb-4 font-bold text-center">Current Speed</p>
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#speedGradient)"
                          strokeWidth="3"
                          strokeDasharray="75, 25"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="50%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#EF4444" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">158</p>
                          <p className="text-sm text-gray-500">Km/h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Battery className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-600">Battery Usage 10 A</p>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Average Speed (last 24)</p>
                      <div className="flex justify-between items-baseline">
                        <p className="text-2xl text-teal-600 font-bold">0.201</p>
                        <span className="text-base text-gray-500 font-normal">km/h</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Max Speed (last 24)</p>
                      <div className="flex justify-between items-baseline">
                        <p className="text-2xl text-teal-600 font-bold">8</p>
                        <span className="text-base text-gray-500 font-normal">km/h</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Odometer</p>
                      <div className="flex justify-between items-baseline">
                        <p className="text-2xl text-teal-600 font-bold">10,055</p>
                        <span className="text-base text-gray-500 font-normal">km</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <div className="grid grid-cols-2 gap-2 h-full">
                        <div>
                          <p className="text-sm font-bold text-gray-900 mb-2">Min Temp</p>
                          <div className="flex items-center space-x-1">
                            <Sun className="w-4 h-4 text-yellow-500" />
                            <div className="flex items-baseline space-x-1">
                              <p className="text-lg font-bold text-teal-600">30</p>
                              <span className="text-base text-gray-500 font-normal">°C</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-bold text-gray-900 mb-2">Max Temp</p>
                          <div className="flex items-baseline space-x-1">
                            <p className="text-lg font-bold text-teal-600">31</p>
                            <span className="text-base text-gray-500 font-normal">°C</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
