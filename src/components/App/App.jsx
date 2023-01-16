import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Homepage = lazy(() =>
  import('../../views/HomePage/HomePage' /* webpackChunkName: "Homepage" */),
);
const ArticlePage = lazy(() =>
  import(
    '../../views/ArticlePage/ArticlePage' /* webpackChunkName: "ArticlePage" */
  ),
);

const App = () => {
  return (
      <Suspense
        fallback={
          <Loader
            ariaLabel={'ThreeDots'}
            height={100}
            width={100}
            radius={5}
            color={'#708db3'}
          />
        }
      >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
	  </Suspense>
    
  );
};

export default App;
