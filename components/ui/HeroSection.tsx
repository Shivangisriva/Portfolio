// components/HeroSection.tsx

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('../assets/animation.json'), // Make sure this file exists
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function HeroSection() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}
