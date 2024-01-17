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
        <Route path="/"                 element={<GeneralPages.Home         />} />
        <Route path="/about"            element={<GeneralPages.About        />} />
        <Route path="/lawyers"          element={<GeneralPages.Lawyers      />} />
        <Route path="/litigations"      element={<GeneralPages.Litigations  />} />
        <Route path="/litigation/:id"   element={<GeneralPages.Litigation   />} />
        <Route path="/blog"             element={<GeneralPages.Blog         />} />
        <Route path="/contact"          element={<GeneralPages.Contact      />} />

        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard"  element={<AdminPages.Dashboard   />} />
          <Route path="litigation" element={<AdminPages.Litigation  />} />
          <Route path="reviews"    element={<AdminPages.Reviews     />} />
          <Route path="lawyers"    element={<AdminPages.Lawyers     />} />
          <Route path="blog"       element={<AdminPages.Blog        />} />
          <Route path="messages"   element={<AdminPages.Messages    />} />
          <Route path="slides"     element={<AdminPages.Slides      />} />

          <Route element={<BackLayout />}>
            <Route path="litigation/new"       element={<AdminPages.NewLitigation  />} />
            <Route path="litigation/edit/:id"  element={<AdminPages.EditLitigation />} />
            <Route path="reviews/new"          element={<AdminPages.NewReview      />} />
            <Route path="reviews/edit/:id"     element={<AdminPages.EditReview     />} />
            <Route path="lawyers/new"          element={<AdminPages.NewLawyers     />} />
            <Route path="lawyers/edit/:id"     element={<AdminPages.EditLawyers    />} />
            <Route path="blog/new"             element={<AdminPages.NewPost        />} />
            <Route path="blog/edit/:id"        element={<AdminPages.EditPost       />} />
            <Route path="slides/new"           element={<AdminPages.NewSlide       />} />
            <Route path="slides/edit/:id"      element={<AdminPages.EditSlide      />} />
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
