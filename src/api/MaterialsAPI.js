import axios from 'axios';

const cms = process.env.CMS_API;
const baseUrl = `${cms}/api/materials`;

const materialAPI = {
  getWarehouseMaterialsInventory: () => {
    return axios.get(`${baseUrl}/warehouse`);
  },
  refillWarehouseMaterialsInventory: () => {
    return axios.put(`${cms}/api/material/warehouse/refill`);
  },
  getMaterialsByProjectId: (projectId) => {
    return axios.get(`${baseUrl}/project/${projectId}`);
  },
  requestMaterialsForProject: (requestAmount) => {
    return axios.post(`${baseUrl}/project/request`, requestAmount);
  },
  getAllMaterialsInProjects: () => {
    return axios.get(`${baseUrl}`);
  },
};

export default materialAPI;
