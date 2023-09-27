import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    res = { user, photo };
  } catch (err) {
    res = { photo: null, user: null };
  }

  return res;
}
