import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Upload, FileText, Calendar, User, Clock, Bell, Search, Settings, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../components/card';

const Dashboard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Hook for navigation
  
  const [documents] = useState([
    {
      id: 1,
      name: 'Financial_Report_Q4.pdf',
      uploadedBy: 'John Doe',
      date: '2025-02-13',
      size: '2.4 MB',
      type: 'Financial',
      status: 'Processed'
    },
    {
      id: 2,
      name: 'Invoice_January.pdf',
      uploadedBy: 'Jane Smith',
      date: '2025-02-12',
      size: '1.8 MB',
      type: 'Invoice',
      status: 'Processing'
    },
    {
      id: 3,
      name: 'Tax_Documents_2024.pdf',
      uploadedBy: 'Mike Johnson',
      date: '2025-02-11',
      size: '3.2 MB',
      type: 'Tax',
      status: 'Processed'
    }
  ]);

  const handleCardClick = () => {
    navigate('/document'); // Navigate to the document page when clicked
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">DocHub</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Right Nav Items */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              
              {/* Profile Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-medium">JD</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                    <a href="#profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                    <hr className="my-1" />
                    <a href="#logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Document Dashboard</h1>
          <p className="text-gray-600 mt-2">Upload and manage your documents</p>
        </div>

        {/* Upload Section */}
        <div className="mb-8 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-200">
          <div className="text-center py-12">
            <Upload size={48} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">Drop your PDF files here</h3>
            <p className="text-gray-500 mb-4">or</p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
              Browse Files
            </button>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div key={doc.id} onClick={handleCardClick} className="cursor-pointer">
              <Card className="hover:shadow-lg transition-all duration-200 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-2">
                        {doc.type}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        doc.status === 'Processed' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-4 truncate">
                    {doc.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm">{doc.uploadedBy}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{doc.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{doc.size}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
