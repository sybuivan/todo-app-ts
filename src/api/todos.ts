import axiosClient from './axios';

const todosApi = {
  async addTodo(formData: any) {
    const response = axiosClient.post('/todo', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    return response;
  },
  async getAllTodos() {
    const response = await axiosClient.get('todo-list');
    return response;
  },

  async checkTodo(id: string, formData: any) {
    const response = await axiosClient.put(`todo-checked/${id}`, formData);
    return response;
  },
};

export default todosApi;
