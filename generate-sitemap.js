import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'node:stream';
import * as fs from 'node:fs';

  // An array with your links
  const links = [
    { url: '/',  changefreq: 'daily', priority: 1  },
    { url: '/attractions',  changefreq: 'daily', priority: 0.8  },
    { url: '/attractions/:id',  changefreq: 'daily', priority: 0.7  },
    { url: '/reservation',  changefreq: 'daily', priority: 0.6  },
    { url: '/informations',  changefreq: 'daily', priority: 0.5  },
    { url: '/propos',  changefreq: 'daily', priority: 0.3  },
  ]

  // Create a stream to write to
  const stream = new SitemapStream( { hostname: 'http://localhost:3000' } )
// Fonction pour générer le sitemap
const generateSitemap = async () => {try {
  // Créez un flux pour écrire
  const stream = new SitemapStream({ hostname: 'http://localhost:3000' });

  // Convertissez les liens en un flux lisible et connectez-le
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

  // Enregistrez le fichier sitemap.xml dans le dossier public
  fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('Sitemap généré avec succès dans ./public/sitemap.xml');
} catch (error) {
  console.error('Erreur lors de la génération du sitemap :', error);
}
};

 generateSitemap();