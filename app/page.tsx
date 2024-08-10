import { FC, Suspense } from 'react';
import { Layout } from '@/components/_pages/home/Layout';

type HomePageProps = {};

const HomePage:FC<HomePageProps> = async ({
}) => {
  const generateData = async () => {
    try {
      const res = await fetch('https://sandbox.dev.business.mamopay.com/manage_api/v1/links', {
        method: 'POST',
        headers: { 
          accept: 'application/json', 'content-type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAMO_API_KEY}`,
        },
        body: JSON.stringify({
          title: 'Chocolate Box - Small',
          description: '12pcs Chocolate Box',
          active: true,
          return_url: 'https://myawesomewebsite.com/paymentSuccess',
          failure_return_url: 'https://failureurl.com/paymentFailure',
          processing_fee_percentage: 3,
          amount: 119.99,
          amount_currency: 'AED',
          link_type: 'inline',
          email: "george.artenyan@gmail.com",
          first_name: "George",
          last_name: "Artenyan",
          enable_tabby: false,
          enable_message: false,
          enable_tips: false,
          save_card: 'off',
          enable_customer_details: false,
          enable_quantity: false,
          enable_qr_code: false,
          send_customer_receipt: false,
          hold_and_charge_later: false
        }),
        next: { revalidate: 10 }
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  const data = await generateData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout 
        data={data}
      />
    </Suspense>
  )
}

export default HomePage