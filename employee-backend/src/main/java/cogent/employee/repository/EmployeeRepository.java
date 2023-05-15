package cogent.employee.repository;

import org.springframework.stereotype.Repository;

import cogent.employee.entity.Employee;

import org.springframework.data.repository.CrudRepository;


@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long > {

	
}
