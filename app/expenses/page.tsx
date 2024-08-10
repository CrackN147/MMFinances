import { FC, Suspense } from 'react';
import { Layout } from '@/components/_pages/expenses/Layout';

type ExpensesPageProps = {};

const ExpensesPage:FC<ExpensesPageProps> = async ({
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
    </Suspense>
  )
}

export default ExpensesPage