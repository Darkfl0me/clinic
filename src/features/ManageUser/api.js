export const Api = {
  saveUser: (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        localStorage.setItem('users', JSON.stringify([...users, data]));
        resolve(data);
      }, 100)
    }),
  editUser: (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const { userData, id } = data; 
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users[id] = userData;
        localStorage.setItem('users', JSON.stringify(users));
        resolve(data);
      }, 300)
    }),
  fetchUser: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const users =  JSON.parse(localStorage.getItem('users') || []);
        resolve(users);
      }, 300)
    })
}