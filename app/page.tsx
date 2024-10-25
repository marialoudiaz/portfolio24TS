// app/page.tsx
import dynamic from 'next/dynamic';
import '../styles/App.scss';
import {motion, AnimatePresence} from "framer-motion";

const Logo = dynamic(() => import('./logo/page'), {
  loading: () => <p>Loading Logo...</p>,
});

export default function HomePage() {
  return (
    <>
        <Logo />
    </> 
  );
}
