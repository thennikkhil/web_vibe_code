import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UserButton from '@/modules/auth/components/user-button';
export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Button>Get started</Button>
        <UserButton />
      </div>
    </>
  );
}
