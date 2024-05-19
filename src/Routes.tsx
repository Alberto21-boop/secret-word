import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home';
import { Winner } from './pages/Winner';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/winner' element={<Winner />} />
            </Route>
        </Routes>
    );
}