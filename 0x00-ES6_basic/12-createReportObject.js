import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
