import HomePage from 'HomePage';
import JobsPage from 'JobsPage';
import MainLayout from 'MainLayout';
import PostJobsPage from 'PostJobsPage';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';

const App: React.FC = () => (
<Routes>
  <Route path='/' element={<MainLayout/>}>
    <Route path='jobs' element={<JobsPage/>}/>
    <Route path ='postJobs' element={<PostJobsPage/>}/>
    <Route path='homePage' element={<HomePage/>}/>

  </Route>

  
</Routes>
);

export default App;
