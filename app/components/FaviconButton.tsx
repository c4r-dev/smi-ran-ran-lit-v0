import Link from 'next/link';
import Image from 'next/image';

export default function FaviconButton() {
  return (
    <Link href="/">
      <Image 
        src="/favicon.ico" 
        alt="Site Logo" 
        className="favicon" 
        width={40} 
        height={40}
        priority
      />
    </Link>
  );
}