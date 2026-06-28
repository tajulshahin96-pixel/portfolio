-- Migration: Create contact_messages table

CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow insert access for all users (since this is a public contact form)
CREATE POLICY "Allow public insert to contact_messages"
    ON public.contact_messages
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Only authenticated users (like admin) can read the messages via API if needed
CREATE POLICY "Allow authenticated read to contact_messages"
    ON public.contact_messages
    FOR SELECT
    TO authenticated
    USING (true);
