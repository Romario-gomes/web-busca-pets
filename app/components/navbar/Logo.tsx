'use client';

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <span onClick={() => router.push('/')} className="font-bold text-xl">Busca Pets</span>
    </div>
  )
}

export default Logo;