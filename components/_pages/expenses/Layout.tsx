'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FC, useState, useEffect, useCallback } from 'react';

type DataType = {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: string;
  receiptAttached: boolean;
};

type PaginationType = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
  

type LayoutProps = {
  data: {
    expenses: DataType[];
    pagination: PaginationType;
  } | null;
};

export const Layout: FC<LayoutProps> = ({
  data
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (data && data.pagination.hasNextPage) {
      router.push(`/expenses?page=${parseInt(data.pagination.currentPage.toString()) + 1}&limit=${data.pagination.itemsPerPage}`);
    }
  }, [ data, router ]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ handleScroll ]);

  return (
    <div className='flex flex-col w-full p-20'>
      <div className='flex w-full justify-end mb-20'>
        <Link href='/' className='py-10 px-20 bg-green text-whiteRose rounded-20 hover:bg-greenLight'>
          Home
        </Link>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex w-full justify-start border-b p-5'>
          <p className='text-md font-bold text-black p-5 w-1/12'>Date</p>
          <p className='text-md font-bold text-black p-5 w-1/12'>Category</p>
          <p className='text-md font-bold text-black p-5 w-3/12'>Description</p>
          <p className='text-md font-bold text-black p-5 w-1/12'>Amount</p>
          <p className='text-md font-bold text-black p-5 w-1/12'>Currency</p>
          <p className='text-md font-bold text-black p-5 w-2/12'>Payment Method</p>
          <p className='text-md font-bold text-black p-5 w-1/12'>Status</p>
          <p className='text-md font-bold text-black p-5 w-2/12 text-center'>Receipt Attached</p>
        </div>
        {data && data.expenses.map((expense, index) => (
          <div key={index} className='flex w-full justify-start border-b'>
            <p className='text-2sm font-normal text-black p-5 w-1/12'>{expense.date}</p>
            <p className='text-2sm font-normal text-black p-5 w-1/12'>{expense.category}</p>
            <p className='text-2sm font-normal text-black p-5 w-3/12'>{expense.description}</p>
            <p className='text-2sm font-normal text-black p-5 w-1/12'>{expense.amount}</p>
            <p className='text-2sm font-normal text-black p-5 w-1/12'>{expense.currency}</p>
            <p className='text-2sm font-normal text-black p-5 w-2/12'>{expense.paymentMethod}</p>
            <p className='text-2sm font-normal text-black p-5 w-1/12'>{expense.status}</p>
            <p className='text-2sm font-normal text-black p-5 w-2/12 text-center'>{expense.receiptAttached ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}