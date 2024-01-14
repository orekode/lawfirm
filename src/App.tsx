import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// pages 
import * as GeneralPages from "@/pages/general";
import * as AdminPages   from "@/pages/admin";
import Root from "@/layouts/Root";
import AdminLayout from "./layouts/AdminLayout";
import BackLayout from "./layouts/BackLayout";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route path="/" element={<GeneralPages.Home />} />

        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard"  element={<AdminPages.Dashboard   />} />
          <Route path="litigation" element={<AdminPages.Litigation  />} />
          <Route path="reviews"    element={<AdminPages.Reviews     />} />

          <Route element={<BackLayout />}>
            <Route path="litigation/new"      element={<AdminPages.NewLitigation  />} />
            <Route path="litigation/edit/:id" element={<AdminPages.EditLitigation />} />
          </Route>
          
        </Route>
      </Route>
    )
  )
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App
