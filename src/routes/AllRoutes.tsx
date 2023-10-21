import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';

const AllRoutes: FC = () => (
  <Routes>
    <Route Component={Landing} />
  </Routes>
);

export default AllRoutes;
