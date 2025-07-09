import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutesEnum } from '@enums/routesEnum';
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
        <Route path={RoutesEnum.Create} element={<CreateSection />} />
        <Route path={RoutesEnum.QuizDefault} element={<QuizPage />} />
        <Route path={RoutesEnum.QuizDefaultResult} element={<ResultPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
