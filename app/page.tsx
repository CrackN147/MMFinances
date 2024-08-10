import { FC, Suspense } from 'react';
import { Layout } from '@/components/_pages/home/Layout';

type HomePageProps = {};

const HomePage:FC<HomePageProps> = async ({
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
    </Suspense>
  )
}

export default HomePage