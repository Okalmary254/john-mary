import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import useTheme from '../../hooks/useTheme'

export default function RootLayout() {
  const { pathname } = useLocation()
  const { dark, toggle } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-bg dark:bg-gray-900">
      <Navbar dark={dark} toggleTheme={toggle} />
      <main
        key={pathname}
        className="flex-1 max-w-3xl w-full mx-auto px-6 pt-28 pb-16 fade-in"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
