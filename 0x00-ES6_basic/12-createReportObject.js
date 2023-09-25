import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartMents(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
