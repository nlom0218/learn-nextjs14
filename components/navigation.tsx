'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();
  const [num, setNum] = useState(1);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <button onClick={() => setNum((prev) => prev + 1)}>{num}</button>
        </li>
      </ul>
    </nav>
  );
}
