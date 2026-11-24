import axios from 'axios';
import { create } from 'zustand';

export const useUsersStore = create((set) => ({
  users: {
    loading: false,
    users: [],
    error: null,
  },

  getUsersRequest: () => {

    set((state) => ({
      users: {
        loading: true,
        users: state.users.users,
        error: null,
      },
    }))

    axios
      .get('https://tt-front.vercel.app/prepods')
      .then((response) => {
        set({
          users: {
            users: response.data,
          },
        })
      })
      .catch((error) => {
        set({
          users: {
            loading: false,
            users: [],
            error: error,
          },
        })
      });
  }
}))
