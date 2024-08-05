import { create } from 'zustand';
import { HOST } from '../utils/host';
import axios from 'axios';

const store = create((set) => ({
    product: "",
    suppliers: "",
    suppliersNames: [],
    getProducts: async () => {
        try {
            const newProducts = await axios.get(`${HOST}products`);
            set((state) => ({
                products: newProducts.data
            }))
        } catch (error) {
            console.log(error);
        }
    },
    getSuppliersNames: async () => {
        try {
            const suppliersNames = await axios.get(`${HOST}suppliers/names`);
            set((state)=> ({
                suppliersNames: suppliersNames.data
            }))
        } catch (error) {
            console.log(error);
        }
    },
    addProduct: async () => {
        
    }
}));

export default store