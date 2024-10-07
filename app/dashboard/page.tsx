"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const [userType, setUserType] = useState('organization'); // This would be set based on the logged-in user's type

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userType === 'organization' ? (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Posted Courses</CardTitle>
                <CardDescription>Manage your course listings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Post New Course</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
                <CardDescription>Review trainer applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>View Applications</Button>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
                <CardDescription>Find new teaching opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Browse Courses</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track your course applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>View Applications</Button>
              </CardContent>
            </Card>
          </>
        )}
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Communicate with organizations or trainers</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Open Inbox</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Edit Profile</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}