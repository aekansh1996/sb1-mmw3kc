import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const dummyOrganizations = [
  { id: 1, name: 'Tech Co', type: 'Corporate' },
  { id: 2, name: 'Code Academy', type: 'Educational' },
  { id: 3, name: 'Data Insights', type: 'Research' },
];

export default function Organizations() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Organizations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyOrganizations.map((org) => (
            <Card key={org.id}>
              <CardHeader>
                <CardTitle>{org.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Type: {org.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}