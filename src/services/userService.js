import axios from "axios";

const apiURL = "http://localhost:8080/api/v1";

export const handleLogin = async (email, password) => {
  try {
    
    const response = await axios.post(`${apiURL}/login`,{
        email: email,
        password: password
    
    } )

    console.log(response);
    
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }



}

export const handleRegister = async (email, password, name, birthday, gender) => {
  try {
    const response = await axios.post(`${apiURL}/register`,{
        email,
        password,
        birthday,
        name,
        gender
    })
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getUserAccount = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios.get(`${apiURL}/user/account`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response.data.data[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updateUserAccount = async (name, email, birthday, gender) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios.put(`${apiURL}/user/account`, {
      name,
      email,
      birthday,
      gender,
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}