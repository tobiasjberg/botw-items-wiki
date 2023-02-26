import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Head>
        <link rel="stylesheet" href="/components/layout.css" />
      </Head>
      <header>
        <Link href="/"><a>LoZ:BotW Wiki</a></Link>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Website designed by <a href="https://tobiasjberg.com" target={'_blank'}>Tobias Berg</a>. All data, images, and references to The Legend of Zelda: Breath of the Wild are copyright Nintendo and are used solely for development purposes. Data sourced from the <a href="https://gadhagod.github.io/Hyrule-Compendium-API/" target={'_blank'}>Hyrule Compendium API</a>. Banner image from <a href="https://wallpapercave.com/the-legend-of-zelda-breath-of-the-wild-hd-wallpapers" target={'_blank'}>Wallpaper Cave</a>.</p>
      </footer>
    </div>
  );
}