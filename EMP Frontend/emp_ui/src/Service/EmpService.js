import axios from  'axios';

const API_url="http://localhost:8080";


class EmpService
{
    saveEmp(emp)
    {
        return axios.post(API_url+"/api/emps",emp);
    }
    
    getAllEmp()
    {
        return axios.get(API_url+"/")
    }

    getEmpById(id)
    {
        return axios.get(API_url+"/"+id)
    }

    deleteEmp(id)
    {

            // console.log(id);
        return axios.delete(API_url+"/"+id)
    }
    editEmp(emp)
    {
        console.log("eid",emp.empId);
        return axios.put(API_url+"/"+emp.empId,emp)
    }
    getEmpSalary()
    {
        return axios.get(API_url+"/bysalary")
    }
}

export default new EmpService