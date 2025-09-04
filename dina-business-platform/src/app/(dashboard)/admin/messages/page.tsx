'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../../../../components/admin/AdminLayout';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: 'PENDING' | 'READ' | 'REPLIED' | 'RESOLVED';
  createdAt: string;
  updatedAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      setMessages(data.sort((a: ContactMessage, b: ContactMessage) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ));
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        await fetchMessages();
      }
    } catch (error) {
      console.error('Error updating message status:', error);
    }
  };

  const deleteMessage = async (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`/api/contact/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          await fetchMessages();
        }
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  const openMessage = (message: ContactMessage) => {
    setSelectedMessage(message);
    setShowModal(true);
    if (message.status === 'PENDING') {
      updateMessageStatus(message.id, 'READ');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'READ':
        return 'bg-blue-100 text-blue-800';
      case 'REPLIED':
        return 'bg-green-100 text-green-800';
      case 'RESOLVED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'fa-clock';
      case 'READ':
        return 'fa-eye';
      case 'REPLIED':
        return 'fa-reply';
      case 'RESOLVED':
        return 'fa-check-circle';
      default:
        return 'fa-envelope';
    }
  };

  const filteredMessages = messages.filter(message => 
    filterStatus === 'all' || message.status.toLowerCase() === filterStatus.toLowerCase()
  );

  const statusCounts = {
    all: messages.length,
    pending: messages.filter(m => m.status === 'PENDING').length,
    read: messages.filter(m => m.status === 'READ').length,
    replied: messages.filter(m => m.status === 'REPLIED').length,
    resolved: messages.filter(m => m.status === 'RESOLVED').length
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600">Manage customer inquiries and messages</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filterStatus === 'all' ? 'bg-blue-100 border-2 border-blue-300' : 'bg-white hover:bg-gray-50'
            } shadow-sm`}
            onClick={() => setFilterStatus('all')}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-900">{statusCounts.all}</p>
              </div>
              <i className="fas fa-envelope text-gray-400" />
            </div>
          </div>
          
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filterStatus === 'pending' ? 'bg-yellow-100 border-2 border-yellow-300' : 'bg-white hover:bg-gray-50'
            } shadow-sm`}
            onClick={() => setFilterStatus('pending')}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{statusCounts.pending}</p>
              </div>
              <i className="fas fa-clock text-yellow-400" />
            </div>
          </div>

          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filterStatus === 'read' ? 'bg-blue-100 border-2 border-blue-300' : 'bg-white hover:bg-gray-50'
            } shadow-sm`}
            onClick={() => setFilterStatus('read')}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Read</p>
                <p className="text-2xl font-bold text-blue-600">{statusCounts.read}</p>
              </div>
              <i className="fas fa-eye text-blue-400" />
            </div>
          </div>

          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filterStatus === 'replied' ? 'bg-green-100 border-2 border-green-300' : 'bg-white hover:bg-gray-50'
            } shadow-sm`}
            onClick={() => setFilterStatus('replied')}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Replied</p>
                <p className="text-2xl font-bold text-green-600">{statusCounts.replied}</p>
              </div>
              <i className="fas fa-reply text-green-400" />
            </div>
          </div>

          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filterStatus === 'resolved' ? 'bg-gray-100 border-2 border-gray-300' : 'bg-white hover:bg-gray-50'
            } shadow-sm`}
            onClick={() => setFilterStatus('resolved')}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-2xl font-bold text-gray-600">{statusCounts.resolved}</p>
              </div>
              <i className="fas fa-check-circle text-gray-400" />
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-xl shadow-sm">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-inbox text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No messages found
              </h3>
              <p className="text-gray-600">
                {filterStatus === 'all' 
                  ? 'No contact messages have been received yet.' 
                  : `No ${filterStatus} messages found.`}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                    message.status === 'PENDING' ? 'bg-yellow-50' : ''
                  }`}
                  onClick={() => openMessage(message)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {message.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                          <i className={`fas ${getStatusIcon(message.status)} mr-1`} />
                          {message.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-2 text-sm text-gray-600">
                        <span>
                          <i className="fas fa-envelope mr-1" />
                          {message.email}
                        </span>
                        {message.phone && (
                          <span>
                            <i className="fas fa-phone mr-1" />
                            {message.phone}
                          </span>
                        )}
                      </div>
                      
                      {message.subject && (
                        <p className="text-sm font-medium text-gray-800 mb-2">
                          Subject: {message.subject}
                        </p>
                      )}
                      
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {message.message}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                          Received: {new Date(message.createdAt).toLocaleString()}
                        </span>
                        {message.updatedAt !== message.createdAt && (
                          <span>
                            Updated: {new Date(message.updatedAt).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <div className="relative">
                        <select
                          value={message.status}
                          onChange={(e) => {
                            e.stopPropagation();
                            updateMessageStatus(message.id, e.target.value);
                          }}
                          className="text-xs px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="PENDING">Pending</option>
                          <option value="READ">Read</option>
                          <option value="REPLIED">Replied</option>
                          <option value="RESOLVED">Resolved</option>
                        </select>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMessage(message.id);
                        }}
                        className="text-red-600 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                      >
                        <i className="fas fa-trash text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Message Detail Modal */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-xl bg-white max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Message Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-xl" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="text-gray-900 font-semibold">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">{selectedMessage.email}</p>
                  </div>
                  {selectedMessage.phone && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <p className="text-gray-900">{selectedMessage.phone}</p>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedMessage.status)}`}>
                      <i className={`fas ${getStatusIcon(selectedMessage.status)} mr-1`} />
                      {selectedMessage.status}
                    </span>
                  </div>
                </div>
              </div>

              {selectedMessage.subject && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <p className="text-gray-900 font-semibold">{selectedMessage.subject}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <div className="bg-white border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <label className="block font-medium">Received</label>
                    <p>{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="block font-medium">Last Updated</label>
                    <p>{new Date(selectedMessage.updatedAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Update Status:</label>
                  <select
                    value={selectedMessage.status}
                    onChange={(e) => updateMessageStatus(selectedMessage.id, e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="READ">Read</option>
                    <option value="REPLIED">Replied</option>
                    <option value="RESOLVED">Resolved</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
