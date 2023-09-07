package com.vrushali.emp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vrushali.emp.entity.empinfo;

public interface EmpRepo extends JpaRepository<empinfo, Long>{
	
	List<empinfo> findByFirstName(String firstname);
	List<empinfo> findByLastName(String lastname);
	
	//custom query:JPQL
	@Query("SELECT e FROM empinfo e WHERE CONCAT(e.firstName,' ',e.lastName)=:fullname")
	List<empinfo> findByFullName(@Param("fullname") String fullname);
	
	
//	@Query("SELECT e FROM empinfo e WHERE (e.empId=CAST(:query AS int))") 
////	OR " +
////			"(e.salary>CAST(:query AS int)) OR "+
////	"LOWER(e.firstName) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
////	"LOWER(e.lastName) LIKE LOWER(CONCAT('%', :query, '%'))" )
////	
	
//	List<empinfo> findBySearch(@Param("query") String query);
	
	
//			
	

	
	
	
}
