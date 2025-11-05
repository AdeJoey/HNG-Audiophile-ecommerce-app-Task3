import { z } from 'zod';

export const checkoutSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name is too long'),
  
  email: z.string()
    .email('Wrong format')
    .min(1, 'Email is required'),
  
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[0-9+\-\s()]+$/, 'Wrong format'),
  
  address: z.string()
    .min(5, 'Address is required')
    .max(100, 'Address is too long'),
  
  zipCode: z.string()
    .min(3, 'ZIP code is required')
    .max(10, 'ZIP code is too long'),
  
  city: z.string()
    .min(2, 'City is required')
    .max(50, 'City is too long'),
  
  country: z.string()
    .min(2, 'Country is required')
    .max(50, 'Country is too long'),
  
  paymentMethod: z.enum(['e-money', 'cash'], {
    required_error: 'Please select a payment method',
  }),
  
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
}).refine((data) => {
  if (data.paymentMethod === 'e-money') {
    return data.eMoneyNumber && data.eMoneyNumber.length >= 9;
  }
  return true;
}, {
  message: 'Wrong format',
  path: ['eMoneyNumber'],
}).refine((data) => {
  if (data.paymentMethod === 'e-money') {
    return data.eMoneyPin && data.eMoneyPin.length >= 4;
  }
  return true;
}, {
  message: 'Wrong format',
  path: ['eMoneyPin'],
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;