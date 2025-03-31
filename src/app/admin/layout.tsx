import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <div lang="en">
          <div>
            
            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton/>
            <>{children}</>
            </SignedIn>
         
          </div>
        </div>
      </ClerkProvider>
    )
  }