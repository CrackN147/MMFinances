import { FC, Suspense } from 'react';
import { Layout } from '@/components/_pages/expenses/Layout';

type ExpensesPageProps = {
  searchParams: {
    page: number;
    limit: number;
  }
};

const ExpensesPage:FC<ExpensesPageProps> = async ({
  searchParams = {
    page: 1,
    limit: 40
  }
}) => {
  console.log(searchParams);
  const fetchData = async () => {
    try {
      const res = await fetch(`https://mamo-mock-server.glitch.me/expenses?page=${searchParams.page}&limit=${searchParams.limit}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAMO_API_KEY}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  let data = await fetchData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout 
        data={data}
      />
    </Suspense>
  )
}

export default ExpensesPage