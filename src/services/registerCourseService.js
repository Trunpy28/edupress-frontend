import axiosJWT from "./axiosJWT";
import { handleGetAccessToken } from "./axiosJWT";
const apiUrl = import.meta.env.VITE_API_URL;

const registerCourse = async (accessToken, courseId) => {
  const response = await axiosJWT.post(
    `${apiUrl}/register-course/register`,
    {
      courseId,
    },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
};

const getRegistration = async (accessToken, courseId) => { 
  const response = await axiosJWT.get(
    `${apiUrl}/register-course/get-registration/${courseId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
};

const getTotalRegistrations = async (accessToken) => {
  const response = await axiosJWT.get(
    `${apiUrl}/register-course/admin/get-total-registrations`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return response.data;
}

const getRegistrations = async () => {
  const accessToken = handleGetAccessToken();
  const response = await axiosJWT.get(
    `${apiUrl}/register-course/admin/registrations`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}

export default { registerCourse, getRegistration, getTotalRegistrations, getRegistrations };
