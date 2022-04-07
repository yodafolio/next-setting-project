// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const getList = async () => {
    const { data } = await axios.get('https://reqres.in/api/users?page=2');
    return data;
};

export { getList };
