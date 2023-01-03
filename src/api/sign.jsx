import Api from './api';

export async function SignList(data) {
  console.log('bloglist api page num', data);

  return await Api.post('signin', data).then((res) => {
    return res.data;
  });
}
