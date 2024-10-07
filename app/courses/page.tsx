"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const dummyCourses = [
  { id: 1, title: 'Introduction to React', organization: 'Tech Co', date: '2023-06-01' },
  { id: 2, title: 'Advanced Python Programming', organization: 'Code Academy', date: '2023-06-15' },
  { id: 3, title: 'Data Science Fundamentals', organization: 'Data Insights', date: '2023-07-01' },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = dummyCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Course Marketplace</h1>
      <div className="mb-4">
        <Label htmlFor="search">Search Courses</Label>
        <Input
          id="search"
          placeholder="Enter course name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.organization}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Start Date: {course.date}</p>
            </CardContent>
            <CardFooter>
              <Button>Apply</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}