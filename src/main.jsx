import React from 'react';
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.jsx'

const root = document.getElementById("root");
//document.getElementById('root')
ReactDom.createRoot(root).render(

  <BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}>

</Route>
</Routes>
</BrowserRouter>,

);

/*
<BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}>

</Route>
</Routes>
</BrowserRouter>,
*/
/*
<BrowserRouter>
<App />
</BrowserRouter>,
*/
