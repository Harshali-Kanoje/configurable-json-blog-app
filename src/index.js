import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home'
import Post from './views/Post/Post'
import Readpost from './views/ReadPost/ReadPost'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/post',
        element: <Post />
    },
    {
        path: '/post/read/:id',
        element: <Readpost />
    }
])

root.render(
    <RouterProvider router={router}/>
)