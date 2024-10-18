// app/page.tsx
import dynamic from 'next/dynamic';
import '../styles/App.scss';

const Logo = dynamic(() => import('./logo/page'), {
  loading: () => <p>Loading Logo...</p>,
});
const Chargement = dynamic(() => import('./chargement/page'), {
  loading: () => <p>Loading Langues...</p>,
});


export default function HomePage() {
  return (
    <>
        <Logo />
    </> 
  );
}
