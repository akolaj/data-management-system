import { faker } from '@faker-js/faker';

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  dob: Date,
  updated_at: Date
}

export const generateFakeData = (count: number): User[] => {
  const data: User[] = [];
  
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
      phone: faker.phone.number(),
      dob: faker.date.birthdate(),
      updated_at: new Date()
    });
  }
  
  return data;
};