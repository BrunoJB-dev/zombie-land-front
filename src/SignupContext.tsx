import  instanceAxios  from './utils/axios';

export async function signingUp (firstname: string, lastname: string, email: string, password: string,  ) {

  try {
  console.log("Infos choppées :", {firstname, lastname, email, password });
  const response = await instanceAxios.post('api/signup', {firstname, lastname, email, password});
  console.log(response.data);
  
} catch (error) {
  console.error('Login error:', error);
};

}