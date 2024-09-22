import { useState } from "react";

function Dashboard() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      <div className="flex h-screen bg-black">
        <aside
          className={`bg-gray-900 h-full transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? "w-20" : "w-64"
          } flex flex-col`}
        >
          <div>
            <img
              src="DF.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <h1
              className={`text-2xl font-bold text-pink-500 transition-opacity duration-300 ease-in-out ${
                isSidebarCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              Digital Fortress
            </h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 focus:outline-none p-4"
          >
            <svg
              className={`w-6 h-6 transition-transform transform ${
                isSidebarCollapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <nav className="flex-1">
            <ul>
              <li className="text-gray-300 hover:bg-gray-700 p-4 flex items-center">
                <i className="fa-solid fa-chart-line"></i>
                <span
                  className={`ml-4 transition-opacity duration-300 ease-in-out ${
                    isSidebarCollapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Dashboard
                </span>
              </li>
              <li className="text-gray-300 hover:bg-gray-700 p-4 flex items-center">
                <i className="fa-solid fa-list-check"></i>
                <span
                  className={`ml-4 transition-opacity duration-300 ease-in-out ${
                    isSidebarCollapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Task
                </span>
              </li>
              <li className="text-gray-300 hover:bg-gray-700 p-4 flex items-center">
                <i className="fa-solid fa-newspaper"></i>
                <span
                  className={`ml-4 transition-opacity duration-300 ease-in-out ${
                    isSidebarCollapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Projects
                </span>
              </li>
              <li className="text-gray-300 hover:bg-gray-700 p-4 flex items-center">
                <i className="fa-solid fa-calendar-days"></i>
                <span
                  className={`ml-4 transition-opacity duration-300 ease-in-out ${
                    isSidebarCollapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Schedule
                </span>
                <span
                  className={`ml-auto bg-green-500 text-sm rounded-full px-2 py-1 transition-opacity duration-300 ease-in-out ${
                    isSidebarCollapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  2
                </span>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-gray-800 text-gray-400 rounded-lg p-2 w-1/3">
              <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
              <input
                type="text"
                placeholder="Search anything"
                className="bg-gray-800 text-gray-400 ml-2 focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600">
                <i className="fa-solid fa-bell"></i>
              </button>
              <button className="text-gray-600">
                <i className="fa-solid fa-envelope"></i>
              </button>
              <img
                src="logo512.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          <div className="table-container mt-6 overflow-x-auto">
            <h2 className="text-3xl font-semibold text-white">Dashboard</h2>
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-4 text-gray-600">Project</th>
                  <th className="p-4 text-gray-600">Last Assessed</th>
                  <th className="p-4 text-gray-600">License Use</th>
                  <th className="p-4 text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700 border-b border-gray-600">
                  <td className="p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div>
                        <p className="font-semibold">Sisyphus</p>
                        <p className="text-sm text-gray-400">sisyphus.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">22 Jan 2022</td>
                  <td className="p-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded">
                      Active
                    </span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded ml-2">
                      Customer data
                    </span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded ml-2">
                      Admin
                    </span>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <button className="p-2 rounded">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button className="p-2 rounded">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>
                <tr className="bg-gray-700 border-b border-gray-600">
                  <td className="p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div>
                        <p className="font-semibold">Sisyphus</p>
                        <p className="text-sm text-gray-400">sisyphus.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">22 Jan 2022</td>
                  <td className="p-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded">
                      Active
                    </span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded ml-2">
                      Customer data
                    </span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded ml-2">
                      Admin
                    </span>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <button className="p-2 rounded">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button className="p-2 rounded">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>
                <tr className="bg-gray-700 border-b border-gray-600">
                  <td className="p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div>
                        <p className="font-semibold">Sisyphus</p>
                        <p className="text-sm text-gray-400">sisyphus.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">22 Jan 2022</td>
                  <td className="p-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded">
                      Active
                    </span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded ml-2">
                      Customer data
                    </span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded ml-2">
                      Admin
                    </span>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <button className="p-2 rounded">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button className="p-2 rounded">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>
                <tr className="bg-gray-700 border-b border-gray-600">
                  <td className="p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div>
                        <p className="font-semibold">Sisyphus</p>
                        <p className="text-sm text-gray-400">sisyphus.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">22 Jan 2022</td>
                  <td className="p-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded">
                      Active
                    </span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded ml-2">
                      Customer data
                    </span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded ml-2">
                      Admin
                    </span>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <button className="p-2 rounded">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button className="p-2 rounded">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>
                <tr className="bg-gray-700 border-b border-gray-600">
                  <td className="p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div>
                        <p className="font-semibold">Sisyphus</p>
                        <p className="text-sm text-gray-400">sisyphus.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">22 Jan 2022</td>
                  <td className="p-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded">
                      Active
                    </span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded ml-2">
                      Customer data
                    </span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded ml-2">
                      Admin
                    </span>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <button className="p-2 rounded">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button className="p-2 rounded">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-gray-800 text-gray-400 p-2 rounded hover:bg-gray-700">
                Previous
              </button>
              <p className="text-gray-400">Page 1 of 10</p>
              <button className="bg-gray-800 text-gray-400 p-2 rounded hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
