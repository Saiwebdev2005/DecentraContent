// customerData.ts

interface Customer {
  name: string;
  address: string;
  dealsDone: number;
  worksDone:string;
  // Add any other relevant properties
}

const customerData: { [key: string]: Customer } = {
  '0xC2F20D5c81F5B4450aA9cE62638d0bB01DF1935a': {
    name: 'John Doe',
    address: '0xC2F20D5c81F5B4450aA9cE62638d0bB01DF1935a',
    dealsDone: 25,
    worksDone:"ipfs://QmYx6GsYAKnNzZ9A6NvEKV9nf1VaDzJrqDR23Y8YSkebLU"
    // Add other properties
  },
  '0x1234567890abcdef1234567890abcdef12345678': {
    name: 'Jane Smith',
    address: '0x1234567890abcdef1234567890abcdef12345678',
    dealsDone: 15,
    worksDone:"https:/ipfs"
    // Add other properties
  },
  // Add more customer data objects as needed
};

export const getEditorsData = (address: string): Customer | undefined => {
  return customerData[address];
};