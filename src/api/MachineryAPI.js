import axios from 'axios';

const cms = process.env.CMS_API;
const baseUrl = `${cms}/api/machines`;

const machineryAPI = {
  getWarehouseMachineryInventory: () => {
    return axios.get(`${baseUrl}/warehouse`);
  },
  getMachineryByProjectId: (projectId) => {
    return axios.get(`${baseUrl}/project/${projectId}`);
  },
  getAllMachinesInProjects: () => {
    return axios.get(`${baseUrl}`);
  },
  requestMachineryForProject: (machineryRequest) => {
    return axios.put(`${baseUrl}/project/request`, machineryRequest);
  },
  returnMachineryForProject: (machineryReturn) => {
    return axios.put(`${baseUrl}/project/return`, machineryReturn);
  },
};

export default machineryAPI;
