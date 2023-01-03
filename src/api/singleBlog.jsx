import Api from './api';

export async function singleBlogApi(data) {
  let slug = data;

  console.log('api function slug', { slug });
  return await Api.post(`blog`, { slug }).then((res) => {
    return res.data;
  });
}
