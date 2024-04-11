import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Support from './pages/Support';
import NoPage from './pages/NoPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="support" element={<Support />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
