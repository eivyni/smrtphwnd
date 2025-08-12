create extension if not exists pgcrypto;

create table if not exists public.posts (
  id uuid default gen_random_uuid() primary key,
  content text not null,
  author text,
  created_at timestamptz default now(),
  approved boolean default true
);

alter table public.posts enable row level security;

create policy "allow_select" on public.posts
  for select
  using (true);

create policy "allow_insert_public" on public.posts
  for insert
  with check (char_length(content) <= 5000);
