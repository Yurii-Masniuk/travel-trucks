"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getCamperById } from '@/services/api';
import { Camper } from '@/types/camper';

export default function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState<Camper | null>(null);

  useEffect(() => {
    if (id) {
      getCamperById(id as string).then(setCamper);
    }
  }, [id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <div>
      <h1>{camper.name}</h1>
      {/* Тут вставити галерею та опис */}
    </div>
  );
}