import AdminLayout from '../../../components/admin/AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
              <p className="text-blue-100">Here's what's happening with your business today.</p>
            </div>
            <div className="hidden md:block">
              <i className="fas fa-chart-line text-6xl text-blue-200" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: 'Total Users', 
              value: '2,543', 
              change: '+12%', 
              icon: 'fa-users', 
              color: 'from-blue-500 to-blue-600',
              textColor: 'text-blue-600' 
            },
            { 
              title: 'Active Services', 
              value: '12', 
              change: '+3', 
              icon: 'fa-cogs', 
              color: 'from-green-500 to-green-600',
              textColor: 'text-green-600' 
            },
            { 
              title: 'New Messages', 
              value: '87', 
              change: '+24%', 
              icon: 'fa-envelope', 
              color: 'from-purple-500 to-purple-600',
              textColor: 'text-purple-600' 
            },
            { 
              title: 'Revenue', 
              value: '$12,543', 
              change: '+18%', 
              icon: 'fa-dollar-sign', 
              color: 'from-yellow-500 to-yellow-600',
              textColor: 'text-yellow-600' 
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <i className={`fas ${stat.icon} text-white text-lg`} />
                </div>
                <span className="text-green-500 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { icon: 'fa-user-plus', text: 'New user registered', time: '2 minutes ago', color: 'text-green-500' },
                { icon: 'fa-envelope', text: 'New contact message received', time: '15 minutes ago', color: 'text-blue-500' },
                { icon: 'fa-cog', text: 'Service updated successfully', time: '1 hour ago', color: 'text-purple-500' },
                { icon: 'fa-question-circle', text: 'New FAQ added', time: '2 hours ago', color: 'text-yellow-500' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`w-10 h-10 ${activity.color} bg-opacity-10 rounded-full flex items-center justify-center`}>
                    <i className={`fas ${activity.icon} ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'fa-plus', text: 'Add Service', href: '/admin/services/new', color: 'from-blue-500 to-blue-600' },
                { icon: 'fa-user-plus', text: 'Add User', href: '/admin/users/new', color: 'from-green-500 to-green-600' },
                { icon: 'fa-question-circle', text: 'Add FAQ', href: '/admin/faqs/new', color: 'from-purple-500 to-purple-600' },
                { icon: 'fa-blog', text: 'New Post', href: '/admin/blog/new', color: 'from-yellow-500 to-yellow-600' }
              ].map((action, index) => (
                <button 
                  key={index}
                  className={`bg-gradient-to-r ${action.color} text-white p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center`}
                >
                  <i className={`fas ${action.icon} text-2xl mb-2 block`} />
                  <span className="text-sm font-medium">{action.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Analytics Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Placeholder for charts */}
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-chart-bar text-4xl text-blue-400 mb-2" />
                <p className="text-gray-600">Visitor Statistics</p>
                <p className="text-sm text-gray-400">Chart will be implemented here</p>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-chart-pie text-4xl text-green-400 mb-2" />
                <p className="text-gray-600">Revenue Analytics</p>
                <p className="text-sm text-gray-400">Chart will be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
