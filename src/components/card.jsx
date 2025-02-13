import React from 'react';

// Base Card Component
const Card = React.forwardRef(({ 
  className = '',
  variant = 'default',
  hoverable = false,
  children,
  ...props 
}, ref) => {
  const baseStyles = "rounded-xl transition-all duration-300";
  
  const variants = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white shadow-md",
    outline: "bg-transparent border-2 border-gray-200",
    filled: "bg-gray-50",
    gradient: "bg-gradient-to-br from-white to-gray-50",
  };

  const hoverStyles = hoverable ? `
    hover:shadow-lg 
    hover:-translate-y-1 
    hover:border-blue-200
    active:shadow-md
    active:translate-y-0
    cursor-pointer
  ` : '';

  return (
    <div
      ref={ref}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${hoverStyles}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

// Card Header Component
const CardHeader = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={`p-6 border-b border-gray-100 ${className}`}
    {...props}
  >
    {children}
  </div>
));

// Card Title Component
const CardTitle = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <h3
    ref={ref}
    className={`text-lg font-semibold text-gray-800 ${className}`}
    {...props}
  >
    {children}
  </h3>
));

// Card Description Component
const CardDescription = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <p
    ref={ref}
    className={`mt-1 text-sm text-gray-500 ${className}`}
    {...props}
  >
    {children}
  </p>
));

// Card Content Component
const CardContent = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={`p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
));

// Card Footer Component
const CardFooter = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={`p-6 border-t border-gray-100 ${className}`}
    {...props}
  >
    {children}
  </div>
));

// Example usage component showing different card variants
const CardExamples = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Default Card */}
      <Card hoverable>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>This is a default card with hover effects</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">This is the main content of the card.</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Action
          </button>
        </CardFooter>
      </Card>

      {/* Elevated Card */}
      <Card variant="elevated" hoverable>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>This card has a shadow by default</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Content with elevated styling.</p>
        </CardContent>
      </Card>

      {/* Outline Card */}
      <Card variant="outline" hoverable>
        <CardHeader>
          <CardTitle>Outline Card</CardTitle>
          <CardDescription>This card has a more prominent border</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Content with outline styling.</p>
        </CardContent>
      </Card>

      {/* Filled Card */}
      <Card variant="filled" hoverable>
        <CardHeader>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>This card has a light background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Content with filled styling.</p>
        </CardContent>
      </Card>

      {/* Gradient Card */}
      <Card variant="gradient" hoverable>
        <CardHeader>
          <CardTitle>Gradient Card</CardTitle>
          <CardDescription>This card has a subtle gradient background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Content with gradient styling.</p>
        </CardContent>
      </Card>

      {/* Custom Card */}
      <Card 
        hoverable 
        className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
      >
        <CardHeader className="border-blue-100">
          <CardTitle className="text-blue-800">Custom Card</CardTitle>
          <CardDescription className="text-blue-600">
            This card has custom styling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700">Content with custom styling.</p>
        </CardContent>
        <CardFooter className="border-blue-100 flex justify-end">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Action
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  CardExamples 
};