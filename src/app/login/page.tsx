'use client';

import { useActionState } from 'react';
import { login } from './actions';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full glass-card rounded-3xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">admin_panel_settings</span>
            <h1 className="text-3xl font-headline-lg font-bold">Admin Login</h1>
            <p className="text-on-surface-variant mt-2">Log in to view client messages</p>
          </div>

          <form action={formAction} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-body-md text-on-surface-variant font-medium">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="admin@example.com"
                className="bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-body-md text-on-surface-variant font-medium">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                placeholder="••••••••"
                className="bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" 
              />
            </div>

            {state?.error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">error</span>
                <p>{state.error}</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isPending}
              className="primary-gradient-btn w-full py-4 rounded-xl text-white font-bold text-lg mt-2 flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Authenticating...
                </>
              ) : (
                <>
                  Login <span className="material-symbols-outlined">login</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
