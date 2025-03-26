import { create } from 'zustand';
import { HOST } from '../utils/host';
import axios from 'axios';

const store = create((set) => ({
    products: [],
    suppliers: [],
    suppliersNames: [],
    orders: [],
    productById: {},

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
    getProductById: async (id) => {
        try {
            const findProduct = await axios.get(`${HOST}products/${id}`);
            if (!findProduct.data) throw new Error("No Product was found with the ID provided");
            set((state) => ({
                productById: findProduct.data
            }));
        } catch (error) {
            console.log(error.msg, error);
        }
    },
    getSuppliersNames: async () => {
        try {
            const suppliersNames = await axios.get(`${HOST}suppliers/names`);
            set((state) => ({
                suppliersNames: suppliersNames.data
            }))
        } catch (error) {
            console.log(error);
        }
    },
    addProduct: async (product) => {
        try {
            const newProduct = await axios.post(`${HOST}products`, product)
            console.log("ADDPRODUCT!!! ", newProduct);
            
            set((state) => ({
                products: [...state.products, newProduct.data]
            }))
        } catch (error) {
            console.log("ADD PRODUCT!!!!!!!!!!! ", error);
        }
    },
    putProductById: async (product) => {
        try {
            console.log("ACTION! PRODUCT! ",product);
            let editedProduct = await axios.put(`${HOST}products`, product);
            console.log("editedProduct! ",editedProduct);
            set((state)=>({
                products: [...state.products, ]
            }));
        } catch (error) {
            console.log(error.message, error);
        }
    },
    getSuppliers: async () => {
        try {
            const suppliers = await axios.get(`${HOST}suppliers`);
            set((state) => ({
                suppliers: suppliers.data
            }))
        } catch (error) {
            console.log(error);
        }
    }
}));

export default store