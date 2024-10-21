// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();
import path from 'path';
import { fileURLToPath } from 'url';

// Obtém o caminho atual do arquivo para ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],

  images: {
   // domains: ['lh3.googleusercontent.com'],
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'images.unsplash.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/jadersonfarias.png',
      },
    ],
  },


  webpack: (config) => {
    // Habilita cache persistente para evitar erros
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__dirname], // Garante que alterações limpem o cache
      },
    };

    // Corrige possíveis problemas de serialização
    config.infrastructureLogging = {
      level: 'error', // Reduz a verbosidade para ignorar avisos desnecessários
    };

    return config;
  },
};

export default withVanillaExtract(nextConfig);