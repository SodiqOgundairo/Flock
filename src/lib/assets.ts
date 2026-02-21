/**
 * Centralized Supabase Assets
 * All image URLs from Supabase storage in one place
 */

const SUPABASE_STORAGE_BASE = "https://vkguzolidxeziiytktwt.supabase.co/storage/v1/object/public/assets";

// ============================================================================
// BRANDING
// ============================================================================
export const LOGO = {
  svg: `${SUPABASE_STORAGE_BASE}/Images/logos/Flock%20Logo.svg`,
  // Add more variants as needed
  // png: `${SUPABASE_STORAGE_BASE}/Images/logos/Flock%20Logo.png`,
  // icon: `${SUPABASE_STORAGE_BASE}/Images/logos/Flock%20Icon.svg`,
} as const;

// ============================================================================
// HERO & BACKGROUNDS
// ============================================================================
export const BACKGROUNDS = {
  hero3d: "/assets/hero-3d.png", // Local asset for hero
  meshGradient: `${SUPABASE_STORAGE_BASE}/Images/backgrounds/mesh-gradient.png`,
} as const;

// ============================================================================
// HERO IMAGES
// ============================================================================
export const HERO_IMAGES = {
  community: `${SUPABASE_STORAGE_BASE}/Images/2147664092.jpg`,
} as const;

// ============================================================================
// OG & META
// ============================================================================
export const META = {
  ogImage: `${SUPABASE_STORAGE_BASE}/Images/og/og-image.png`,
  twitterImage: `${SUPABASE_STORAGE_BASE}/Images/og/twitter-card.png`,
} as const;

// ============================================================================
// PLACEHOLDERS
// ============================================================================
export const PLACEHOLDERS = {
  avatar: `${SUPABASE_STORAGE_BASE}/Images/placeholders/avatar.png`,
  churchImage: `${SUPABASE_STORAGE_BASE}/Images/placeholders/church.jpg`,
} as const;

// ============================================================================
// APP INFO
// ============================================================================
export const APP = {
  name: "Flock",
  tagline: "Church Management, Refined",
  description: "The most sophisticated church management experience ever built. Minimalist design meets powerful architecture.",
  url: "https://flock.gr8qm.com",
} as const;