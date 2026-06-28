import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { logout } from '../login/actions'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  // Check if user is authenticated
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Admin Navbar */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-container-max mx-auto px-gutter py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">admin_panel_settings</span>
            <span className="font-headline-md text-xl font-bold">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-on-surface-variant text-sm hidden sm:block">{user.email}</span>
            <form action={logout}>
              <button 
                type="submit" 
                className="flex items-center gap-2 text-sm font-medium hover:text-red-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg"
              >
                Logout <span className="material-symbols-outlined text-[18px]">logout</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10">
        {children}
      </main>
    </div>
  )
}
