// app/page.tsx
import dynamic from 'next/dynamic';
import '../styles/App.scss';

const Logo = dynamic(() => import('./logo/page'), {
  loading: () => <div>Loading Logo...</div>,
});

export default function HomePage() {
  return (
    <>
        <Logo />
    </> 
  );
}
