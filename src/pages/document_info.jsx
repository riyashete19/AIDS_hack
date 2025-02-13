import React, { useState } from 'react';
import { FileText, Download, MessageCircle, X, ThumbsUp, ThumbsDown, Send, Edit, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/card';

const DocumentViewer = () => {
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [confidenceScore] = useState(75); // Example score
  const [feedbackRating, setFeedbackRating] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Sample document data
  const documentData = {
    id: 1,
    name: 'Financial_Report_Q4.pdf',
    uploadedBy: 'John Doe',
    date: '2025-02-13',
    size: '2.4 MB',
    type: 'Financial',
    category: 'Invoice',
    confidence: confidenceScore,
    content: 'Sample document content...'
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
  
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { text: messageInput, sender: 'user' },
      { text: 'Thank you for your message. I\'ll help you with that.', sender: 'bot' }
    ]);
    setMessageInput('');
  };
  

  const handleFeedbackSubmit = () => {
    // Handle feedback submission
    console.log('Feedback submitted:', { rating: feedbackRating, text: feedbackText });
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Document Viewer</h1>
          <p className="text-gray-600 mt-1">{documentData.name}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Document Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Document Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 min-h-[600px] flex items-center justify-center">
                  <FileText size={48} className="text-gray-400" />
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download Structured Excel/CSV
                </button>
              </CardContent>
            </Card>

            {/* Feedback Section */}
            {showFeedback && (
              <Card className="relative animate-in slide-in-from-bottom duration-300">
                <button 
                  onClick={() => setShowFeedback(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
                <CardHeader>
                  <CardTitle>Provide Feedback</CardTitle>
                  <CardDescription>Help us improve our document processing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <button 
                      onClick={() => setFeedbackRating('positive')}
                      className={`p-3 rounded-full transition-colors ${
                        feedbackRating === 'positive' ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100'
                      }`}
                    >
                      <ThumbsUp className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => setFeedbackRating('negative')}
                      className={`p-3 rounded-full transition-colors ${
                        feedbackRating === 'negative' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                      }`}
                    >
                      <ThumbsDown className="w-6 h-6" />
                    </button>
                  </div>
                  <textarea
                    placeholder="Please provide additional feedback..."
                    className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                  />
                  <button 
                    onClick={handleFeedbackSubmit}
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Submit Feedback
                  </button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Document Info */}
            <Card>
              <CardHeader>
                <CardTitle>Document Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{documentData.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Confidence Score</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          confidenceScore >= 80 ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${confidenceScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{confidenceScore}%</span>
                  </div>
                </div>
                {confidenceScore < 80 && (
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit Document</span>
                  </button>
                )}
                <button 
                  onClick={() => setShowFeedback(true)}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Provide Feedback
                </button>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3 text-yellow-600 bg-yellow-50 rounded-lg p-3">
                  <AlertCircle className="w-5 h-5 mt-0.5" />
                  <p className="text-sm">
                    {confidenceScore < 80 
                      ? "This document's confidence score is below 80%. Please review and edit if necessary." 
                      : "This document has been processed with high confidence."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChat ? (
          <Card className="w-80 h-96 flex flex-col animate-in slide-in-from-bottom duration-300">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Chat Support</CardTitle>
                <button 
                  onClick={() => setShowChat(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <form onSubmit={handleChatSubmit} className="w-full flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </CardFooter>
          </Card>
        ) : (
          <button
            onClick={() => setShowChat(true)}
            className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer;