
const testObj = {
    name: 'mj',
    age: 12
};

export default testObj;

export function addSession() {
    sessionStorage.setItem('name', testObj.name);
};
