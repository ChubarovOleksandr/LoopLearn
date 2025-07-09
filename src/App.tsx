import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@layouts/Layout';
import CreateSection from '@pages/createSection/CreateSection';
import Dashboard from '@pages/dashboard/Dashboard';
import QuizPage from '@pages/quiz/default/QuizPage';
import ResultPage from '@pages/quiz/default/ResultPage';

const App: React.FC = () => (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<CreateSection />} />
        <Route path="quiz/default" element={<QuizPage />} />
        <Route path="quiz/default/result" element={<ResultPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
