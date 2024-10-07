import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const featuredJobs = [
  { id: 1, title: 'React.js Instructor', organization: 'Tech Co', type: 'Part-time', postedDate: '2023-05-15' },
  { id: 2, title: 'Data Science Trainer', organization: 'Data Insights', type: 'Full-time', postedDate: '2023-05-18' },
  { id: 3, title: 'Digital Marketing Expert', organization: 'Marketing Academy', type: 'Contract', postedDate: '2023-05-20' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Welcome to Course Marketplace
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Connect organizations with skilled trainers for tailored learning experiences.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Button asChild size="lg" variant="secondary" className="w-full">
                    <Link href="/org-signup">Sign Up as Organization</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <Link href="/trainer-signup">Sign Up as Trainer</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-background">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our platform simplifies the process of connecting organizations with skilled trainers.
              </p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
              {[
                {
                  name: 'For Organizations',
                  description: 'Post your trainer requirements and find the perfect trainer for your needs.',
                },
                {
                  name: 'For Trainers',
                  description: 'Browse opportunities and apply for teaching positions that match your expertise.',
                },
                {
                  name: 'Seamless Matching',
                  description: 'Our platform facilitates communication and helps you find the right fit quickly.',
                },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <p className="text-lg font-medium">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-muted-foreground">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Featured Trainer Requirements Section */}
        <div className="bg-secondary">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-8">Featured Trainer Requirements</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map(job => (
                <Card key={job.id}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <Badge>{job.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold">{job.organization}</p>
                    <p className="text-sm mt-2">Posted on: {job.postedDate}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/job/${job.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/marketplace">View All Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-background">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Add testimonial cards here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}