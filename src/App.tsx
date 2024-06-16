import ThemeProvider from '@/components/shared/ThemeProvider';
import {Toaster} from '@/components/ui/sonner';
import useCheckLocalDataVersion from '@/hooks/use-check-local-data-version';
import OptimizerClickerPage from '@/pages/OptimizerClicker/OptimizerClicker';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import PalaAnimation from "@/pages/PalaAnimation.tsx";
import AboutPage from "@/pages/About.tsx";
import ProfilPage from "@/pages/Profil/Profil.tsx";
import CalculatorPage from "@/pages/Calculator/CalculatorPage.tsx";
import SettingProvider from "@/components/shared/SettingsProvider.tsx";
import AhTracker from "@/pages/AhTracker/AhTracker.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/optimizer-clicker"/>,
  },
  {
    path: '/ah',
    element: <AhTracker/>,
  },
  {
    path: '/xp-calculator/:pseudo?',
    element: <CalculatorPage/>,
  },
  {
    path: '/optimizer-clicker/:pseudo?',
    element: <OptimizerClickerPage/>,
  },
  {
    path: '/profil/:pseudo?',
    element: <ProfilPage/>,
  },
  {
    path: '/pala-animation/:pseudo?',
    element: <PalaAnimation/>,
  },
  {
    path: '/about',
    element: <AboutPage/>,
  },
], {
  basename: '/',
});

function App() {
  const queryClient = new QueryClient();
  useCheckLocalDataVersion();

  return (
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <SettingProvider storageKey="settings">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
          </QueryClientProvider>
          <Toaster/>
        </SettingProvider>
      </ThemeProvider>
  );
}

export default App;
