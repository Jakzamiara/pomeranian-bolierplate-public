import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { NotFound } from "./App/Components/NotFound/NotFound";
import { Blocks } from "./App/Blocks";
import { Layout } from "./App/Layout";
import { Dashboard } from "./App/Dashboard";
import { Exercises } from "./App/Exercises";
import { CV } from "./App/Components/CV/CV";
import { Kalendarz } from "./App/Components/Kalendarz/Kalendarz";
import { ReactOnClick } from "./App/Exercises/ReactExercises/ReactOnClick/ReactOnClick";
import { Blog } from "./App/Blog/Blog";
import { Faq } from "./App/Faq/Faq";
import { TechStack } from "./App/TechStack/TechStack";
import { CookiesBanner } from "./App/Components/CookiesBanner.jsx/CookiesBanner";
import { LocalStorage } from "./App/LocalStorage/LocalStorage";
import { Todo } from "./App/Components/Todo/Todo";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="Kalendarz/*" element={<Kalendarz />} />
          <Route path="ReactOnClick/*" element={<ReactOnClick />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="Faq/*" element={<Faq />} />
          <Route path="TechStack/*" element={<TechStack />} />
          <Route path="CookiesBanner/*" element={<CookiesBanner />} />
          <Route path="LocalStorage/*" element={<LocalStorage />} />
          <Route path="Todo/*" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
