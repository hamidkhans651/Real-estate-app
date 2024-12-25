import { title } from "@/components/primitives";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>

      <ClerkProvider>
   
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
   
    </ClerkProvider>
    </div>
  );
}
