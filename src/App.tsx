import HomePage from 'shared-resources/components/HomePage';
import JobsPage from 'shared-resources/components/JobsPage';
import MainLayout from 'shared-resources/components/MainLayout';
import PostJobsPage from 'shared-resources/components/PostJobsPage';
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
