import React from 'react';
import ColorBends from './ColorBends';
import profile from './assets/profile.jpeg';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
const App = () => {
  return (
    <div className='w-full h-screen relative bg-black flex justify-center items-center'>
<div  style={{ width: '100%', height: '100vh', position: 'relative' }}>
  <ColorBends
    rotation={91}
    speed={0.29}
    colors={["#5052c573"]}
    transparent
    autoRotate={0}
    scale={1.1}
    frequency={1}
    warpStrength={1}
    mouseInfluence={1}
    parallax={0.5}
    noise={0.15}
    iterations={1}
    intensity={1.5}
    bandWidth={6}
/>
</div>
    <div className='absolute flex flex-col justify-center items-center gap-4'>
  <div className="container">
    
 <img 
  src={profile}
  alt="Profile" 
  className="profile-image"
/>

  <h1 className="text-xl font-bold text-gray-200 ">
   VYRONIX
  </h1>

 <a className="box" href="https://github.com/vyronix26" target="_blank" rel="noreferrer">
    <FaGithub style={{color : '#ffffff'}} /> GitHub
  </a>
  <a className="box" href="https://www.linkedin.com/in/vyronix-0-488a46417?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">
    <FaLinkedin style={{color : '#0077b5'}} /> LinkedIn
  </a>

  <a className="box" href="https://www.facebook.com/share/18jTt3eenf/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
    <FaFacebook style={{color : '#3b5998'}} /> Facebook
  </a>

  <a className="box" href="https://www.instagram.com/vyronix.26" target="_blank" rel="noreferrer">
    <FaInstagram style={{color : '#E4405F'}} /> Instagram
  </a>

  <a className="box" href="https://www.tiktok.com/@vyronix26?_r=1&_t=ZS-97JeQ5iS2sv" target="_blank" rel="noreferrer">
    <FaTiktok style={{color : '#ffffff'}} /> TikTok
  </a>
</div>

    </div>
    </div>
  );
};
export default App;