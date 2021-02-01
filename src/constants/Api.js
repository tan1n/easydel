const API_URL = "http://localhost:4000";

export const getall_Pickups_Api = async () => {
  const rawResponse = await fetch(`${API_URL}/pickups`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const content = await rawResponse.json();
  return content;
};

export const save_ShopInfo_Api = async (data) => {
  const rawResponse = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const content = await rawResponse.json();
  return content;
};

export const save_PickUpReq_Api = async (data) => {
  const rawResponse = await fetch(`${API_URL}/pickups`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const content = await rawResponse.json();
  return content;
};
