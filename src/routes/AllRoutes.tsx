import { FC } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';

const AllRoutes: FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </Router>
);

export default AllRoutes;
