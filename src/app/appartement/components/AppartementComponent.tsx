
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';

const Appartement = ({ appartement }) => {
  return (
    <Card className="max-w-md mx-auto my-8 shadow-lg">
      <CardHeader>
        <h2 className="text-xl font-bold">{appartement.name}</h2>
        <p className="text-sm text-gray-500">{appartement.cityId}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{appartement.description}</p>
        <ul className="mt-4 space-y-2">
          <li><strong>Size:</strong> {appartement.size} {appartement.unity}</li>
          <li><strong>Chamber:</strong> {appartement.chamber}</li>
          <li><strong>Living Room:</strong> {appartement.living_room}</li>
          <li><strong>Price:</strong> ${appartement.unte_price}</li>
          <li><strong>Verified:</strong> {appartement.verified ? 'Yes' : 'No'}</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" color="primary">Contact Agent</Button>
      </CardFooter>
    </Card>
  );
};

export default Appartement;
