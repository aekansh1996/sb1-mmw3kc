"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function OrganizationSignUp() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign Up as Organization</CardTitle>
            <CardDescription>Create your organization account to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input id="orgName" placeholder="Enter your organization name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <div>
                  <Label htmlFor="orgType">Organization Type</Label>
                  <Input id="orgType" placeholder="e.g., Corporate, Educational, Non-profit" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={agreed} onCheckedChange={setAgreed} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full" disabled={!agreed}>Sign Up</Button>
            <div className="text-sm text-center">
              <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
                Already have an account? Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}