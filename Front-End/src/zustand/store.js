import { create } from 'zustand';
import { HOST } from '../utils/host';
import axios from 'axios';

const store = create((set) => ({
    product: "",
    suppliers: "",
    suppliersNames: [],
    orders: [],
    getOrders: async () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    },
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
        
    },
    getSuppliers: async () => {
        try {
            const suppliers = await axios.get(`${HOST}suppliers`);
            set((state)=>({
                suppliers: suppliers.data
            }))
        } catch (error) {
            console.log(error);
        }
    }
}));

export default store