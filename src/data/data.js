// =======================
// NAVBAR
// =======================
export const navbarLinks = [
  { id: 1, title: "Inicio", url: "/" },
  { id: 2, title: "Artistas", url: "/cursos" },
  { id: 3, title: "Descubrir", url: "/about" },
  { id: 4, title: "Blog", url: "/blog" },
  { id: 5, title: "Contacto", url: "/contacto" }
]

// =======================
// ARTISTAS DESTACADOS
// =======================
export const featuredArtists = [
  {
    id: 1,
    name: "Luna Rodríguez",
    genre: "Indie Folk",
    location: "Ciudad de México",
    followers: 15200,
    songs: 24,
    trending: true
  },
  {
    id: 2,
    name: "The Midnight Waves",
    genre: "Synthwave",
    location: "Los Ángeles",
    followers: 32700,
    songs: 18,
    trending: true
  },
  {
    id: 3,
    name: "Cielo Azul",
    genre: "Dream Pop",
    location: "Buenos Aires",
    followers: 28400,
    songs: 31,
    trending: false
  },
  {
    id: 4,
    name: "Electric Forest",
    genre: "Electronic",
    location: "Berlín",
    followers: 45900,
    songs: 22,
    trending: true
  }
]

// =======================
// GÉNEROS
// =======================
export const musicGenres = [
  { id: 1, name: "Indie Rock", count: 156 },
  { id: 2, name: "Synthwave", count: 89 },
  { id: 3, name: "Dream Pop", count: 112 },
  { id: 4, name: "Indie Folk", count: 203 },
  { id: 5, name: "Electronic", count: 167 },
  { id: 6, name: "Alternative", count: 134 }
]

// =======================
// BLOG
// =======================
export const blogCategories = [
  { id: 1, name: "Producción", count: 12 },
  { id: 2, name: "Entrevistas", count: 8 },
  { id: 3, name: "Tutoriales", count: 15 },
  { id: 4, name: "Tendencias", count: 10 },
  { id: 5, name: "Equipamiento", count: 7 },
  { id: 6, name: "Cultura", count: 9 }
]

// =======================
// ESTADÍSTICAS
// =======================
export const platformStats = {
  totalArtists: 500,
  totalSongs: 10000,
  monthlyStreams: 100000,
  countries: 50,
  collaborations: 200,
  activeUsers: 25000
}

// =======================
// CONTACTO
// =======================
export const contactInfo = {
  email: {
    artists: "artistas@sonicwaves.com",
    support: "soporte@sonicwaves.com",
    press: "prensa@sonicwaves.com"
  },
  phone: "+1 (555) 123-4567",
  address: "Av. Musical #456, Brooklyn, NY"
}

// =======================
// REDES (SIN ICONOS)
// =======================
export const socialLinks = [
  { platform: "Spotify", url: "https://spotify.com/sonicwaves" },
  { platform: "SoundCloud", url: "https://soundcloud.com/sonicwaves" },
  { platform: "Apple Music", url: "https://music.apple.com/sonicwaves" },
  { platform: "YouTube", url: "https://youtube.com/sonicwaves" },
  { platform: "Instagram", url: "https://instagram.com/sonicwaves" }
]
