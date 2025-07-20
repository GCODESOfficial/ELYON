-- Only keep images column in events table
CREATE TABLE public.events (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    images jsonb DEFAULT '[]'
);

-- New script
-- =========================
-- TABLE: events
-- =========================
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  images jsonb
);

alter table events enable row level security;

create policy "Allow authenticated read"
  on events
  for select
  to authenticated
  using (true);

-- =========================
-- TABLE: live_videos
-- =========================
create table if not exists live_videos (
  id uuid primary key default gen_random_uuid(),
  youtube_url text,
  title text,
  live_date date
);

alter table live_videos enable row level security;

create policy "Allow authenticated read"
  on live_videos
  for select
  to authenticated
  using (true);

-- =========================
-- TABLE: moments
-- =========================
create table if not exists moments (
  id uuid primary key default gen_random_uuid(),
  video_url text,
  moment_date date,
  is_visible boolean default true
);

alter table moments enable row level security;

create policy "Allow authenticated read"
  on moments
  for select
  to authenticated
  using (true);

-- =========================
-- TABLE: sermons
-- =========================
create table if not exists sermons (
  id uuid primary key default gen_random_uuid(),
  youtube_url text,
  title text,
  sermon_date date
);

alter table sermons enable row level security;

create policy "Allow authenticated read"
  on sermons
  for select
  to authenticated
  using (true);

-- =========================
-- STORAGE BUCKETS
-- =========================

-- Bucket: events
insert into storage.buckets (id, name, public)
values ('events', 'events', true)
on conflict (id) do nothing;

-- Bucket: live-videos
insert into storage.buckets (id, name, public)
values ('live_videos', 'live_videos', true)
on conflict (id) do nothing;

-- Bucket: moments
insert into storage.buckets (id, name, public)
values ('moments', 'moments', true)
on conflict (id) do nothing;

-- Bucket: sermons
insert into storage.buckets (id, name, public)
values ('sermons', 'sermons', true)
on conflict (id) do nothing;

-- =========================
-- STORAGE POLICIES
-- =========================

-- EVENTS bucket
create policy "Allow Authenticated Users to read event images"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'events'
  );

create policy "Allow Authenticated Users to upload event images"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'events'
  );

-- LIVE VIDEOS bucket
create policy "Allow Authenticated Users to read live videos"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'live_videos'
  );

create policy "Allow Authenticated Users to upload live videos"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'live_videos'
  );

-- MOMENTS bucket
create policy "Allow Authenticated Users to read moments"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'moments'
  );

create policy "Allow Authenticated Users to upload moments"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'moments'
  );

-- SERMONS bucket
create policy "Allow Authenticated Users to read sermons"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'sermons'
  );

create policy "Allow Authenticated Users to upload sermons"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'sermons'
  );
