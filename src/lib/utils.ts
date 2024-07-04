import { type ClassValue, clsx } from "clsx"
import Razorpay from "razorpay"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}


export const loadScript = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const RazorpayPayment = async () => {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?');
    return;
  }

  const options = {
    key: 'rzp_test_u0lvl3tfybywze', // Replace with your Razorpay key ID
    amount: 50000, // Amount in paise (50000 paise = 500 INR)
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    handler: function (response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contact: '9999999999'
    },
    notes: {
      address: 'Razorpay Corporate Office'
    },
    theme: {
      color: '#F37254'
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
