import React, { useState } from 'react';
import QuillEditor from './editor';
import ArticlePreview from './preview';

const ArticleForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [editorHtml, setEditorHtml] = useState('');
  const [category, setCategory] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, category, editorHtml });
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {showPreview ? (
        <ArticlePreview title={title} content={editorHtml} category={category} />
      ) : (
        <>
          <div className="mb-4">
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
              className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <QuillEditor
              value={editorHtml}
              onChange={handleEditorChange}
              className="rounded border focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="None">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Design">Design</option>
              <option value="Algorithms">Algorithms</option>
              <option value="Security">Security</option>
            </select>
          </div>
        </>
      )}
      <span>
        <button onClick={togglePreview} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          {showPreview ? 'Back to Edit' : 'Preview'}
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Publish
        </button>
      </span>
    </form>
  );
};

export default ArticleForm;