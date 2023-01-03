import Api from './api';

export async function SignUpList(data) {
  console.log('bloglist api page num', data);

  return await Api.post('signup', data).then((res) => {
    return res.data;
  });
}
