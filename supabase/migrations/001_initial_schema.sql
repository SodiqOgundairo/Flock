-- Flock Church Management System
-- Database Schema for Supabase
-- Version: 001

-- ============================================================================
-- EXTENSIONS
-- ============================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- MEMBERS TABLE
-- Church members with contact information
-- ============================================================================
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20),
  date_of_birth DATE,
  gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100) DEFAULT 'Nigeria',
  postal_code VARCHAR(20),
  member_since DATE DEFAULT CURRENT_DATE,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'deceased')),
  profile_image_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- FAMILIES TABLE
-- Family units for grouping members
-- ============================================================================
CREATE TABLE IF NOT EXISTS families (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  address TEXT,
  head_member_id UUID REFERENCES members(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add family reference to members
ALTER TABLE members ADD COLUMN IF NOT EXISTS family_id UUID REFERENCES families(id) ON DELETE SET NULL;

-- ============================================================================
-- GROUPS TABLE
-- Cell groups, ministries, departments
-- ============================================================================
CREATE TABLE IF NOT EXISTS groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50) DEFAULT 'cell_group' CHECK (type IN ('cell_group', 'ministry', 'department', 'choir', 'other')),
  leader_id UUID REFERENCES members(id) ON DELETE SET NULL,
  meeting_day VARCHAR(20),
  meeting_time TIME,
  location TEXT,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- GROUP MEMBERS (Many-to-Many)
-- ============================================================================
CREATE TABLE IF NOT EXISTS group_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('leader', 'assistant', 'member')),
  joined_at DATE DEFAULT CURRENT_DATE,
  UNIQUE(group_id, member_id)
);

-- ============================================================================
-- EVENTS TABLE
-- Services, meetings, special events
-- ============================================================================
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50) DEFAULT 'service' CHECK (type IN ('service', 'meeting', 'conference', 'outreach', 'wedding', 'funeral', 'other')),
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ,
  location TEXT,
  is_recurring BOOLEAN DEFAULT false,
  recurrence_pattern VARCHAR(50), -- weekly, monthly, etc.
  status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'ongoing', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- ATTENDANCE TABLE
-- Check-in records per event
-- ============================================================================
CREATE TABLE IF NOT EXISTS attendance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  check_in_time TIMESTAMPTZ DEFAULT NOW(),
  check_in_method VARCHAR(20) DEFAULT 'manual' CHECK (check_in_method IN ('manual', 'qr_code', 'self_check_in')),
  notes TEXT,
  UNIQUE(event_id, member_id)
);

-- ============================================================================
-- OFFERINGS TABLE
-- Tithes and offering records
-- ============================================================================
CREATE TABLE IF NOT EXISTS offerings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  member_id UUID REFERENCES members(id) ON DELETE SET NULL,
  event_id UUID REFERENCES events(id) ON DELETE SET NULL,
  amount DECIMAL(12, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'NGN',
  type VARCHAR(50) DEFAULT 'offering' CHECK (type IN ('tithe', 'offering', 'donation', 'seed', 'project', 'other')),
  payment_method VARCHAR(50) DEFAULT 'cash' CHECK (payment_method IN ('cash', 'transfer', 'card', 'online', 'other')),
  reference_number VARCHAR(100),
  notes TEXT,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- CHURCH SETTINGS TABLE
-- Global church configuration
-- ============================================================================
CREATE TABLE IF NOT EXISTS church_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  church_name VARCHAR(255) NOT NULL DEFAULT 'My Church',
  tagline TEXT,
  logo_url TEXT,
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100) DEFAULT 'Nigeria',
  phone VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  currency VARCHAR(3) DEFAULT 'NGN',
  timezone VARCHAR(50) DEFAULT 'Africa/Lagos',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default church settings
INSERT INTO church_settings (church_name) VALUES ('My Church') ON CONFLICT DO NOTHING;

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE families ENABLE ROW LEVEL SECURITY;
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE offerings ENABLE ROW LEVEL SECURITY;
ALTER TABLE church_settings ENABLE ROW LEVEL SECURITY;

-- Policies for authenticated users (admins)
CREATE POLICY "Allow authenticated read" ON members FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON members FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON members FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON members FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON families FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON families FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON families FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON families FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON groups FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON groups FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON groups FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON groups FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON group_members FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON group_members FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON group_members FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON group_members FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON events FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON events FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON events FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON events FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON attendance FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON attendance FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON attendance FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON attendance FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON offerings FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated insert" ON offerings FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON offerings FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON offerings FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON church_settings FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated update" ON church_settings FOR UPDATE TO authenticated USING (true);

-- ============================================================================
-- INDEXES
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_members_email ON members(email);
CREATE INDEX IF NOT EXISTS idx_members_status ON members(status);
CREATE INDEX IF NOT EXISTS idx_members_family ON members(family_id);
CREATE INDEX IF NOT EXISTS idx_groups_type ON groups(type);
CREATE INDEX IF NOT EXISTS idx_events_start_date ON events(start_date);
CREATE INDEX IF NOT EXISTS idx_attendance_event ON attendance(event_id);
CREATE INDEX IF NOT EXISTS idx_offerings_date ON offerings(date);
CREATE INDEX IF NOT EXISTS idx_offerings_member ON offerings(member_id);

-- ============================================================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to tables with updated_at
CREATE TRIGGER update_members_updated_at BEFORE UPDATE ON members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_families_updated_at BEFORE UPDATE ON families FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_groups_updated_at BEFORE UPDATE ON groups FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_church_settings_updated_at BEFORE UPDATE ON church_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
