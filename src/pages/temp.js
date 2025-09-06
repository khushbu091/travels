import React from "react";
import { FaUserGraduate, FaUserNurse, FaUserShield, FaUserClock } from "react-icons/fa";

const specialFares = [
  {
    id: 1,
    title: "Student",
    subtitle: "Extra Baggage",
    icon: <FaUserGraduate className="text-3xl text-blue-600" />,
  },
  {
    id: 2,
    title: "Senior Citizen",
    subtitle: "Exclusive Discounts",
    icon: <FaUserClock className="text-3xl text-green-600" />,
  },
  {
    id: 3,
    title: "Armed Forces",
    subtitle: "Exclusive Discounts",
    icon: <FaUserShield className="text-3xl text-gray-600" />,
  },
  {
    id: 4,
    title: "Doctors & Nurses",
    subtitle: "Exclusive Discounts",
    icon: <FaUserNurse className="text-3xl text-pink-600" />,
  },
];

export default function SpecialFares() {
  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-white rounded-lg shadow">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
          MORE BENEFITS
        </span>
        Special Fares
      </h2>

      <div className="flex flex-wrap gap-4 mt-4">
        {specialFares.map((fare) => (
          <label
            key={fare.id}
            className="flex items-center gap-3 p-4 border rounded-lg shadow-sm cursor-pointer hover:border-purple-600 transition w-64"
          >
            <input type="checkbox" className="w-5 h-5 accent-purple-600" />
            <div className="flex items-center gap-3">
              {fare.icon}
              <div>
                <p className="font-semibold text-gray-900">{fare.title}</p>
                <p className="text-sm text-gray-500">{fare.subtitle}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
