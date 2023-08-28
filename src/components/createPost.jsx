import React, { useState } from 'react';
import ArticleForm from './articleForm';

const CreateArticle = () => {

  const handleSubmit = (articleData) => {
    console.log(articleData);
  };

  return (
    <div>
      <h2>Create New Article</h2>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateArticle;