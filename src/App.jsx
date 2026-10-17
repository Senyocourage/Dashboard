
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  // Dashboard summary cards
  const stats = [
    {
      title: "Total Users",
      value: "1,240",
      description: "+12% from last month",
      icon: "👥",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Total Projects",
      value: "86",
      description: "8 new projects",
      icon: "📁",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Active Tasks",
      value: "32",
      description: "12 tasks completed",
      icon: "✅",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Pending Requests",
      value: "14",
      description: "Needs your attention",
      icon: "⏳",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  // Users data
  const users = [
    {
      name: "Ama Mensah",
      email: "ama@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Kojo Asante",
      email: "kojo@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      name: "Abena Owusu",
      email: "abena@example.com",
      role: "User",
      status: "Pending",
    },
  ];

  // Search users by name or email
  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();

    return (
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)
    );
  });

  if (!isLoggedIn) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <section
          aria-live="polite"
          className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-sm"
        >
          <h1 className="text-2xl font-bold text-gray-900">
            You’re signed out
          </h1>
          <p className="mt-2 text-gray-600">
            Your dashboard session has ended.
          </p>
        </section>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 md:flex">
      {/* Sidebar */}
      <aside className="w-full bg-gray-900 p-4 text-white md:min-h-screen md:w-64 md:p-6">
        <h1 className="mb-4 text-xl font-bold md:mb-8 md:text-2xl">
          AdminPanel
        </h1>

        <nav>
          <ul className="space-y-3">
            <li>
              <a
                href="#dashboard"
                className="block rounded-lg bg-blue-600 px-4 py-3"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block rounded-lg px-4 py-3 hover:bg-gray-800"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#users"
                className="block rounded-lg px-4 py-3 hover:bg-gray-800"
              >
                Users
              </a>
            </li>

            <li>
              <a
                href="#settings"
                className="block rounded-lg px-4 py-3 hover:bg-gray-800"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-8 w-full bg-red-800 rounded-lg border border-gray-700 px-4 py-3 text-left font-medium text-gray-200 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Log out
        </button>
      </aside>

      {/* Main content */}
      <main
        id="dashboard"
        className="min-w-0 flex-1 p-4 sm:p-6 md:p-8"
      >
        {/* Header and search */}
        <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Dashboard Overview
            </h2>

            <p className="mt-2 text-gray-600">
              Welcome back! Here is your dashboard.
            </p>
          </div>

          <div className="w-full lg:max-w-sm">
            <label htmlFor="dashboard-search" className="sr-only">
              Search users
            </label>

            <input
              id="dashboard-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search users by name or email..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </header>

        {/* Dashboard summary cards */}
        <section
          aria-label="Dashboard statistics"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => (
            <article
              key={stat.title}
              className="rounded-xl bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${stat.color}`}
                >
                  {stat.icon}
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                {stat.description}
              </p>
            </article>
          ))}
        </section>

        {/* Recent Users */}
        <section
          id="users"
          className="mt-8 rounded-xl bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Recent Users
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Showing {filteredUsers.length} matching user
              {filteredUsers.length !== 1 ? "s" : ""}.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="border-b border-gray-200 bg-gray-50 text-gray-600">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Name
                  </th>

                  <th scope="col" className="px-4 py-3 font-semibold">
                    Email
                  </th>

                  <th scope="col" className="px-4 py-3 font-semibold">
                    Role
                  </th>

                  <th scope="col" className="px-4 py-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.email}
                      className="border-t border-gray-100"
                    >
                      <td className="px-4 py-4 font-medium text-gray-900">
                        {user.name}
                      </td>

                      <td className="px-4 py-4 text-gray-600">
                        {user.email}
                      </td>

                      <td className="px-4 py-4 text-gray-600">
                        {user.role}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No users found. Try another search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-8 rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Recent Activity
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              A summary of recent dashboard events.
            </p>
          </div>

          <ul className="divide-y divide-gray-100">
            <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-gray-800">
                  New user registered
                </p>

                <p className="text-sm text-gray-500">
                  Ama Mensah joined the platform
                </p>
              </div>

              <span className="text-sm text-gray-500">
                5 minutes ago
              </span>
            </li>

            <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-gray-800">
                  Project updated
                </p>

                <p className="text-sm text-gray-500">
                  Website redesign status changed
                </p>
              </div>

              <span className="text-sm text-gray-500">
                30 minutes ago
              </span>
            </li>

            <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-gray-800">
                  Task completed
                </p>

                <p className="text-sm text-gray-500">
                  Homepage review was completed
                </p>
              </div>

              <span className="text-sm text-gray-500">
                1 hour ago
              </span>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500">
          © 2026 AdminPanel. All rights reserved. built by CourageCS.
        </footer>
      </main>
    </div>
  );
}

export default App;


