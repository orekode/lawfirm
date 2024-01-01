import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// pages 
import * as GeneralPages from "@/pages/general";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<GeneralPages.Home />} />
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
