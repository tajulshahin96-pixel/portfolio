import { createClient } from '@/lib/supabase/server'

// Keep the route dynamic since data changes
export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Fetch messages, ordered by newest first
  const { data: messages, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="max-w-container-max mx-auto px-gutter text-center py-20">
        <div className="inline-flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl">
          <span className="material-symbols-outlined">error</span>
          <span>Failed to load messages: {error.message}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-headline-lg font-bold mb-2">Contact Inquiries</h1>
          <p className="text-on-surface-variant">You have {messages?.length || 0} messages.</p>
        </div>
      </div>

      {!messages || messages.length === 0 ? (
        <div className="glass-card rounded-2xl p-16 text-center border-white/5">
          <span className="material-symbols-outlined text-6xl text-white/20 mb-4 block">inbox</span>
          <h3 className="text-xl font-bold text-on-surface-variant mb-2">No messages yet</h3>
          <p className="text-white/40">When clients fill out the contact form, their messages will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {messages.map((msg) => {
            const date = new Date(msg.created_at).toLocaleString()
            return (
              <div key={msg.id} className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-primary hover:bg-white/5 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  {/* Left: Sender Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{msg.first_name} {msg.last_name}</h3>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wide">
                        {msg.service}
                      </span>
                    </div>
                    
                    <a href={`mailto:${msg.email}`} className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-4 text-sm">
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                      {msg.email}
                    </a>

                    <div className="bg-surface/50 p-5 rounded-xl border border-white/5 text-on-surface leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </div>
                  </div>

                  {/* Right: Meta Info */}
                  <div className="text-left md:text-right shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-2">
                    <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      {date}
                    </div>
                    
                    <a href={`mailto:${msg.email}?subject=Re: Your Inquiry on Portfolio`} className="mt-4 primary-gradient-btn px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                      Reply <span className="material-symbols-outlined text-[16px]">reply</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
