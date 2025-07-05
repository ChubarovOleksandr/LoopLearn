import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Index from './components/dashboard/Dashboard';
import CreateSection from './components/createSection/CreateSection';
import QuizPage from './components/quiz/default/QuizPage';
import ResultPage from './components/quiz/default/ResultPage';

const App: React.FC = () => (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="create" element={<CreateSection />} />
        <Route path="quiz/default" element={<QuizPage />} />
        <Route path="quiz/default/result" element={<ResultPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
