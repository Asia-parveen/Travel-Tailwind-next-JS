import React from 'react';
import Image from 'next/image';

function LogoGroupSection() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="/images/logosgrp.png"
        alt="logo group"
        width="1073"
        height="162"
      />
    </div>
  );
}

export default LogoGroupSection;
