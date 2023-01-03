import Api from './api';

export async function dashboardApi() {
  // let slug = data;

  // console.log('api function slug', { slug });
  return await Api.get(`dashboard`).then((res) => {
    return res.data;
  });
}
