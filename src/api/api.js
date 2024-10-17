import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Existing Endpoints
export const registerUser = async (userData) => {
  return api.post('/auth/register', userData);
};

export const loginUser = async (userData) => {
  return api.post('/auth/login', userData);
};

export const getUserDetails = async () => {
  return api.get('/auth/user');
};

export const logoutUser = async () => {
  return api.get('/auth/logout');
};

export const loginWithGoogle = () => {
  window.open(`${API_URL}/auth/google`, '_self');
};

export const getProfile = async () => {
  return api.get('/profile');
};

export const updateProfile = async (profileData) => {
  return api.put('/profile', profileData);
};

export const getAllUsers = async () => {
  return api.get('/users');
};

export const deleteUser = async (userId) => {
  return api.delete(`/users/${userId}`);
};

export const updateUserRole = async (userId, roleData) => {
  return api.put(`/users/${userId}/role`, roleData);
};

export const getRoles = async () => {
  return api.get('/roles');
};

export const createRole = async (roleData) => {
  return api.post('/roles', roleData);
};

export const updateRole = async (roleId, roleData) => {
  return api.put(`/roles/${roleId}`, roleData);
};

export const deleteRole = async (roleId) => {
  return api.delete(`/roles/${roleId}`);
};

export const getProducts = async () => {
  return api.get('/products');
};

export const createProduct = async (productData) => {
  return api.post('/products', productData);
};

export const addProduct = async (productData) => {
  return api.post('/products', productData);
};

export const updateProduct = async (productId, productData) => {
  return api.put(`/products/${productId}`, productData);
};

export const deleteProduct = async (productId) => {
  return api.delete(`/products/${productId}`);
};

export const getProductPassports = async () => {
  return api.get('/api/product-passports');
};

export const addProductPassport = async (passportData) => {
  return api.post('/api/product-passports', passportData);
};

export const createProductPassport = async (passportData) => {
  return api.post('/api/product-passports', passportData);
};

export const updateProductPassport = async (passportId, passportData) => {
  return api.put(`/api/product-passports/${passportId}`, passportData);
};

export const deleteProductPassport = async (passportId) => {
  return api.delete(`/api/product-passports/${passportId}`);
};

export const getReports = async () => {
  return api.get('/reports');
};

export const createReport = async (reportData) => {
  return api.post('/reports', reportData);
};

export const exportReports = async () => {
  return api.post('/reports/export');
};

export const getReportsData = async () => {
  return api.get('/reports');
};

export const getCredentials = async () => {
  return api.get('/credentials');
};

export const createCredential = async (credentialData) => {
  return api.post('/credentials', credentialData);
};

export const updateCredential = async (credentialId, credentialData) => {
  return api.put(`/credentials/${credentialId}`, credentialData);
};

export const deleteCredential = async (credentialId) => {
  return api.delete(`/credentials/${credentialId}`);
};

export const getDataExchanges = async () => {
  return api.get('/data-exchange');
};

export const createDataExchange = async (exchangeData) => {
  return api.post('/data-exchange', exchangeData);
};

export const requestDataExchange = async (exchangeData) => {
  return api.post('/data-exchange', exchangeData);
};

export const getRecentActions = async () => {
  return api.get('/actions/recent');
};

export const getSettings = async () => {
  return api.get('/settings');
};

export const updateSettings = async (settingsData) => {
  return api.put('/settings', settingsData);
};

// New Action Menu Endpoints
export const fetchActionMenu = async (conn_id) => {
  return api.post(`/action-menu/${conn_id}/fetch`);
};

export const closeActionMenu = async (conn_id) => {
  return api.post(`/action-menu/${conn_id}/close`);
};

export const performActionMenu = async (conn_id, actionData) => {
  return api.post(`/action-menu/${conn_id}/perform`, actionData);
};

export const sendActionMenu = async (conn_id, menuData) => {
  return api.post(`/action-menu/${conn_id}/send-menu`, menuData);
};

// New Credential Definition Endpoints
export const createCredentialDefinition = async (credDefData) => {
  return api.post('/anoncreds/credential-definition', credDefData);
};

export const getCredentialDefinition = async (cred_def_id) => {
  return api.get(`/anoncreds/credential-definition/${cred_def_id}`);
};

export const getAllCredentialDefinitions = async (queryParams) => {
  return api.get('/anoncreds/credential-definitions', { params: queryParams });
};

// New Revocation Management Endpoints
export const createRevocationList = async (revocationData) => {
  return api.post('/anoncreds/revocation-list', revocationData);
};

export const getRevocationRegistry = async (rev_reg_id) => {
  return api.get(`/anoncreds/revocation-registry-definition/${rev_reg_id}`);
};
