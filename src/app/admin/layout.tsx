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
        <html lang="en">
          <body>
            
            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton/>
            <>{children}</>
            </SignedIn>
         
          </body>
        </html>
      </ClerkProvider>
    )
  }