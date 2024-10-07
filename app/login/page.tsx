"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function Login() {
  const [userType, setUserType] = useState('organization');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>Enter your credentials to access your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <div>
                  <Label>User Type</Label>
                  <RadioGroup value={userType} onValueChange={setUserType} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="organization" id="organization" />
                      <Label htmlFor="organization">Organization</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="trainer" id="trainer" />
                      <Label htmlFor="trainer">Trainer</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full">Log In</Button>
            <div className="text-sm text-center">
              <Link href="/forgot-password" className="font-medium text-primary hover:text-primary-dark">
                Forgot password?
              </Link>
            </div>
            <div className="text-sm text-center">
              <Link href={userType === 'organization' ? '/org-signup' : '/trainer-signup'} className="font-medium text-primary hover:text-primary-dark">
                Don't have an account? Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}