'use client';

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <span className="font-bold text-xl">Busca Pets</span>
    </div>
  )
}

export default Logo;