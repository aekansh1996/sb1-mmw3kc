import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const dummyOpportunities = [
  { id: 1, title: 'React.js Instructor Needed', organization: 'Tech Co', location: 'Remote', type: 'Part-time', postedDate: '2023-05-15' },
  { id: 2, title: 'Python Data Science Trainer', organization: 'Data Insights', location: 'New York, NY', type: 'Full-time', postedDate: '2023-05-18' },
  { id: 3, title: 'Digital Marketing Workshop Facilitator', organization: 'Marketing Academy', location: 'Chicago, IL', type: 'Contract', postedDate: '2023-05-20' },
];

export default function TrainingOpportunities() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Training Opportunities</h1>
        <div className="mb-4">
          <Input placeholder="Search opportunities..." className="max-w-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyOpportunities.map(opportunity => (
            <Card key={opportunity.id}>
              <CardHeader>
                <CardTitle>{opportunity.title}</CardTitle>
                <Badge>{opportunity.type}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold">{opportunity.organization}</p>
                <p className="text-sm text-gray-600">{opportunity.location}</p>
                <p className="text-sm mt-2">Posted on: {opportunity.postedDate}</p>
              </CardContent>
              <CardFooter>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}