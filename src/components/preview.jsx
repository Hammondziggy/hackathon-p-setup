import React from 'react';

const ArticlePreview = ({ title, content, category }) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} />
      <p className="text-gray-600 mb-2">Category: {category}</p>
    </div>
  );
};

export default ArticlePreview;