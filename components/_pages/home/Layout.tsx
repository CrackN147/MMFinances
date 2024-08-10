'use client';
import { FC } from 'react';
import Link from 'next/link';

type DataType = {
  description: string;
  capacity: null;
  active: boolean;
  return_url: string;
  failure_return_url: string;
  send_customer_receipt: false;
  custom_data: {};
  amount_currency: string;
  platform: string;
  prefilled_customer: {
    email: string;
    last_name: string;
    first_name: string;
  };
  title: string;
  external_id: null;
  hold_and_charge_later: false;
  name: string;
  enable_tabby: false;
  is_widget: true;
  link_type: string;
  id: string;
  amount: 119.99;
  max_amount: null;
  processing_fee_percentage: 3;
  processing_fee_amount: null;
  enable_message: false;
  enable_tips: false;
  enable_quantity: false;
  payment_methods: string[];
  rules: {
    allowed: []
  };
  enable_customer_details: false;
  payment_url: string;
  save_card: string;
  subscription: null;
  payouts_share: null;
}

type LayoutProps = {
  data: DataType | null;
};

export const Layout: FC<LayoutProps> = ({
  data
}) => {
  return (
    <div className='flex flex-col w-full p-20'>
      <div className='flex w-full justify-end mb-20'>
        <Link href='/expenses?page=1&limit=40' className='py-10 px-20 bg-green text-whiteRose rounded-20 hover:bg-greenLight'>
          Expenses
        </Link>
      </div>
      {data ?
        <>
          <div className='flex w-full p-10 border border-x-primaryDark rounded-20'>
            <div className='flex flex-col w-1/2 border-r border-r-primaryDark'>
              <h1 className='text-2md text-primary font-bold underline text-center'>Purchase Details</h1>
              <p><b>Title:</b> {data.title}</p>
              <p><b>Description:</b> {data.description}</p>
              <p><b>Amount:</b> {data.amount}</p>
            </div>
            <div className='flex flex-col w-1/2 pl-20'>
              <h1 className='text-2md text-primary font-bold underline text-center'>Customer Details</h1>
              <p><b>First Name:</b> {data.prefilled_customer.first_name}</p>
              <p><b>Last Name:</b> {data.prefilled_customer.last_name}</p>
              <p><b>Email:</b> {data.prefilled_customer.email}</p>
            </div>
          </div>
          <div id='mamo-checkout' className='flex h-550 mt-20' data-src={data.payment_url}>
          </div>
        </>
        :
        <div className='flex w-full h-300 justify-center items-center'>
          <h1 className='text-2xl text-primary'>Loading...</h1>
        </div>
      }
    </div>
  )
}