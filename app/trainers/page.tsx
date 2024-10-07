import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const dummyTrainers = [
  { id: 1, name: 'John Doe', expertise: 'Web Development' },
  { id: 2, name: 'Jane Smith', expertise: 'Data Science' },
  { id: 3, name: 'Mike Johnson', expertise: 'Digital Marketing' },
];

export default function Trainers() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Trainers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyTrainers.map((trainer) => (
            <Card key={trainer.id}>
              <CardHeader>
                <CardTitle>{trainer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expertise: {trainer.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}